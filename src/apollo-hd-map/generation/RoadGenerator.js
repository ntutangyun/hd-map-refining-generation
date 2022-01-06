const {BezierCurve} = require("./geometryUtils");
const LaneGenerator = require("./LaneGenerator");
const RoadProto = require("../../../protobuf_out/modules/map/proto/map_road_pb");

// commonly there is only one road section per road.
// the road section contains all the lane ids and the road boundary.
//
// the road boundary will have two edges (only forward lanes) or four edges (forward and reverse lanes).
// in order of
//      one right boundary (i.e. right most boundary of all forward lanes)
//      one left boundary (i.e. left most boundary of all forward lanes)
//      one left boundary (i.e. left most boundary of all reverse lanes)
//      one right boundary (i.e. right most boundary of all reverse lanes)

class Road {
    constructor({id, centralCurve, forwardLaneList, backwardLaneList}) {
        this.id = id;
        this.centralCurve = centralCurve;
        this.forwardLaneList = forwardLaneList;
        this.backwardLaneList = backwardLaneList;
    }

    serializeToProtobuf() {
        const roadProto = new RoadProto.Road();
        return roadProto;
    }
}


class RoadGenerator {
    static generate({
                        roadId,
                        startPoint,
                        startHeading,
                        endPoint,
                        endHeading,
                        curveSampleCount = 11,
                        laneWidth = 3.5,
                        forwardLaneCount = 2,
                        backwardLaneCount = 2
                    }) {
        // generating road central curve
        const roadCentralCurve = BezierCurve.buildBezierCurve({startPoint, startHeading, endPoint, endHeading});
        // const roadCentralCurvePoints = roadCentralCurve.sample(centralCurveSamples);

        // generate forward and backward lanes
        let lane_count = 0;
        const forwardLaneList = [];
        const backwardLaneList = [];

        if (forwardLaneCount > 0) {
            for (let i = 1; i <= forwardLaneCount; i++) {
                const laneCentralCurveStartPoint = startPoint.moveTowards(startHeading - Math.PI / 2, laneWidth * (0.5 + i - 1));
                const laneCentralCurveEndPoint = endPoint.moveTowards(endHeading - Math.PI / 2, laneWidth * (0.5 + i - 1));

                const lane = LaneGenerator.generateLane({
                    startPoint: laneCentralCurveStartPoint,
                    startHeading,
                    endPoint: laneCentralCurveEndPoint,
                    endHeading,
                    laneId: `lane_${lane_count++}_${roadId}`,
                    laneWidth,
                    curveSampleCount,
                    isForward: true
                });

                forwardLaneList.push(lane);
            }
        }
        if (backwardLaneCount > 0) {
            for (let i = 1; i <= backwardLaneCount; i++) {
                const laneCentralCurveStartPoint = endPoint.moveTowards(endHeading + Math.PI / 2, laneWidth * (0.5 + i - 1));
                const laneCentralCurveEndPoint = startPoint.moveTowards(startHeading + Math.PI / 2, laneWidth * (0.5 + i - 1));

                const lane = LaneGenerator.generateLane({
                    startPoint: laneCentralCurveStartPoint,
                    startHeading: endHeading + Math.PI,
                    endPoint: laneCentralCurveEndPoint,
                    endHeading: startHeading + Math.PI,
                    laneId: `lane_${lane_count++}_${roadId}`,
                    laneWidth,
                    curveSampleCount,
                    isForward: false
                });

                backwardLaneList.push(lane);
            }
        }

        return new Road({id: roadId, centralCurve: roadCentralCurve, forwardLaneList, backwardLaneList});
    }
}

module.exports = RoadGenerator;