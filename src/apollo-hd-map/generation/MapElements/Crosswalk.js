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
            if (forwardLaneList.length > 0 && backwardLaneList.length > 0) {             // IN-OUT
                const forwardLaneRight = forwardLaneList.last();
                p1 = forwardLaneRight.rightBoundaryCurve.startPoint.copy();
                p0 = forwardLaneRight.rightBoundaryCurve.startPoint.moveTowards(forwardLaneRight.rightBoundaryCurve.startHeading + Math.PI, DEFAULT_CROSSWALK_WIDTH);

                const backwardLaneRight = backwardLaneList.last();
                p2 = backwardLaneRight.rightBoundaryCurve.endPoint.copy();
                p3 = backwardLaneRight.rightBoundaryCurve.endPoint.moveTowards(backwardLaneRight.rightBoundaryCurve.endHeading, DEFAULT_CROSSWALK_WIDTH);

            } else if (forwardLaneList.length > 0) {                    // OUT

                const forwardLaneRight = forwardLaneList.last();
                p1 = forwardLaneRight.rightBoundaryCurve.startPoint.copy();
                p0 = forwardLaneRight.rightBoundaryCurve.startPoint.moveTowards(forwardLaneRight.rightBoundaryCurve.startHeading + Math.PI, DEFAULT_CROSSWALK_WIDTH);

                const forwardLaneLeft = forwardLaneList.first();
                p2 = forwardLaneLeft.leftBoundaryCurve.startPoint.copy();
                p3 = forwardLaneLeft.leftBoundaryCurve.startPoint.moveTowards(forwardLaneLeft.leftBoundaryCurve.startHeading + Math.PI, DEFAULT_CROSSWALK_WIDTH);

            } else if (backwardLaneList.length > 0) {                   // IN

                const backwardLaneLeft = backwardLaneList.first();
                p1 = backwardLaneLeft.leftBoundaryCurve.endPoint.copy();
                p0 = backwardLaneLeft.leftBoundaryCurve.endPoint.moveTowards(backwardLaneLeft.leftBoundaryCurve.endHeading, DEFAULT_CROSSWALK_WIDTH);

                const backwardLaneRight = backwardLaneList.last();
                p2 = backwardLaneRight.rightBoundaryCurve.endPoint.copy();
                p3 = backwardLaneRight.rightBoundaryCurve.endPoint.moveTowards(backwardLaneRight.rightBoundaryCurve.endHeading, DEFAULT_CROSSWALK_WIDTH);
            }

        } else {

            if (forwardLaneList.length > 0 && backwardLaneList.length > 0) {        // IN-OUT

                const forwardLaneRight = forwardLaneList.last();
                p0 = forwardLaneRight.rightBoundaryCurve.endPoint.copy();
                p1 = forwardLaneRight.rightBoundaryCurve.endPoint.moveTowards(forwardLaneRight.rightBoundaryCurve.endHeading, DEFAULT_CROSSWALK_WIDTH);

                const backwardLaneRight = backwardLaneList.last();
                p2 = backwardLaneRight.rightBoundaryCurve.startPoint.moveTowards(backwardLaneRight.rightBoundaryCurve.startHeading + Math.PI, DEFAULT_CROSSWALK_WIDTH);
                p3 = backwardLaneRight.rightBoundaryCurve.startPoint.copy();

            } else if (forwardLaneList.length > 0) {                // IN

                const forwardLaneRight = forwardLaneList.last();
                p0 = forwardLaneRight.rightBoundaryCurve.endPoint.copy();
                p1 = forwardLaneRight.rightBoundaryCurve.endPoint.moveTowards(forwardLaneRight.rightBoundaryCurve.endHeading, DEFAULT_CROSSWALK_WIDTH);

                const forwardLaneLeft = forwardLaneList.first();
                p2 = forwardLaneLeft.leftBoundaryCurve.endPoint.moveTowards(forwardLaneLeft.leftBoundaryCurve.endHeading, DEFAULT_CROSSWALK_WIDTH);
                p3 = forwardLaneLeft.leftBoundaryCurve.endPoint.copy();

            } else if (backwardLaneList.length > 0) {           // OUT

                const backwardLaneLeft = backwardLaneList.first();
                p0 = backwardLaneLeft.leftBoundaryCurve.startPoint.copy();
                p1 = backwardLaneLeft.leftBoundaryCurve.startPoint.moveTowards(backwardLaneLeft.leftBoundaryCurve.startHeading + Math.PI, DEFAULT_CROSSWALK_WIDTH);

                const backwardLaneRight = backwardLaneList.last();
                p2 = backwardLaneRight.rightBoundaryCurve.startPoint.moveTowards(backwardLaneRight.rightBoundaryCurve.startHeading + Math.PI, DEFAULT_CROSSWALK_WIDTH);
                p3 = backwardLaneRight.rightBoundaryCurve.startPoint.copy();
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