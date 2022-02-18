// commonly there is only one road section per road.
// the road section contains all the lane ids and the road boundary.
//
// the road boundary will have two edges (only forward lanes) or four edges (forward and reverse lanes).
// in order of
//      one right boundary (i.e. right most boundary of all forward lanes)
//      one left boundary (i.e. left most boundary of all forward lanes)
//      one left boundary (i.e. left most boundary of all reverse lanes)
//      one right boundary (i.e. right most boundary of all reverse lanes)

const commonProto = require("../../protobuf_out/modules/common/proto/geometry_pb");
const SignalProto = require("../../protobuf_out/modules/map/proto/map_signal_pb");
const MapIDProto = require("../../protobuf_out/modules/map/proto/map_id_pb");
const MapGeoProto = require("../../protobuf_out/modules/map/proto/map_geometry_pb");
const {pointDist, Point} = require("../../common/ApolloHDMap/Geometry");
const OverlapGenerator = require("../Generators/OverlapGenerator");

// signal boundary is drawn in the following order
//
//      (1)-----(2)                      ^ heading
//       | { X } |                       |
//       | { X } |                  (2)-----(1)
//       | { X } |
//      (4)-----(3)
//         |   |
//         |   |
//         |   |
//
class Signal {
    constructor({
                    id,
                    type = SignalProto.Signal.Type.MIX_3_VERTICAL,
                    position = null,
                    heading = null,
                    laneList = null,
                    junction = null,
                    stopLine = null
                }) {
        this.id = id;
        this.type = type;
        this.position = position;
        this.heading = heading;
        this.junction = junction;
        this.laneList = laneList;
        this.polygon = [];
        this.signalWidth = 0.65;
        this.signalHeight = 1.5;
        this.heightAboveGround = 15.2;

        this.subSignal = [];
        this.overlapList = [];
        this.stopLine = stopLine;

        this.computeDefaultPolygon();
        this.computeDefaultSubSignal();
        this.computeOverlap();
    }

    getOverlapList() {
        return [...this.overlapList];
    }

    computeDefaultPolygon() {
        // assume heading in radian

        const deltaX = this.signalWidth / 2 * Math.cos(Math.PI / 2 - this.heading);
        const deltaY = this.signalWidth / 2 * Math.sin(Math.PI / 2 - this.heading);

        // add point 1
        this.polygon.push(new Point(this.position.x + deltaX, this.position.y - deltaY, this.position.z + this.heightAboveGround + this.signalHeight));

        // add point 2
        this.polygon.push(new Point(this.position.x - deltaX, this.position.y + deltaY, this.position.z + this.heightAboveGround + this.signalHeight));

        // add point 3
        this.polygon.push(new Point(this.position.x - deltaX, this.position.y + deltaY, this.position.z + this.heightAboveGround));

        // add point 4
        this.polygon.push(new Point(this.position.x + deltaX, this.position.y - deltaY, this.position.z + this.heightAboveGround));
    }

    computeDefaultSubSignal() {
        // assume Mix_3_vertical type
        this.subSignal.push({
            id: "0",
            type: SignalProto.Subsignal.Type.CIRCLE,
            location: new Point(this.position.x, this.position.y, this.position.z + this.heightAboveGround + this.signalHeight / 6 * 5),
        });

        this.subSignal.push({
            id: "1",
            type: SignalProto.Subsignal.Type.CIRCLE,
            location: new Point(this.position.x, this.position.y, this.position.z + this.heightAboveGround + this.signalHeight / 2),
        });

        this.subSignal.push({
            id: "2",
            type: SignalProto.Subsignal.Type.CIRCLE,
            location: new Point(this.position.x, this.position.y, this.position.z + this.heightAboveGround + this.signalHeight / 6),
        });
    }

    computeOverlap() {
        // overlap with lanes
        this.laneList.forEach(lane => {
            const overlap = OverlapGenerator.generateSignalLaneOverlap(this, lane);
            lane.overlapList.push(overlap);
            this.overlapList.push(overlap);
        });

        // overlap with junction
        const jOverlap = OverlapGenerator.generateSignalJunctionOverlap(this, this.junction);
        this.junction.overlapList.push(jOverlap);
        this.overlapList.push(jOverlap);
    }

    serializeToProtobuf() {
        const signal = new SignalProto.Signal();
        signal.setId((new MapIDProto.Id()).setId(this.id));
        signal.setType(this.type);

        // section boundary
        const boundary = new MapGeoProto.Polygon();
        this.polygon.forEach(point => {
            boundary.addPoint().setX(point.x).setY(point.y).setZ(point.z);
        });
        signal.setBoundary(boundary);

        this.subSignal.forEach(subSignal => {
            signal.addSubsignal()
                .setId(new MapIDProto.Id().setId(subSignal.id))
                .setType(subSignal.type)
                .setLocation(new commonProto.PointENU().setX(subSignal.location.x).setY(subSignal.location.y).setZ(subSignal.location.z));
        });

        const stopLine = this.stopLine.serializeToProtobuf();
        signal.addStopLine(stopLine);

        return signal;
    }
}

module.exports = Signal;