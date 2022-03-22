const Road = require("../MapElements/Road");

class RoadGenerator {
    static generateRoad({
                            roadId,
                            startPoint,
                            startHeading,
                            endPoint,
                            endHeading,
                            laneWidth = 3.5,
                            forwardLaneCount = 2,
                            backwardLaneCount = 2,
                            forwardSpeedLimit = 10,
                            backwardSpeedLimit = 10,
                            startOffsetRatio = 0.5,
                            endOffsetRatio = 0.5
                        }) {

        const road = new Road({
            id: roadId, startPoint, startHeading, endPoint, endHeading, startOffsetRatio, endOffsetRatio
        });
        road.buildCentralCurve();
        road.buildLanes({forwardLaneCount, forwardSpeedLimit, backwardSpeedLimit, backwardLaneCount, laneWidth});
        return road;
    }

    static generateJunctionLaneRoad(jLane) {
        return new Road({
            id: global.getNewRoadId(),
            centralCurve: jLane.leftBoundaryCurve,
            forwardLaneList: [jLane],
            backwardLaneList: [],
            startPoint: jLane.leftBoundaryCurve.controlPoints[0],
            startHeading: jLane.leftBoundaryCurve.startHeading,
            endPoint: jLane.leftBoundaryCurve.controlPoints.last(),
            endHeading: jLane.leftBoundaryCurve.endHeading,
            speed: 10,
        });
    }
}

module.exports = RoadGenerator;