const {BezierCurve} = require("../../common/ApolloHDMap/Geometry");
const LaneGenerator = require("./LaneGenerator");
const RoadProto = require("../../protobuf_out/modules/map/proto/map_road_pb");
const MapIDProto = require("../../protobuf_out/modules/map/proto/map_id_pb");

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
    constructor({
                    id,
                    centralCurve,
                    forwardLaneList,
                    backwardLaneList,
                    type = RoadProto.Road.Type.CITY_ROAD,
                    startPoint,
                    startHeading,
                    endPoint,
                    endHeading
                }) {
        this.id = id;
        this.type = type;
        this.centralCurve = centralCurve;
        this.forwardLaneList = forwardLaneList;
        this.backwardLaneList = backwardLaneList;
        this.startPoint = startPoint;
        this.startHeading = startHeading;
        this.endPoint = endPoint;
        this.endHeading = endHeading;
    }

    getLaneList() {
        return [...this.forwardLaneList, ...this.backwardLaneList];
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


class RoadGenerator {
    static generateRoad({
                            road_id,
                            startPoint,
                            startHeading,
                            endPoint,
                            endHeading,
                            laneWidth = 3.5,
                            forwardLaneCount = 2,
                            backwardLaneCount = 2,
                            forwardSpeedLimit = 10,
                            backwardSpeedLimit = 10,
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

                // const leftBoundaryType =

                const lane = LaneGenerator.generateLane({
                    startPoint: laneCentralCurveStartPoint,
                    startHeading,
                    endPoint: laneCentralCurveEndPoint,
                    endHeading,
                    id: `lane_${lane_count++}_${road_id}`,
                    laneWidth,
                    speedLimit: forwardSpeedLimit,
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
                    id: `lane_${lane_count++}_${road_id}`,
                    laneWidth,
                    speedLimit: backwardSpeedLimit,
                    isForward: false
                });

                backwardLaneList.push(lane);
            }
        }

        if (forwardLaneList.length > 1) {
            for (let i = 0; i < forwardLaneList.length - 1; i++) {
                const leftLane = forwardLaneList[i];
                const rightLane = forwardLaneList[i + 1];
                leftLane.rightNeighborForwardList.push(rightLane);
                rightLane.leftNeighborForwardList.push(leftLane);
            }
        }

        if (backwardLaneList.length > 1) {
            for (let i = 0; i < backwardLaneList.length - 1; i++) {
                const leftLane = backwardLaneList[i];
                const rightLane = backwardLaneList[i + 1];
                leftLane.rightNeighborForwardList.push(rightLane);
                rightLane.leftNeighborForwardList.push(leftLane);
            }
        }

        return new Road({
            id: road_id,
            centralCurve: roadCentralCurve,
            forwardLaneList,
            backwardLaneList,
            startPoint,
            startHeading,
            endPoint,
            endHeading,
        });
    }

    static generateJunctionLaneRoad(jLane) {
        return new Road({
            id: `R_${jLane.id}`,
            centralCurve: jLane.leftBoundaryCurve,
            forwardLaneList: [jLane],
            backwardLaneList: [],
            startPoint: jLane.leftBoundaryCurve.controlPoints[0],
            startHeading: jLane.leftBoundaryCurve.startHeading,
            endPoint: jLane.leftBoundaryCurve.controlPoints.last(),
            endHeading: jLane.leftBoundaryCurve.endHeading,
        });
    }
}

module.exports = RoadGenerator;