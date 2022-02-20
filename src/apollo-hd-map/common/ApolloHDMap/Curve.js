const {Point} = require("./Geometry");

class LineSegment {
    constructor(curve) {
        this.curve = curve;
        this.pointList = null;
        this.s = null;
        this.startPosition = null;
        this.length = null;
    }

    init(segData) {
        this.pointList = segData.lineSegment.pointList.map(p => new Point(p.x, p.y, p.z));
        this.s = +segData.s;
        this.startPosition = segData.startPosition;
        this.length = +segData.length;
        return this;
    }

    getFirstPoint() {
        return this.pointList[0];
    }

    getLastPoint() {
        return this.pointList[this.pointList.length - 1];
    }
}

class Curve {
    // parent could be lane or signal
    constructor(parent) {
        this.parent = parent;
        this.lane = parent;
        this.segmentList = null;
    }

    init(curveData) {
        this.segmentList = [];
        curveData.segmentList.forEach(seg => {
            this.segmentList.push(new LineSegment(this).init(seg));
        });
        return this;
    }

    getFirstPoint() {
        return this.segmentList[0].getFirstPoint();
    }

    getLastPoint() {
        return this.segmentList[this.segmentList.length - 1].getLastPoint();
    }

    getAllPoints() {
        let points = [];
        this.segmentList.forEach(segment => points = points.concat(segment.pointList));
        return points;
    }

    getMinXY() {
        let minX = null;
        let minY = null;

        this.segmentList.forEach(seg => {
            seg.pointList.forEach(point => {
                if (minX === null) {
                    minX = point.x;
                    minY = point.y;
                    return;
                }
                minX = minX > point.x ? point.x : minX;
                minY = minY > point.y ? point.y : minY;
            });
        });
        return {minX, minY};
    }
}

module.exports = {
    Curve,
    LineSegment
};