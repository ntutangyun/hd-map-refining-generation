const {Curve} = require("./Curve");
const {minDistToLineSegment, pointDist, pointSegmentProjection} = require("./Geometry");

const LANE_TYPES = {
    1: "NONE",
    2: "CITY_DRIVING",
    3: "BIKING",
    4: "SIDEWALK",
    5: "PARKING",
    6: "SHOULDER"
};

const LANE_TURN = {
    1: "NO_TURN",
    2: "LEFT_TURN",
    3: "RIGHT_TURN",
    4: "U_TURN"
};

const LANE_DIRECTION = {
    1: "FORWARD",
    2: "BACKWARD",
    3: "BIDIRECTION"
};

class Lane {
    constructor(graph) {
        this.graph = graph;
        this.id = null;             // currently laneID is used as main ID, as it's universal unique.
        this.length = null;
        this.speedLimit = null;
        this.type = null;           // one of LANE_TYPES
        this.turn = null;           // one of LANE_TURNS
        this.direction = null;      // one of LANE_DIRECTION

        this.leftOutList = null;
        this.rightOutList = null;
        this.cost = null;
        this.centralCurve = null;
        this.isVirtual = false;

        this.incomingLanes = {};
        this.outgoingLanes = {};
        this.leftNeighborLanes = {};
        this.rightNeighborLanes = {};

        // road lanes
        this.road = null;

        // junction lanes
        this.junction = null;
        this.enterCrosswalk = null;
        this.exitCrosswalk = null;

        this.crosswalkList = {};
        this.signalList = {};
        this.stopSignList = {};

        // calculated by finding intersections at any lane segments between two lanes in same junction
        this.intersectLaneList = {};    // other junction lanes that intersects at middle point
        this.sameStartLaneList = {};    // other junction lanes that starts at same point
        this.sameEndLaneList = {};      // other junction lanes that ends at same point

        // junction obstacle test
        this.intersectVector = {};
        this.jLanePairs = {};
    }

    init(laneData) {
        this.length = +laneData.length;
        this.id = laneData.laneId;

        this.leftOutList = laneData.leftOutList;
        this.rightOutList = laneData.rightOutList;
        this.cost = +laneData.cost;
        this.centralCurve = new Curve(this).init(laneData.centralCurve);
        this.isVirtual = laneData.isVirtual;
        return this;
    }

    addCrosswalk(crosswalk) {
        this.crosswalkList[crosswalk.id] = crosswalk;

        // for junction lanes, need also set enterCrosswalk and exitCrosswalk
        if (this.junction === null) {
            return;
        }

        const firstPoint = this.getFirstPoint();
        const lastPoint = this.getLastPoint();
        const crosswalkPointList = crosswalk.getPointList();

        let xAvg = 0;
        let yAvg = 0;

        crosswalkPointList.forEach(p => {
            xAvg += p.x / crosswalkPointList.length;
            yAvg += p.y / crosswalkPointList.length;
        });

        let firstDist = pointDist({x: xAvg, y: yAvg, z: 0}, firstPoint);
        let lastDist = pointDist({x: xAvg, y: yAvg, z: 0}, lastPoint);

        // assume there is only one enter crosswalk and one exit crosswalk for junction connection lane, at most.
        if (firstDist < lastDist) {
            if (this.enterCrosswalk !== null) {
                console.warn(`Trying to add enter crosswalk ${crosswalk.id} to ${this.id}`);
                console.warn(`${this.id} already has an enter crosswalk ${this.enterCrosswalk.id}.`);
            } else {
                this.enterCrosswalk = crosswalk;
            }
        } else {
            if (this.exitCrosswalk !== null) {
                console.warn(`Trying to add exit crosswalk ${crosswalk.id} to ${this.id}`);
                console.warn(`${this.id} already has an exit crosswalk ${this.exitCrosswalk.id}`);
            } else {
                this.exitCrosswalk = crosswalk;
            }
        }
    }

    getAllPoints() {
        return this.centralCurve.getAllPoints();
    }

    getLaneSegmentList() {
        const points = this.getAllPoints();
        const segList = [];
        for (let i = 0; i < points.length - 1; i++) {
            segList.push({
                start: points[i],
                end: points[i + 1]
            });
        }
        return segList;
    }

    getIncomingLaneList() {
        return Object.values(this.incomingLanes);
    }

    getOutgoingLaneList() {
        return Object.values(this.outgoingLanes);
    }

    getRandomIncomingLane() {
        return this.getIncomingLaneList()[Math.floor(Math.random() * this.getIncomingLaneList().length)];
    }

    getRandomOutgoingLane() {
        return this.getOutgoingLaneList()[Math.floor(Math.random() * this.getOutgoingLaneList().length)];
    }

    getFirstPoint() {
        return this.centralCurve.getFirstPoint();
    }

    getLastPoint() {
        return this.centralCurve.getLastPoint();
    }

    getMinXY() {
        return this.centralCurve.getMinXY();
    }

    addIncomingLane(lane) {
        this.incomingLanes[lane.id] = lane;
    }

    addOutgoingLane(lane) {
        this.outgoingLanes[lane.id] = lane;
    }

    addLeftNeighborLane(lane) {
        this.leftNeighborLanes[lane.id] = lane;
    }

    addRightNeighborLane(lane) {
        this.rightNeighborLanes[lane.id] = lane;
    }

    getParent() {
        // returns one of road, junction, roundabout
        if (this.road !== null) {
            return this.road;
        } else if (this.junction !== null) {
            return this.junction;
        }
        return null;
    }

    getLeftNeighborLanes() {
        return Object.values(this.leftNeighborLanes);
    }

    getRightNeighborLanes() {
        return Object.values(this.rightNeighborLanes);
    }

    getAllRightSideLanes() {
        const rightSideLanes = {};
        const lanesToCheck = [this];
        while (lanesToCheck.length > 0) {
            const laneToCheck = lanesToCheck.shift();
            const rightNeighborLanes = laneToCheck.getRightNeighborLanes();
            if (rightNeighborLanes.length > 0) {
                rightNeighborLanes.forEach(l => {
                    rightSideLanes[l.id] = l;
                    lanesToCheck.push(l);
                });
            }
        }

        return Object.values(rightSideLanes);
    }

    getAllLeftSideLanes() {
        const leftSideLanes = {};
        const lanesToCheck = [this];
        while (lanesToCheck.length > 0) {
            const laneToCheck = lanesToCheck.shift();
            const leftNeighborLanes = laneToCheck.getLeftNeighborLanes();
            if (leftNeighborLanes.length > 0) {
                leftNeighborLanes.forEach(l => {
                    leftSideLanes[l.id] = l;
                    lanesToCheck.push(l);
                });
            }
        }

        return Object.values(leftSideLanes);
    }

    // here assume lanes only have single left neighbor
    getAllLeftSideLanesInArray() {
        const leftSideLanes = [];
        const lanesToCheck = [this];
        while (lanesToCheck.length > 0) {
            const laneToCheck = lanesToCheck.shift();
            const leftNeighbors = laneToCheck.getLeftNeighborLanes();
            if (leftNeighbors.length > 1) {
                console.warn(`[MAP-MODEL-LANE] Lane ${this.id} has multiple left neighbors`);
                process.exit(-1);
            }
            if (leftNeighbors.length > 0) {
                // get the last neighbor -- assume nearest to the lane end. just in case.
                const leftNeighbor = leftNeighbors[leftNeighbors.length - 1];
                leftSideLanes.push(leftNeighbor);
                lanesToCheck.push(leftNeighbor);
            }
        }
        return leftSideLanes;
    }

    // here assume lanes only have single right neighbor
    getAllRightSideLanesInArray() {
        const rightSideLanes = [];
        const lanesToCheck = [this];
        while (lanesToCheck.length > 0) {
            const laneToCheck = lanesToCheck.shift();
            const rightNeighbors = laneToCheck.getRightNeighborLanes();
            if (rightNeighbors.length > 1) {
                console.warn(`[MAP-MODEL-LANE] Lane ${this.id} has multiple right neighbors`);
                process.exit(-1);
            }
            if (rightNeighbors.length > 0) {
                // get the last neighbor -- assume nearest to the lane end. just in case.
                const rightNeighbor = rightNeighbors[rightNeighbors.length - 1];
                rightSideLanes.push(rightNeighbor);
                lanesToCheck.push(rightNeighbor);
            }
        }
        return rightSideLanes;
    }

    getCrosswalkList() {
        return Object.values(this.crosswalkList);
    }

    getStopSignList() {
        return Object.values(this.stopSignList);
    }

    getSignalList() {
        return Object.values(this.signalList);
    }

    importMapData(laneObj) {
        this.speedLimit = laneObj.speedLimit;
        this.type = LANE_TYPES[laneObj.type];
        this.turn = LANE_TURN[laneObj.turn];
        this.direction = LANE_DIRECTION[laneObj.direction];

        laneObj.leftNeighborForwardLaneIdList.forEach(ln => this.addLeftNeighborLane(this.graph.getLaneById(ln.id)));
        laneObj.rightNeighborForwardLaneIdList.forEach(rn => this.addRightNeighborLane(this.graph.getLaneById(rn.id)));

        if (this.getLeftNeighborLanes().length > 1) {
            console.warn(`${this.id} has multiple left neighbors`);
        }
        if (this.getRightNeighborLanes().length > 1) {
            console.warn(`${this.id} has multiple right neighbors`);
        }
    }

    addSignal(signal) {
        this.signalList[signal.id] = signal;
    }

    getSegmentAtOffset(startOffset) {
        let offset = startOffset >= this.length ? this.length : startOffset;

        let p1 = null;
        let p2 = null;

        let cumulatedDist = 0;
        let segmentOffset = 0;
        let segmentDist = 0;

        const points = this.getAllPoints();
        for (let i = 0; i < points.length - 1; i++) {
            p1 = points[i];
            p2 = points[i + 1];
            segmentDist = pointDist(p1, p2);
            if ((cumulatedDist + segmentDist) <= offset) {
                cumulatedDist += segmentDist;
                continue;
            }
            segmentOffset = offset - cumulatedDist;
            break;
        }

        let newPoint = {
            x: p1.x + (p2.x - p1.x) / segmentDist * segmentOffset,
            y: p1.y + (p2.y - p1.y) / segmentDist * segmentOffset,
            z: p1.z + (p2.z - p1.z) / segmentDist * segmentOffset
        };

        return [p1, newPoint, p2];
    }

    // assume point is on any of the segment
    getOffsetAtPoint(point) {
        let minDist = Number.POSITIVE_INFINITY;
        let minDistIndex = 0;

        const segments = this.getLaneSegmentList(); // Array of {start: xx, end:xx};
        for (let i = 0; i < segments.length; i++) {
            const dist = minDistToLineSegment(point, [segments[i].start, segments[i].end]);
            if (dist < minDist) {
                minDist = dist;
                minDistIndex = i;
            }
        }

        let offset = 0;
        for (let i = 0; i < minDistIndex; i++) {
            const seg = segments[i];
            offset += pointDist(seg.start, seg.end);
        }

        offset += pointDist(point, segments[minDistIndex].start);

        return offset;
    }

    // assume point is on any of the segment
    getClosestSegmentToPoint(point) {
        let minDist = Number.POSITIVE_INFINITY;
        let minDistIndex = 0;

        const segments = this.getLaneSegmentList(); // Array of {start: xx, end:xx};
        for (let i = 0; i < segments.length; i++) {
            const dist = minDistToLineSegment(point, [segments[i].start, segments[i].end]);

            if (dist < minDist) {
                minDist = dist;
                minDistIndex = i;
            }
        }

        return {
            segment: segments[minDistIndex],
            index: minDistIndex,
            dist: minDist
        };
    }

    getMinDistToPoint(point) {
        let minDist = Number.POSITIVE_INFINITY;

        const segments = this.getLaneSegmentList(); // Array of {start: xx, end:xx};
        for (let i = 0; i < segments.length; i++) {
            const dist = minDistToLineSegment(point, [segments[i].start, segments[i].end]);
            if (dist < minDist) {
                minDist = dist;
            }
        }
        return minDist;
    }

    projectToLane(point) {
        const {segment, index, dist} = this.getClosestSegmentToPoint(point);
        if (dist === 0) {
            return {
                projectedPoint: point,
                segment,
                index
            };
        }

        const {start, end} = segment;
        const startDist = pointDist(start, point);
        const endDist = pointDist(end, point);

        let projectedPoint;

        if (dist === startDist) {
            projectedPoint = start;
        } else if (dist === endDist) {
            projectedPoint = end;
        } else {
            projectedPoint = pointSegmentProjection(point, segment.start, segment.end);
        }

        return {
            projectedPoint,
            segment,
            index
        };
    }

    getIncomingRoad() {
        // this is only for junction lane
        if (this.junction === null) {
            return null;
        }

        const incomingRoads = {};
        Object.values(this.incomingLanes).forEach(inLane => {
            if (inLane.road === null) {
                return;
            }
            incomingRoads[inLane.road.id] = inLane.road;
        });

        if (Object.keys(incomingRoads).length !== 1) {
            console.warn(`jLane ${this.id} has incorrect number of incoming road`);
            return null;
        }
        return Object.values(incomingRoads)[0];
    }

    getOutgoingRoad() {
        // this is only for junction lane
        if (this.junction === null) {
            return null;
        }

        const outgoingRoads = {};
        Object.values(this.outgoingLanes).forEach(outLane => {
            if (outLane.road === null) {
                return;
            }
            outgoingRoads[outLane.road.id] = outLane.road;
        });

        if (Object.keys(outgoingRoads).length !== 1) {
            console.warn(`jLane ${this.id} has incorrect number of outgoing road`);
            return null;
        }
        return Object.values(outgoingRoads)[0];
    }
}

module.exports = Lane;