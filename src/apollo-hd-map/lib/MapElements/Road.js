// commonly there is only one road section per road.
// the road section contains all the lane ids and the road boundary.
//
// the road boundary will have two edges (only forward lanes) or four edges (forward and reverse lanes).
// in order of
//      one right boundary (i.e. right most boundary of all forward lanes)
//      one left boundary (i.e. left most boundary of all forward lanes)
//      one left boundary (i.e. left most boundary of all reverse lanes)
//      one right boundary (i.e. right most boundary of all reverse lanes)

const LaneProto = global.ApolloTestingLib("protobuf_out/modules/map/proto/map_lane_pb");
const RoadProto = global.ApolloTestingLib("protobuf_out/modules/map/proto/map_road_pb");
const {BezierCurve2D} = global.ApolloTestingLib("common/Math");
const LaneGenerator = require("../Generators/LaneGenerator");
const RoadBase = require("./RoadBase");

class Road extends RoadBase {
    constructor({
                    id,
                    centralCurve = null,
                    forwardLaneList = [],
                    backwardLaneList = [],
                    type = RoadProto.Road.Type.CITY_ROAD,
                    startPoint = null,
                    startHeading = null,
                    endPoint = null,
                    endHeading = null,
                    startOffsetRatio = 0.5,
                    endOffsetRatio = 0.5
                }) {
        super({
            id,
            centralCurve,
            forwardLaneList,
            backwardLaneList,
            type,
            startPoint,
            endPoint,
            startOffsetRatio,
            endOffsetRatio
        });
        this.startHeading = startHeading;
        this.endHeading = endHeading;
    }

    buildCentralCurve() {
        this.centralCurve = BezierCurve2D.buildBezierCurve({
            startPoint: this.startPoint,
            startHeading: this.startHeading,
            endPoint: this.endPoint,
            endHeading: this.endHeading,
            startOffsetRatio: this.startOffsetRatio,
            endOffsetRatio: this.endOffsetRatio
        });
    }

    // this is only called by general road, not junction lane road.
    buildLanes({forwardLaneCount, backwardLaneCount, laneWidth, forwardSpeedLimit, backwardSpeedLimit}) {
        this.forwardLaneList = [];
        this.backwardLaneList = [];

        if (forwardLaneCount > 0) {
            for (let i = 1; i <= forwardLaneCount; i++) {
                const laneCentralCurveStartPoint = this.startPoint.moveTowards(this.startHeading - Math.PI / 2, laneWidth * (0.5 + i - 1));
                const laneCentralCurveEndPoint = this.endPoint.moveTowards(this.endHeading - Math.PI / 2, laneWidth * (0.5 + i - 1));

                const lane = LaneGenerator.generateLane({
                    startPoint: laneCentralCurveStartPoint,
                    startHeading: this.startHeading,
                    endPoint: laneCentralCurveEndPoint,
                    endHeading: this.endHeading,
                    startOffsetRatio: this.startOffsetRatio,
                    endOffsetRatio: this.endOffsetRatio,
                    id: global.getNewLaneId(),
                    laneWidth,
                    speedLimit: forwardSpeedLimit,
                    isForward: true
                });

                lane.leftBoundaryType = LaneProto.LaneBoundaryType.Type.DOTTED_WHITE;
                lane.rightBoundaryType = LaneProto.LaneBoundaryType.Type.DOTTED_WHITE;

                lane.road = this;
                lane.sampleWidth(i - 1, forwardLaneCount - i);
                this.forwardLaneList.push(lane);
            }

            // update lane boundaries
            this.forwardLaneList.first().leftBoundaryType = LaneProto.LaneBoundaryType.Type.CURB;
            this.forwardLaneList.last().rightBoundaryType = LaneProto.LaneBoundaryType.Type.CURB;
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
                    id: global.getNewLaneId(),
                    laneWidth,
                    speedLimit: backwardSpeedLimit,
                    isForward: false
                });

                lane.leftBoundaryType = LaneProto.LaneBoundaryType.Type.DOTTED_WHITE;
                lane.rightBoundaryType = LaneProto.LaneBoundaryType.Type.DOTTED_WHITE;

                lane.road = this;
                lane.sampleWidth(i - 1, backwardLaneCount - i);
                this.backwardLaneList.push(lane);
            }

            // update lane boundaries
            this.backwardLaneList.first().leftBoundaryType = LaneProto.LaneBoundaryType.Type.CURB;
            this.backwardLaneList.last().rightBoundaryType = LaneProto.LaneBoundaryType.Type.CURB;
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


}

module.exports = Road;