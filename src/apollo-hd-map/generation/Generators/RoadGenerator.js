const Road = require("../MapElements/Road");

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

        const road = new Road({
            id: road_id, startPoint, startHeading, endPoint, endHeading,
        });
        // generating road central curve
        road.buildCentralCurve();
        road.buildLanes({forwardLaneCount, forwardSpeedLimit, backwardSpeedLimit, backwardLaneCount, laneWidth});
        return road;
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