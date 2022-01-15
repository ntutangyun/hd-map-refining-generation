const {square, cube} = require("../mathUtils");
const MapGeoProto = require("../../protobuf_out/modules/map/proto/map_geometry_pb");
const CommonGeoProto = require("../../protobuf_out/modules/common/proto/geometry_pb");

function pointDist(p0, p1) {
    // if (p0.hasOwnProperty("z") && p1.hasOwnProperty("z")) {
    //     return Math.sqrt((p0.x - p1.x) ** 2 + (p0.y - p1.y) ** 2 + (p0.z - p1.z) ** 2);
    // } else {
    return Math.sqrt((p0.x - p1.x) ** 2 + (p0.y - p1.y) ** 2);
    // }
}

function norm(v) {
    return v.hasOwnProperty("z")
        ? Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z)
        : Math.sqrt(v.x * v.x + v.y * v.y);
}

// P0 -> P1
function vector(P0, P1) {
    return {x: P1.x - P0.x, y: P1.y - P0.y};
}

// angle from v1 to v2, anti-clockwise: positive, clockwise: negative
function angleBetween(v1, v2) {
    let angle = Math.atan2(v2.y, v2.x) - Math.atan2(v1.y, v1.x);
    if (angle > Math.PI) {
        angle -= 2 * Math.PI;
    } else if (angle <= -Math.PI) {
        angle += 2 * Math.PI;
    }
    return angle;   // in radian
}

function vectorHeading(v) {
    const east = {x: 1, y: 0};
    return angleBetween(east, v);
}

function cross(v1, v2) {
    return v1.x * v2.y - v1.y * v2.x;
}

/*
    min distance is calculated as following:

           P0
           |
    PA_____P_i______PB     return P0-P_i

    P0
    |
    P_i.......PA_____PB     return P0-PA

                     P0
                      |
    PA_____PB........P_i     return P0-PB

    Reference: https://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment
 */

function minDistToLineSegment(P0, line) {
    const [PA, PB] = line;

    const A = P0.x - PA.x;
    const B = P0.y - PA.y;
    const C = PB.x - PA.x;
    const D = PB.y - PA.y;

    const dot = A * C + B * D;
    const len_sq = C * C + D * D;
    let param = -1;
    if (len_sq !== 0) //in case of 0 length line
        param = dot / len_sq;

    let xx, yy;

    if (param < 0) {
        xx = PA.x;
        yy = PA.y;
    } else if (param > 1) {
        xx = PB.x;
        yy = PB.y;
    } else {
        xx = PA.x + param * C;
        yy = PA.y + param * D;
    }

    const dx = P0.x - xx;
    const dy = P0.y - yy;
    return Math.sqrt(dx * dx + dy * dy);
}

/*
    point projection on line segment

    assume the case is as below ONLY:
           q
           |
    P0_____p______P1     return p

    instead of below two cases:
    q
    |
    p.......P0_____P1

                     q
                     |
    P0_____P1........p

    Reference: https://cs.nyu.edu/~yap/classes/visual/03s/hw/h2/math.pdf
 */

function pointSegmentProjection(q, p0, p1) {
    // p: (X, Y) on line defined by P0 - P1
    // q is a point outside the line
    let X, Y;
    //
    //  | p1.x - p0.x,  p1.y - p0.y |   | X |        |  -q.x(p1.x - p0.x) - q.y(p1.y - p0.y)   |
    //  |                           | * |   | = -1 * |                                         |
    //  | p0.y - p1.y, p1.x - p0.x  |   | Y |        |  -p0.y(p1.x - p0.x) + p0.x(p1.y - p0.y) |
    //
    //  | a,  b |   | X |        |  e  |
    //  |       | * |   | = -1 * |     |
    //  | c,  d |   | Y |        |  f  |

    const a = p1.x - p0.x;
    const b = p1.y - p0.y;
    const c = p0.y - p1.y;
    const d = p1.x - p0.x;

    const e = -q.x * (p1.x - p0.x) - q.y * (p1.y - p0.y);
    const f = -p0.y * (p1.x - p0.x) + p0.x * (p1.y - p0.y);

    X = (b * f - e * d) / (a * d - b * c);
    Y = (a * f - e * c) / (b * c - a * d);

    return {
        x: X,
        y: Y,
        z: 0
    };
}


/*
    Reference:
    https://blog.csdn.net/zhouzi2018/article/details/81871875

    bool intersection(point a,point b,point c,point d)
    {
        //快速排斥实验
        ​if(max(c.x,d.x)<min(a.x,b.x)||max(a.x,b.x)<min(c.x,d.x)||max(c.y,d.y)<min(a.y,b.y)||max(a.y,b.y)<min(c.y,d.y)){
            return false;
        }
        //跨立实验
        if(cross(a-d,c-d)*cross(b-d,c-d)>0||cross(d-b,a-b)*cross(c-b,a-b)>0){
            return  false;
        }
        return true;
    }
 */
function checkLineSegmentIntersect(seg1, seg2) {
    const a = seg1.start;
    const b = seg1.end;
    const c = seg2.start;
    const d = seg2.end;

    if (Math.max(c.x, d.x) < Math.min(a.x, b.x) ||
        Math.max(a.x, b.x) < Math.min(c.x, d.x) ||
        Math.max(c.y, d.y) < Math.min(a.y, b.y) ||
        Math.max(a.y, b.y) < Math.min(c.y, d.y)) {
        return false;
    }

    return !(cross(vector(d, a), vector(d, c)) * cross(vector(d, b), vector(d, c)) > 0 ||
        cross(vector(b, d), vector(b, a)) * cross(vector(b, c), vector(b, a)) > 0);
}

// reference:
// https://www.topcoder.com/community/competitive-programming/tutorials/geometry-concepts-line-intersection-and-its-applications/
function findLineSegmentIntersect(seg1, seg2) {
    if (!checkLineSegmentIntersect(seg1, seg2)) {
        return null;
    }

    const A1 = seg1.end.y - seg1.start.y;
    const B1 = seg1.start.x - seg1.end.x;
    const C1 = A1 * seg1.start.x + B1 * seg1.start.y;

    const A2 = seg2.end.y - seg2.start.y;
    const B2 = seg2.start.x - seg2.end.x;
    const C2 = A2 * seg2.start.x + B2 * seg2.start.y;

    // A1x + B1y = C1
    // A2x + B2y = C2

    const det = A1 * B2 - A2 * B1;
    if (det === 0) {
        console.warn("Two lane Segment Parallel...");
        return null;
    }

    return {
        x: (B2 * C1 - B1 * C2) / det,
        y: (A1 * C2 - A2 * C1) / det
    };
}

function findLaneIntersect(lane1, lane2) {
    if (lane1.sameEndLaneList.hasOwnProperty(lane2.id)) {
        return lane1.getLastPoint();
    }

    if (!lane1.intersectLaneList.hasOwnProperty(lane2.id)) {
        return null;
    }

    const l1Segment = lane1.getLaneSegmentList();
    const l2Segment = lane2.getLaneSegmentList();
    for (let i = 0; i < l1Segment.length; i++) {
        for (let j = 0; j < l2Segment.length; j++) {
            let intersect = findLineSegmentIntersect(l1Segment[i], l2Segment[j]);
            if (intersect !== null) {
                return intersect;
            }
        }
    }

    return null;
}

function getPolygonPointsSegmentList(points) {
    const segList = [];
    for (let i = 0; i < points.length - 1; i++) {
        segList.push({
            start: points[i],
            end: points[i + 1]
        });
    }
    return segList;
}

function getNearestRelativeLane(loc, relativeLaneList) {
    let minDist = 5;
    let nearestLane = null;

    relativeLaneList.forEach(lane => {
        const segments = lane.getLaneSegmentList(); // Array of {start: xx, end:xx};
        segments.forEach(seg => {
            const dist = minDistToLineSegment(loc, [seg.start, seg.end]);
            if (dist < minDist) {
                nearestLane = lane;
                minDist = dist;
            }
        });
    });

    return nearestLane;
}


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


function pointRotation(point, rotation, offset = null) {
    const newPoint = {
        x: Math.cos(rotation) * point.x - Math.sin(rotation) * point.y,
        y: Math.sin(rotation) * point.x + Math.cos(rotation) * point.y
    };

    return offset === null ? newPoint : {
        x: newPoint.x + offset.x,
        y: newPoint.y + offset.y
    };
}

function angleNormalize(angle) {
    let res = angle % (2 * Math.PI);
    if (res > Math.PI) {
        res -= 2 * Math.PI;
    } else if (res <= -Math.PI) {
        res += 2 * Math.PI;
    }
    return res;
}

module.exports = {
    norm,
    vector,
    angleBetween,
    pointDist,
    minDistToLineSegment,
    pointSegmentProjection,
    checkLineSegmentIntersect,
    getPolygonPointsSegmentList,
    findLineSegmentIntersect,
    findLaneIntersect,
    Point,
    BezierCurve,
    StraightLine,
    getNearestRelativeLane,
    vectorHeading,
    angleNormalize
};