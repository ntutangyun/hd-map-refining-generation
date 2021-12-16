const {StraightLine, BezierCurve} = require("./geometryUtils");


class RoadGenerator {
    static generate({
                        id,
                        startPoint,
                        startHeading,
                        endPoint,
                        endHeading,
                        laneWidth = 3.5,
                        forwardLaneCount = 1,
                        backwardLaneCount = 1
                    }) {
        console.log("generating road");
        const roadCentralCurve = RoadGenerator.getRoadCentralCurve({startPoint, startHeading, endPoint, endHeading});

        return roadCentralCurve;
    }

    static getRoadCentralCurve({
                                   startPoint,
                                   startHeading,
                                   endPoint,
                                   endHeading,
                               }) {
        const startLine = new StraightLine(startPoint, null, startHeading);
        const endLine = new StraightLine(endPoint, null, endHeading);

        const intersectPoint = StraightLine.getLineIntersect(startLine, endLine);

        let roadCenterCurve;

        if (intersectPoint === null) {
            // road to create is a straight line with only two control points
            roadCenterCurve = new BezierCurve([startPoint, endPoint]);
        } else {
            roadCenterCurve = new BezierCurve([startPoint, intersectPoint, endPoint]);
        }
        return roadCenterCurve;
    }
}

module.exports = RoadGenerator;