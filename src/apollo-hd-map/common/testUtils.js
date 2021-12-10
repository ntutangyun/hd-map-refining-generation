const {checkLineSegmentIntersect, minDistToLineSegment} = require("./ApolloHDMap/Geometry");

const SENSOR_X_OFFSET = -1.348649;
const TEST_NEAREST_LANE_MIN_DIST_THRESHOLD = 5;     // unit: m

const TEST_MIN_TIMEOUT = 70;                       // sec
const TEST_JUST_STARTED_PERIOD = 2000;             // ms
const TEST_EARLY_STOP_DISTANCE_THRESHOLD = 15;     // m

const TEST_FAILURE_ROUTE_ERROR = "TEST_FAILURE_ROUTE_ERROR";
const TEST_FAILURE_COLLISION = "TEST_FAILURE_COLLISION";
const TEST_FAILURE_DESTINATION_UNREACHED = "TEST_FAILURE_DESTINATION_UNREACHED";
const TEST_FAILURE_ZERO_LOCATION_RECORD = "TEST_FAILURE_ZERO_LOCATION_RECORD";
const TEST_FAILURE_ZERO_GT_RECORD = "TEST_FAILURE_ZERO_GT_RECORD";
const TEST_FAILURE_ZERO_GT_OBS = "TEST_FAILURE_ZERO_GT_OBS";
const TEST_FAILURE_ZERO_FUSION_RECORD = "TEST_FAILURE_ZERO_FUSION_RECORD";
const TEST_FAILURE_ZERO_SEGMENT_RECORD = "TEST_FAILURE_ZERO_SEGMENT_RECORD";
const TEST_FAILURE_OBSTACLE_RECORD_ERROR = "TEST_FAILURE_OBSTACLE_RECORD_ERROR";
const TEST_FAILURE_OBSTACLE_GT_RECORD_ERROR = "TEST_FAILURE_OBSTACLE_GT_RECORD_ERROR";
const TEST_FAILURE_PERCEPTION_FRAME_ERROR = "TEST_FAILURE_PERCEPTION_FRAME_ERROR";
const TEST_FAILURE_SEGMENT_RECORD_ERROR = "TEST_FAILURE_SEGMENT_RECORD_ERROR";
const TEST_FAILURE_RELATIVE_LANE_DEVIATION = "TEST_FAILURE_RELATIVE_LANE_DEVIATION";
const TEST_FAILURE_NO_LANE_CHANGE = "TEST_FAILURE_NO_LANE_CHANGE";
const TEST_FAILURE_DEADLOCK_TIMEOUT = "TEST_FAILURE_DEADLOCK_TIMEOUT";
const TEST_FAILURE_OBSTACLE_NOT_DETECTED = "TEST_FAILURE_OBSTACLE_NOT_DETECTED";


function getNearestRelativeLane(loc, relativeLaneList) {
    let minDist = TEST_NEAREST_LANE_MIN_DIST_THRESHOLD;
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

function nearestDistToObstacle(egoSize, egoHeading, egoLoc, obsSize, obsHeading, obsLoc) {
    const egoCornerPoint = getVehicleCornerPoint(egoSize, egoHeading, egoLoc, SENSOR_X_OFFSET);
    const obsCornerPoint = getVehicleCornerPoint(obsSize, obsHeading, obsLoc);

    // ego length: 4.7
    // ego width: 2.06

    const obstacleBorderlines = [
        [obsCornerPoint.frontLeft, obsCornerPoint.frontRight],
        [obsCornerPoint.frontLeft, obsCornerPoint.backLeft],
        [obsCornerPoint.frontRight, obsCornerPoint.backRight],
        [obsCornerPoint.backLeft, obsCornerPoint.backRight]
    ];

    const egoBorderLines = [
        [egoCornerPoint.frontLeft, egoCornerPoint.frontRight],
        [egoCornerPoint.frontLeft, egoCornerPoint.backLeft],
        [egoCornerPoint.frontRight, egoCornerPoint.backRight],
        [egoCornerPoint.backLeft, egoCornerPoint.backRight]
    ];

    // minDist = 0 if any border line intersect
    for (const obsBorderLine of obstacleBorderlines) {
        for (const egoBorderLine of egoBorderLines) {
            const obsLineSeg = {
                start: obsBorderLine[0],
                end: obsBorderLine[1],
            };
            const egoLineSeg = {
                start: egoBorderLine[0],
                end: egoBorderLine[1],
            };

            if (checkLineSegmentIntersect(obsLineSeg, egoLineSeg)) {
                return 0;
            }
        }
    }

    let minDist = Number.POSITIVE_INFINITY;
    [
        egoCornerPoint.frontLeft,
        egoCornerPoint.frontRight,
        egoCornerPoint.backLeft,
        egoCornerPoint.backRight
    ].forEach(egoPoint => {
        obstacleBorderlines.forEach(obsLine => {
            let dist = minDistToLineSegment(egoPoint, obsLine);
            minDist = dist < minDist ? dist : minDist;
        });
    });

    [
        obsCornerPoint.frontLeft,
        obsCornerPoint.frontRight,
        obsCornerPoint.backLeft,
        obsCornerPoint.backRight
    ].forEach(obsPoint => {
        egoBorderLines.forEach(egoLine => {
            let dist = minDistToLineSegment(obsPoint, egoLine);
            minDist = dist < minDist ? dist : minDist;
        });
    });

    return minDist;
}


function nearestDistToPolygonObstacle(egoSize, egoHeading, egoLoc, obsPolygonPointList) {
    const egoCornerPoint = getVehicleCornerPoint(egoSize, egoHeading, egoLoc, SENSOR_X_OFFSET);

    const obstacleBorderlines = [];
    for (let i = 0; i < obsPolygonPointList.length; i++) {
        if (i === obsPolygonPointList.length - 1) {
            obstacleBorderlines.push([obsPolygonPointList[i], obsPolygonPointList[0]]);
        } else {
            obstacleBorderlines.push([obsPolygonPointList[i], obsPolygonPointList[i + 1]]);
        }
    }

    const egoBorderLines = [
        [egoCornerPoint.frontLeft, egoCornerPoint.frontRight],
        [egoCornerPoint.frontLeft, egoCornerPoint.backLeft],
        [egoCornerPoint.frontRight, egoCornerPoint.backRight],
        [egoCornerPoint.backLeft, egoCornerPoint.backRight]
    ];

    // minDist = 0 if any border line intersect
    for (const obsBorderLine of obstacleBorderlines) {
        for (const egoBorderLine of egoBorderLines) {
            const obsLineSeg = {
                start: obsBorderLine[0],
                end: obsBorderLine[1],
            };
            const egoLineSeg = {
                start: egoBorderLine[0],
                end: egoBorderLine[1],
            };

            if (checkLineSegmentIntersect(obsLineSeg, egoLineSeg)) {
                return 0;
            }
        }
    }

    let minDist = Number.POSITIVE_INFINITY;
    [
        egoCornerPoint.frontLeft,
        egoCornerPoint.frontRight,
        egoCornerPoint.backLeft,
        egoCornerPoint.backRight
    ].forEach(egoPoint => {
        obstacleBorderlines.forEach(obsLine => {
            let dist = minDistToLineSegment(egoPoint, obsLine);
            minDist = dist < minDist ? dist : minDist;
        });
    });

    obsPolygonPointList.forEach(obsPoint => {
        egoBorderLines.forEach(egoLine => {
            let dist = minDistToLineSegment(obsPoint, egoLine);
            minDist = dist < minDist ? dist : minDist;
        });
    });

    return minDist;
}

// ego vehicle position is on it's GPS location, which is about the center point of it's back wheels.
// thus there is an offset between vehicle's physical center and the localization's position
// the sensor offset should be the exact value copied from vehicle's GPS offset in simulator's configuration.
function getVehicleCornerPoint(size, heading, loc, sensorOffset = 0) {
    const frontLeft = pointRotation({
        x: size.length / 2 - sensorOffset,
        y: size.width / 2
    }, heading, loc);
    const frontRight = pointRotation({
        x: size.length / 2 - sensorOffset,
        y: -size.width / 2
    }, heading, loc);
    const backLeft = pointRotation({
        x: -size.length / 2 - sensorOffset,
        y: size.width / 2
    }, heading, loc);
    const backRight = pointRotation({
        x: -size.length / 2 - sensorOffset,
        y: -size.width / 2
    }, heading, loc);
    return {
        frontLeft,
        frontRight,
        backLeft,
        backRight
    };
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

module.exports = {
    nearestDistToObstacle,
    nearestDistToPolygonObstacle,
    getVehicleCornerPoint,
    getNearestRelativeLane,
    pointRotation,
    TEST_MIN_TIMEOUT,
    TEST_JUST_STARTED_PERIOD,
    TEST_EARLY_STOP_DISTANCE_THRESHOLD,
    TEST_FAILURE_ROUTE_ERROR,
    TEST_FAILURE_COLLISION,
    TEST_FAILURE_DESTINATION_UNREACHED,
    TEST_FAILURE_ZERO_LOCATION_RECORD,
    TEST_FAILURE_OBSTACLE_RECORD_ERROR,
    TEST_FAILURE_OBSTACLE_GT_RECORD_ERROR,
    TEST_FAILURE_SEGMENT_RECORD_ERROR,
    TEST_FAILURE_RELATIVE_LANE_DEVIATION,
    TEST_FAILURE_NO_LANE_CHANGE,
    TEST_FAILURE_PERCEPTION_FRAME_ERROR,
    TEST_FAILURE_ZERO_GT_RECORD,
    TEST_FAILURE_ZERO_FUSION_RECORD,
    TEST_FAILURE_ZERO_SEGMENT_RECORD,
    TEST_FAILURE_ZERO_GT_OBS,
    TEST_FAILURE_DEADLOCK_TIMEOUT,
    TEST_FAILURE_OBSTACLE_NOT_DETECTED
};
