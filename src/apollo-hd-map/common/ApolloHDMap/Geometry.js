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
    findLaneIntersect
};