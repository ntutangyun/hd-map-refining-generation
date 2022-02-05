const {BezierCurve} = require("../../common/ApolloHDMap/Geometry");
const Lane = require("../MapElements/Lane");


class LaneGenerator {
    static generateLane({
                            startPoint,
                            startHeading,
                            endPoint,
                            endHeading,
                            id,
                            laneWidth = 3.5,
                            isForward = undefined,
                            speedLimit = 10,
                            turn = undefined
                        }) {

        const centralCurve = BezierCurve.buildBezierCurve({startPoint, startHeading, endPoint, endHeading});

        // build left and right boundaries
        const leftBoundaryStartPoint = startPoint.moveTowards(startHeading + Math.PI / 2, laneWidth / 2);
        const leftBoundaryEndPoint = endPoint.moveTowards(endHeading + Math.PI / 2, laneWidth / 2);
        const leftBoundaryCurve = BezierCurve.buildBezierCurve({
            startPoint: leftBoundaryStartPoint, startHeading, endPoint: leftBoundaryEndPoint, endHeading
        });
        const rightBoundaryStartPoint = startPoint.moveTowards(startHeading - Math.PI / 2, laneWidth / 2);
        const rightBoundaryEndPoint = endPoint.moveTowards(endHeading - Math.PI / 2, laneWidth / 2);
        const rightBoundaryCurve = BezierCurve.buildBezierCurve({
            startPoint: rightBoundaryStartPoint, startHeading, endPoint: rightBoundaryEndPoint, endHeading
        });

        return new Lane({
            id,
            laneWidth,
            isForward,
            speedLimit,
            centralCurve,
            leftBoundaryCurve,
            rightBoundaryCurve,
            startPoint,
            startHeading,
            endPoint,
            endHeading,
            turn
        });
    }
}

module.exports = LaneGenerator;