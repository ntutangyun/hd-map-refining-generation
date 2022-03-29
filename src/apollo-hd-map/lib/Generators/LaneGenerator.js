const {BezierCurve, BezierCurve3D} = global.ApolloTestingLib("common/Math/BezierCurve");
const Lane = require("../MapElements/Lane");
const Lane3D = require("../MapElements/Lane3D");


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
                            turn = undefined,
                            startOffsetRatio = 0.5,
                            endOffsetRatio = 0.5,
                            isJunctionLane = false,
                        }) {

        const centralCurve = BezierCurve.buildBezierCurve({
            startPoint,
            startHeading,
            endPoint,
            endHeading,
            startOffsetRatio,
            endOffsetRatio,
            isJunctionLane
        });

        // build left and right boundaries
        const leftBoundaryStartPoint = startPoint.moveTowards(startHeading + Math.PI / 2, laneWidth / 2);
        const leftBoundaryEndPoint = endPoint.moveTowards(endHeading + Math.PI / 2, laneWidth / 2);
        const leftBoundaryCurve = BezierCurve.buildBezierCurve({
            startPoint: leftBoundaryStartPoint,
            startHeading,
            endPoint: leftBoundaryEndPoint,
            endHeading,
            startOffsetRatio,
            endOffsetRatio,
            isJunctionLane
        });
        const rightBoundaryStartPoint = startPoint.moveTowards(startHeading - Math.PI / 2, laneWidth / 2);
        const rightBoundaryEndPoint = endPoint.moveTowards(endHeading - Math.PI / 2, laneWidth / 2);
        const rightBoundaryCurve = BezierCurve.buildBezierCurve({
            startPoint: rightBoundaryStartPoint,
            startHeading,
            endPoint: rightBoundaryEndPoint,
            endHeading,
            startOffsetRatio,
            endOffsetRatio,
            isJunctionLane
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

    static generateLane3D({
                              startPoint,
                              startHeadingVector,
                              endPoint,
                              endHeadingVector,
                              id,
                              laneWidth = 3.5,
                              isForward = undefined,
                              speedLimit = 10,
                              turn = undefined,
                              startOffsetRatio = 0.5,
                              endOffsetRatio = 0.5,
                              isJunctionLane = false,
                          }) {

        const centralCurve = BezierCurve3D.buildBezierCurve({
            startPoint,
            startHeadingVector,
            endPoint,
            endHeadingVector,
            startOffsetRatio,
            endOffsetRatio,
            isJunctionLane
        });

        // build left and right boundaries
        const leftBoundaryStartPoint = startPoint.moveTowards(startHeadingVector.heading() + Math.PI / 2, laneWidth / 2);
        const leftBoundaryEndPoint = endPoint.moveTowards(endHeadingVector.heading() + Math.PI / 2, laneWidth / 2);
        const leftBoundaryCurve = BezierCurve3D.buildBezierCurve({
            startPoint: leftBoundaryStartPoint,
            startHeadingVector,
            endPoint: leftBoundaryEndPoint,
            endHeadingVector,
            startOffsetRatio,
            endOffsetRatio,
            isJunctionLane
        });
        const rightBoundaryStartPoint = startPoint.moveTowards(startHeadingVector.heading() - Math.PI / 2, laneWidth / 2);
        const rightBoundaryEndPoint = endPoint.moveTowards(endHeadingVector.heading() - Math.PI / 2, laneWidth / 2);
        const rightBoundaryCurve = BezierCurve3D.buildBezierCurve({
            startPoint: rightBoundaryStartPoint,
            startHeadingVector,
            endPoint: rightBoundaryEndPoint,
            endHeadingVector,
            startOffsetRatio,
            endOffsetRatio,
            isJunctionLane
        });

        return new Lane3D({
            id,
            laneWidth,
            isForward,
            speedLimit,
            centralCurve,
            leftBoundaryCurve,
            rightBoundaryCurve,
            startPoint,
            startHeadingVector,
            endPoint,
            endHeadingVector,
            turn
        });
    }
}

module.exports = LaneGenerator;