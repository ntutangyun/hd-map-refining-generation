const CrosswalkProto = require("../../protobuf_out/modules/map/proto/map_crosswalk_pb");
const MapGeoProto = require("../../protobuf_out/modules/map/proto/map_geometry_pb");
const MapIDProto = require("../../protobuf_out/modules/map/proto/map_id_pb");
const OverlapGenerator = require("../Generators/OverlapGenerator");
const {DEFAULT_CROSSWALK_WIDTH} = require("../../common/constants");

// stop sign has no position. it is located by default at the end of the stop line.
class Crosswalk {
    constructor({id, laneList = null, junction = null, road = null}) {
        this.id = id;
        this.laneList = laneList;
        this.junction = junction;
        this.road = road;
        this.polygon = [];
        this.overlapList = [];

        this.computePolygon();
        this.computeOverlap();
    }

    getOverlapList() {
        return [...this.overlapList];
    }

    // polygons are computed in a counter-clockwise order.
    // if this has errors, use the road start/end point and moveTowards function.
    computePolygon() {
        const isOutgoingRoad = this.junction.isRoadOutgoing(this.road);
        const forwardLaneList = this.road.getForwardLaneList();
        const backwardLaneList = this.road.getBackwardLaneList();

        let p0, p1, p2, p3;
        if (isOutgoingRoad) {
            // IN-OUT
            if (forwardLaneList.length > 0 && backwardLaneList.length > 0) {
                const forwardIncomingLane = forwardLaneList.last().getIncomingList().last();
                p0 = forwardIncomingLane.rightBoundaryCurve.pointAt((forwardIncomingLane.length - DEFAULT_CROSSWALK_WIDTH) / forwardIncomingLane.length);
                p1 = forwardIncomingLane.rightBoundaryCurve.pointAt(1);

                const backwardOutgoingLane = backwardLaneList.last().getOutgoingList().last();
                p2 = backwardOutgoingLane.rightBoundaryCurve.pointAt(0);
                p3 = backwardOutgoingLane.rightBoundaryCurve.pointAt(DEFAULT_CROSSWALK_WIDTH / backwardOutgoingLane.length);
            } else if (forwardLaneList.length > 0) {
                const forwardIncomingLaneRight = forwardLaneList.last().getIncomingList().last();
                p0 = forwardIncomingLaneRight.rightBoundaryCurve.pointAt((forwardIncomingLaneRight.length - DEFAULT_CROSSWALK_WIDTH) / forwardIncomingLaneRight.length);
                p1 = forwardIncomingLaneRight.rightBoundaryCurve.pointAt(1);

                const forwardIncomingLaneLeft = forwardLaneList.first().getIncomingList().first();
                p2 = forwardIncomingLaneLeft.leftBoundaryCurve.pointAt(1);
                p3 = forwardIncomingLaneLeft.leftBoundaryCurve.pointAt((forwardIncomingLaneLeft.length - DEFAULT_CROSSWALK_WIDTH) / forwardIncomingLaneLeft.length);
            } else if (backwardLaneList.length > 0) {
                const backwardOutgoingLaneLeft = backwardLaneList.first().getOutgoingList().first();
                p0 = backwardOutgoingLaneLeft.leftBoundaryCurve.pointAt(DEFAULT_CROSSWALK_WIDTH / backwardOutgoingLaneLeft.length);
                p1 = backwardOutgoingLaneLeft.leftBoundaryCurve.pointAt(0);

                const backwardOutgoingLaneRight = backwardLaneList.last().getOutgoingList().last();
                p2 = backwardOutgoingLaneRight.leftBoundaryCurve.pointAt(0);
                p3 = backwardOutgoingLaneRight.leftBoundaryCurve.pointAt(DEFAULT_CROSSWALK_WIDTH / backwardOutgoingLaneRight.length);
            }
        } else {
            // IN-OUT
            if (forwardLaneList.length > 0 && backwardLaneList.length > 0) {
                const forwardOutgoingLane = forwardLaneList.last().getOutgoingList().last();
                p0 = forwardOutgoingLane.rightBoundaryCurve.pointAt(0);
                p1 = forwardOutgoingLane.rightBoundaryCurve.pointAt(DEFAULT_CROSSWALK_WIDTH / forwardOutgoingLane.length);

                const backwardIncomingLane = backwardLaneList.last().getIncomingList().last();
                p2 = backwardIncomingLane.rightBoundaryCurve.pointAt((backwardIncomingLane.length - DEFAULT_CROSSWALK_WIDTH) / backwardIncomingLane.length);
                p3 = backwardIncomingLane.rightBoundaryCurve.pointAt(1);
            } else if (forwardLaneList.length > 0) {
                const forwardOutgoingLaneRight = forwardLaneList.last().getOutgoingList().last();
                p0 = forwardOutgoingLaneRight.rightBoundaryCurve.pointAt(0);
                p1 = forwardOutgoingLaneRight.rightBoundaryCurve.pointAt(DEFAULT_CROSSWALK_WIDTH / forwardOutgoingLaneRight.length);

                const forwardOutgoingLaneLeft = forwardLaneList.first().getOutgoingList().first();
                p2 = forwardOutgoingLaneLeft.leftBoundaryCurve.pointAt(DEFAULT_CROSSWALK_WIDTH / forwardOutgoingLaneRight.length);
                p3 = forwardOutgoingLaneLeft.leftBoundaryCurve.pointAt(0);
            } else if (backwardLaneList.length > 0) {
                const backwardIncomingLaneLeft = backwardLaneList.first().getIncomingList().first();
                p0 = backwardIncomingLaneLeft.leftBoundaryCurve.pointAt(1);
                p1 = backwardIncomingLaneLeft.leftBoundaryCurve.pointAt((backwardIncomingLaneLeft.length - DEFAULT_CROSSWALK_WIDTH) / backwardIncomingLaneLeft.length);

                const backwardIncomingLaneRight = backwardLaneList.last().getIncomingList().last();
                p2 = backwardIncomingLaneRight.leftBoundaryCurve.pointAt((backwardIncomingLaneRight.length - DEFAULT_CROSSWALK_WIDTH) / backwardIncomingLaneRight.length);
                p3 = backwardIncomingLaneRight.leftBoundaryCurve.pointAt(1);
            }
        }

        this.polygon = [p0, p1, p2, p3];
    }

    computeOverlap() {
        // overlap with lanes
        this.laneList.forEach(lane => {
            const overlap = OverlapGenerator.generateCrosswalkLaneOverlap(this, lane);
            lane.overlapList.push(overlap);
            this.overlapList.push(overlap);
        });

        // overlap with junction
        const jOverlap = OverlapGenerator.generateCrosswalkJunctionOverlap(this, this.junction);
        this.junction.overlapList.push(jOverlap);
        this.overlapList.push(jOverlap);
    }

    serializeToProtobuf() {
        const crosswalk = new CrosswalkProto.Crosswalk();
        crosswalk.setId((new MapIDProto.Id()).setId(this.id));

        const polygon = new MapGeoProto.Polygon();
        this.polygon.forEach(point => {
            polygon.addPoint().setX(point.x).setY(point.y).setZ(point.z);
        });
        crosswalk.setPolygon(polygon);

        this.overlapList.forEach(overlap => {
            crosswalk.addOverlapId().setId(overlap.id);
        });

        return crosswalk;
    }
}

module.exports = Crosswalk;