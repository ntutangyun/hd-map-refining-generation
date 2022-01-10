const {square, cube} = require("../common/mathUtils");
const MapGeoProto = require("../protobuf_out/modules/map/proto/map_geometry_pb");
const CommonGeoProto = require("../protobuf_out/modules/common/proto/geometry_pb");
const {pointDist} = require("../common/ApolloHDMap/Geometry");

class Point {
    static fromXYZObj({x, y, z}) {
        return new Point(x, y, z);
    }

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    moveTowards(heading, distance) {
        const deltaX = distance * Math.cos(heading);
        const deltaY = distance * Math.sin(heading);

        return new Point(this.x + deltaX, this.y + deltaY, this.z);
    }

    equalTo(point) {
        return this.x === point.x && this.y === point.y && this.z === point.z;
    }
}

class BezierCurve {
    constructor(controlPoints, startHeading, endHeading) {
        this.controlPoints = controlPoints;
        this.startHeading = startHeading;
        this.endHeading = endHeading;

        this.x = null;
        this.y = null;

        if (controlPoints.length === 2) {
            // P = (1-t)P1 + tP2
            const [p1, p2] = this.controlPoints;
            this.x = (t) => (1 - t) * p1.x + t * p2.x;
            this.y = (t) => (1 - t) * p1.y + t * p2.y;
        } else if (controlPoints.length === 3) {
            const [p1, p2, p3] = this.controlPoints;
            // P = (1−t)^2 P1 + 2(1−t)tP2 + t^2P3
            this.x = (t) => square(1 - t) * p1.x + 2 * (1 - t) * t * p2.x + square(t) * p3.x;
            this.y = (t) => square(1 - t) * p1.y + 2 * (1 - t) * t * p2.y + square(t) * p3.y;
        } else if (controlPoints.length === 4) {
            const [p1, p2, p3, p4] = this.controlPoints;
            // P = (1−t)^3 P1 + 3(1−t)^2 t P2 +3(1−t)t^2 P3 + t^3 P4
            this.x = (t) => cube(1 - t) * p1.x + 3 * square(1 - t) * t * p2.x + 3 * (1 - t) * square(t) * p3.x + cube(t) * p4.x;
            this.y = (t) => cube(1 - t) * p1.y + 3 * square(1 - t) * t * p2.y + 3 * (1 - t) * square(t) * p3.y + cube(t) * p4.y;
        } else {
            global.logE(this.name, `Invalid control points`);
            console.log(controlPoints);
            process.exit(-1);
        }
    }

    // by default create a cubic Bézier curve with following control points
    //      * start point
    //      * start point move to start heading of length (start_point - end_point) / 4
    //      * end point move to the opposite of end heading of length (start_point - end_point) / 4
    static buildBezierCurve({
                                startPoint,
                                startHeading,
                                endPoint,
                                endHeading,
                            }) {
        console.assert(startPoint && endPoint, "start point and end point cannot be undefined or null");
        console.assert(!isNaN(startHeading) && !isNaN(endHeading), "start heading and end heading should be defined");
        console.assert(!startPoint.equalTo(endPoint), "Start point shall not equal to the end point");

        const segmentDist = pointDist(startPoint, endPoint);
        const startOffsetCtrlPoint = startPoint.moveTowards(startHeading, segmentDist / 2);
        const endOffsetCtrlPoint = endPoint.moveTowards(endHeading + Math.PI, segmentDist / 2);
        return new BezierCurve([startPoint, startOffsetCtrlPoint, endOffsetCtrlPoint, endPoint], startHeading, endHeading);
        //
        // const startLine = new StraightLine(startPoint, null, startHeading);
        // const endLine = new StraightLine(endPoint, null, endHeading);
        //
        // const intersectPoint = StraightLine.getLineIntersect(startLine, endLine);

        // if (intersectPoint === null) {
        //     road to create is a straight line with only two control points
        // return new BezierCurve([startPoint, endPoint], startHeading);
        // } else {
        //     road to create is a curve controlled by three control points
        // return new BezierCurve([startPoint, intersectPoint, endPoint], startHeading);
        // }
    }

    get name() {
        return this.constructor.name;
    }

    pointAt(t) {
        return new Point(this.x(t), this.y(t), 0);
    }

    sample(count) {
        const points = [];
        for (let i = 0; i < count; i++) {
            points.push(new Point(this.x(i / (count - 1)), this.y(i / (count - 1))));
        }
        return points;
    }

    // using the Curve class defined in map_geometry.proto
    serializeToProtobuf(curveSampleCount = 10) {
        const curve = new MapGeoProto.Curve();
        const segment = curve.addSegment();
        segment.setS(0);

        const start_position = new CommonGeoProto.PointENU()
            .setX(this.controlPoints.first().x)
            .setY(this.controlPoints.first().y)
            .setZ(this.controlPoints.first().z);
        segment.setStartPosition(start_position);
        segment.setHeading(this.startHeading);
        segment.setLength(this.approximateLength());

        const line_segment = new MapGeoProto.LineSegment();
        segment.setLineSegment(line_segment);

        this.sample(curveSampleCount).forEach(p => {
            line_segment.addPoint().setX(p.x).setY(p.y).setZ(p.z);
        });

        return curve;
    }

    approximateLength() {
        const points = this.sample(100);
        let length = 0;
        for (let i = 0; i < points.length - 1; i++) {
            length += pointDist(points[i], points[i + 1]);
        }
        return length;
    }
}

/*
    p1: {x, y},
    p2: {x, y},
    headingRadian: east to north in radian
 */
class StraightLine {
    constructor(p1, p2 = null, headingRadian = null) {
        // general form:
        // Ax + By + C = 0
        this.a = null;
        this.b = null;
        this.c = null;

        if (p2 !== null) {
            this.a = p2.y - p1.y;
            this.b = p1.x - p2.x;
            this.c = (p1.y - p2.y) * p1.x + (p1.x - p2.x) * p1.y;
        } else if (headingRadian !== null) {
            if (headingRadian === Math.PI / 2) {
                this.a = 1;
                this.b = 0;
                this.c = -1 * p1.x;
            } else {
                const slope = Math.tan(headingRadian);
                this.a = slope;
                this.b = -1;
                this.c = p1.y - slope * p1.x;
            }
        } else {
            console.log(p2, headingRadian);
            global.logE(this.name, "p2 and headingRadian are not defined. cannot create straight line");
            process.exit(-1);
        }
    }

    get name() {
        return this.constructor.name;
    }

    // cramer's rule
    static getLineIntersect(line1, line2) {
        const [a1, b1, c1] = [line1.a, line1.b, line1.c];
        const [a2, b2, c2] = [line2.a, line2.b, line2.c];

        let denorm = a1 * b2 - a2 * b1;
        if (denorm === 0) {
            return null;
        }

        return new Point((b1 * c2 - b2 * c1) / denorm, (c1 * a2 - c2 * a1) / denorm, 0);
    }

    static isOverlap(line1, line2) {
        console.assert(!(line1.a === 0 && line1.b === 0), "line1.a and line.b cannot be both zero");
        if (line1.a !== 0) {
            const factor = line2.a / line1.a; // a2 / a1
            return (line1.b * factor === line2.b) && (line1.c * factor === line2.c);
        } else if (line1.b !== 0) {
            const factor = line2.b / line1.b;
            return (line1.a * factor === line2.a) && (line1.c * factor === line2.c);
        }
    }
}

module.exports = {
    Point,
    BezierCurve,
    StraightLine
};