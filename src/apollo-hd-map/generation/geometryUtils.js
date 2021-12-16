const {square, cube} = require("../common/mathUtils");

class Point {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

class BezierCurve {
    constructor(controlPoints) {
        this.controlPoints = controlPoints;

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
            // P = (1−t)^3 P1 + 3(1−t)^2 t P2 +3(1−t)t^2 P3 + t^3                           P4
            this.x = (t) => cube(1 - t) * p1.x + 3 * square(1 - t) * t * p2.x + 3 * (1 - t) * square(t) * p3.x + cube(t) * p4.x;
            this.y = (t) => cube(1 - t) * p1.y + 3 * square(1 - t) * t * p2.y + 3 * (1 - t) * square(t) * p3.y + cube(t) * p4.y;
        } else {
            global.logE(this.name, `Invalid control points`);
            console.log(controlPoints);
            process.exit(-1);
        }
    }

    get name() {
        return this.constructor.name;
    }
}

/*
    p: {x, y}
    heading: east to north in degrees
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
            const slope = Math.tan(headingRadian);
            this.a = slope;
            this.b = -1;
            this.c = p1.y - slope * p1.x;
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
}

module.exports = {
    Point,
    BezierCurve,
    StraightLine
};