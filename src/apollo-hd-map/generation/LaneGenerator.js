const {BezierCurve} = require("./geometryUtils");

class LaneGenerator {
    static generateLane({
                            startPoint,
                            startHeading,
                            endPoint,
                            endHeading,
                            laneId,
                            laneWidth,
                            curveSampleCount = 11,
                            isForward = undefined,
                        }) {

        const laneCentralCurve = BezierCurve.buildBezierCurve({startPoint, startHeading, endPoint, endHeading});

        // build left and right boundaries
        const leftBoundaryStartPoint = startPoint.moveTowards(startHeading + Math.PI / 2, laneWidth / 2);
        const leftBoundaryEndPoint = endPoint.moveTowards(endHeading + Math.PI / 2, laneWidth / 2);
        const leftBoundaryCurve = BezierCurve.buildBezierCurve(
            {
                startPoint: leftBoundaryStartPoint,
                startHeading,
                endPoint: leftBoundaryEndPoint,
                endHeading
            }
        );
        const rightBoundaryStartPoint = startPoint.moveTowards(startHeading - Math.PI / 2, laneWidth / 2);
        const rightBoundaryEndPoint = endPoint.moveTowards(endHeading - Math.PI / 2, laneWidth / 2);
        const rightBoundaryCurve = BezierCurve.buildBezierCurve(
            {
                startPoint: rightBoundaryStartPoint,
                startHeading,
                endPoint: rightBoundaryEndPoint,
                endHeading
            }
        );

        return {
            laneId,
            laneWidth,
            isForward,
            laneCentralCurve,
            leftBoundaryCurve,
            rightBoundaryCurve
        };
    }
}

module.exports = LaneGenerator;