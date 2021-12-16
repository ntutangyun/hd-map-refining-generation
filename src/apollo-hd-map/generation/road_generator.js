const {StraightLine, BezierCurve} = require("./geometryUtils");


class RoadGenerator {
    static generate({
                        id,
                        startPoint,
                        startHeading,
                        endPoint,
                        endHeading,
                        centralCurveSamples = 11,
                        laneWidth = 3.5,
                        forwardLaneCount = 2,
                        backwardLaneCount = 2
                    }) {
        // generating road central curve
        const roadCentralCurve = BezierCurve.buildBezierCurve({startPoint, startHeading, endPoint, endHeading});
        // const roadCentralCurvePoints = roadCentralCurve.sample(centralCurveSamples);

        // generate forward and backward lanes
        let lane_count = 0;
        if (forwardLaneCount > 0) {
            // road central curve as the left boundary of both first forward and backward lane
            const forwardRelativeCurves = [roadCentralCurve];
            // add the central curve and right boundary for each lane
            for (let i = 1; i <= forwardLaneCount; i++) {
                const laneCentralCurveStartPoint = startPoint.moveTowards(startHeading - Math.PI / 2, laneWidth / 2);
                const laneCentralCurveEndPoint = endPoint.moveTowards(endHeading - Math.PI / 2, laneWidth / 2);
                // const laneCentralCurve = BezierCurve.buildBezierCurve()
            }

        }

        return roadCentralCurve;
    }
}

module.exports = RoadGenerator;