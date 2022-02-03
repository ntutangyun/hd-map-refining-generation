// commonly there is only one road section per road.
// the road section contains all the lane ids and the road boundary.
//
// the road boundary will have two edges (only forward lanes) or four edges (forward and reverse lanes).
// in order of
//      one right boundary (i.e. right most boundary of all forward lanes)
//      one left boundary (i.e. left most boundary of all forward lanes)
//      one left boundary (i.e. left most boundary of all reverse lanes)
//      one right boundary (i.e. right most boundary of all reverse lanes)

const RoadProto = require("../../protobuf_out/modules/map/proto/map_road_pb");
const {BezierCurve} = require("../../common/ApolloHDMap/Geometry");
const LaneGenerator = require("../Generators/LaneGenerator");
const MapIDProto = require("../../protobuf_out/modules/map/proto/map_id_pb");

class Road {
    constructor({
                    id,
                    centralCurve = null,
                    forwardLaneList = [],
                    backwardLaneList = [],
                    type = RoadProto.Road.Type.CITY_ROAD,
                    startPoint = null,
                    startHeading = null,
                    endPoint = null,
                    endHeading = null
                }) {
        this.id = id;
        this.type = type;
        this.startPoint = startPoint;
        this.startHeading = startHeading;
        this.endPoint = endPoint;
        this.endHeading = endHeading;
        this.centralCurve = centralCurve;
        this.forwardLaneList = forwardLaneList;
        this.backwardLaneList = backwardLaneList;
    }

    getLaneList() {
        return [...this.forwardLaneList, ...this.backwardLaneList];
    }

    buildCentralCurve() {
        this.centralCurve = BezierCurve.buildBezierCurve({
            startPoint: this.startPoint,
            startHeading: this.startHeading,
            endPoint: this.endPoint,
            endHeading: this.endHeading
        });
    }

    buildLanes({forwardLaneCount, backwardLaneCount, laneWidth, forwardSpeedLimit, backwardSpeedLimit}) {
        this.forwardLaneList = [];
        this.backwardLaneList = [];

        // generate forward and backward lanes
        let lane_count = 0;

        if (forwardLaneCount > 0) {
            for (let i = 1; i <= forwardLaneCount; i++) {
                const laneCentralCurveStartPoint = this.startPoint.moveTowards(this.startHeading - Math.PI / 2, laneWidth * (0.5 + i - 1));
                const laneCentralCurveEndPoint = this.endPoint.moveTowards(this.endHeading - Math.PI / 2, laneWidth * (0.5 + i - 1));

                const lane = LaneGenerator.generateLane({
                    startPoint: laneCentralCurveStartPoint,
                    startHeading: this.startHeading,
                    endPoint: laneCentralCurveEndPoint,
                    endHeading: this.endHeading,
                    id: `lane_${lane_count++}_${this.id}`,
                    laneWidth,
                    speedLimit: forwardSpeedLimit,
                    isForward: true
                });

                lane.road = this;
                lane.sampleWidth(i - 1, forwardLaneCount - i);
                this.forwardLaneList.push(lane);
            }
        }

        if (backwardLaneCount > 0) {
            for (let i = 1; i <= backwardLaneCount; i++) {
                const laneCentralCurveStartPoint = this.endPoint.moveTowards(this.endHeading + Math.PI / 2, laneWidth * (0.5 + i - 1));
                const laneCentralCurveEndPoint = this.startPoint.moveTowards(this.startHeading + Math.PI / 2, laneWidth * (0.5 + i - 1));

                const lane = LaneGenerator.generateLane({
                    startPoint: laneCentralCurveStartPoint,
                    startHeading: this.endHeading + Math.PI,
                    endPoint: laneCentralCurveEndPoint,
                    endHeading: this.startHeading + Math.PI,
                    id: `lane_${lane_count++}_${this.id}`,
                    laneWidth,
                    speedLimit: backwardSpeedLimit,
                    isForward: false
                });
                lane.road = this;
                lane.sampleWidth(i - 1, backwardLaneCount - i);
                this.backwardLaneList.push(lane);
            }
        }

        if (this.forwardLaneList.length > 1) {
            for (let i = 0; i < this.forwardLaneList.length - 1; i++) {
                const leftLane = this.forwardLaneList[i];
                const rightLane = this.forwardLaneList[i + 1];
                leftLane.rightNeighborForwardList.push(rightLane);
                rightLane.leftNeighborForwardList.push(leftLane);
            }
        }

        if (this.backwardLaneList.length > 1) {
            for (let i = 0; i < this.backwardLaneList.length - 1; i++) {
                const leftLane = this.backwardLaneList[i];
                const rightLane = this.backwardLaneList[i + 1];
                leftLane.rightNeighborForwardList.push(rightLane);
                rightLane.leftNeighborForwardList.push(leftLane);
            }
        }
    }

    serializeToProtobuf(curveSampleCount) {
        const roadProto = new RoadProto.Road();
        roadProto.setType(this.type);
        roadProto.setId((new MapIDProto.Id()).setId(this.id));

        // add section
        const section = roadProto.addSection();

        // section id:
        section.setId((new MapIDProto.Id()).setId("1"));

        // section lane id:
        [...this.forwardLaneList, ...this.backwardLaneList].forEach(lane => {
            section.addLaneId().setId(lane.id);
        });

        // section boundary
        const boundary = new RoadProto.RoadBoundary();
        section.setBoundary(boundary);

        const outer_polygon = new RoadProto.BoundaryPolygon();
        boundary.setOuterPolygon(outer_polygon);

        if (this.forwardLaneList.length > 0) {
            outer_polygon.addEdge()
                .setType(RoadProto.BoundaryEdge.Type.RIGHT_BOUNDARY)
                .setCurve(this.forwardLaneList.last().rightBoundaryCurve.serializeToProtobuf(curveSampleCount));
            outer_polygon.addEdge()
                .setType(RoadProto.BoundaryEdge.Type.LEFT_BOUNDARY)
                .setCurve(this.forwardLaneList.first().leftBoundaryCurve.serializeToProtobuf(curveSampleCount));
        }

        if (this.backwardLaneList.length > 0) {
            outer_polygon.addEdge()
                .setType(RoadProto.BoundaryEdge.Type.LEFT_BOUNDARY)
                .setCurve(this.backwardLaneList.first().leftBoundaryCurve.serializeToProtobuf(curveSampleCount));
            outer_polygon.addEdge()
                .setType(RoadProto.BoundaryEdge.Type.RIGHT_BOUNDARY)
                .setCurve(this.backwardLaneList.last().rightBoundaryCurve.serializeToProtobuf(curveSampleCount));
        }

        return roadProto;
    }
}

module.exports = Road;