const {checkLineSegmentIntersect, pointDist} = require("./Geometry");

const JUNCTION_LANE_SAME_START_DIST_THRESHOLD = 1;
const JUNCTION_LANE_SAME_END_DIST_THRESHOLD = 1;

class Junction {
    constructor(graph) {
        this.id = null;
        this.graph = graph;
        this.laneList = {};
        this.pointList = [];

        this.incoming = {};
        this.outgoing = {};

        this.junctionGroup = null;
        this.topoVector = null;
        this.featureVector = null;

        // if junction contains any invalid lanes without incoming lanes or outgoing lanes,
        // junction will be marked as invalid and won't be tested for now.
        this.valid = true;

        this.topoRoadList = null;
    }

    init(junctionData) {
        this.id = junctionData.id.id;
        this.pointList = junctionData.polygon.pointList;

        junctionData.overlapIdList.forEach(overlap => {
            const laneId = this.extractLaneId(overlap.id);
            if (laneId !== null) {
                const lane = this.graph.getLaneById(laneId);

                if (lane === null) {
                    return;
                }

                this.laneList[lane.id] = lane;
                lane.junction = this;

                // check validity
                if (lane.getIncomingLaneList().length === 0 ||
                    lane.getOutgoingLaneList().length === 0) {
                    this.valid = false;
                }
            }
        });

        // Update intersect information for its lanes
        this.updateIntersection();

        return this;
    }

    updateIntersection() {
        const laneList = this.getLaneList();
        for (let i = 0; i < laneList.length - 1; i++) {
            for (let j = i + 1; j < laneList.length; j++) {
                const lane1 = laneList[i];
                const lane2 = laneList[j];

                // check if starting at same place
                // threshold: if starting point distance is less than 1m.
                if (pointDist(lane1.getFirstPoint(), lane2.getFirstPoint()) <= JUNCTION_LANE_SAME_START_DIST_THRESHOLD) {
                    lane1.sameStartLaneList[lane2.id] = lane2;
                    lane2.sameStartLaneList[lane1.id] = lane1;
                    continue;
                }
                // check if ending at same place
                if (pointDist(lane1.getLastPoint(), lane2.getLastPoint()) <= JUNCTION_LANE_SAME_END_DIST_THRESHOLD) {
                    lane1.sameEndLaneList[lane2.id] = lane2;
                    lane2.sameEndLaneList[lane1.id] = lane1;
                    continue;
                }

                let intersect = false;
                const l1SegList = lane1.getLaneSegmentList();
                const l2SegList = lane2.getLaneSegmentList();
                for (let i = 0; i < l1SegList.length; i++) {
                    for (let j = 0; j < l2SegList.length; j++) {
                        if (checkLineSegmentIntersect(l1SegList[i], l2SegList[j])) {
                            intersect = true;
                            break;
                        }
                    }
                    if (intersect) {
                        break;
                    }
                }

                if (intersect) {
                    lane1.intersectLaneList[lane2.id] = lane2;
                    lane2.intersectLaneList[lane1.id] = lane1;
                }
            }
        }
    }

    addIncoming(incoming) {
        if (incoming.id === this.id) return;
        this.incoming[incoming.id] = incoming;
    }

    addOutgoing(outgoing) {
        if (outgoing.id === this.id) return;
        this.outgoing[outgoing.id] = outgoing;
    }

    getIncomingList() {
        return Object.values(this.incoming);
    }

    getOutgoingList() {
        return Object.values(this.outgoing);
    }

    getLaneList() {
        return Object.values(this.laneList);
    }

    extractLaneId(id) {
        if (id.includes("lane")) {
            return id.replace(`overlap_junction_I${this.id.replace("J_", "")}_J0_`, "");
        }
        return null;
    }

    getSignalList() {
        let signalList = {};
        this.getLaneList().forEach(jLane => {
            signalList = {...signalList, ...jLane.signalList};
        });
        return Object.values(signalList);
    }

    getStopSignList() {
        let stopSignList = {};
        this.getLaneList().forEach(jLane => {
            stopSignList = {...stopSignList, ...jLane.stopSignList};
        });

        return Object.values(stopSignList);
    }

    getPolygonCenter() {
        let x = 0;
        let y = 0;

        this.pointList.forEach(p => {
            x += p.x;
            y += p.y;
        });

        return {x: x / this.pointList.length, y: y / this.pointList.length, z: 0};
    }

    // get all the overlapping crosswalks of junction's lanes
    getCrosswalkList() {
        let junctionLaneList = this.getLaneList();
        let crosswalkList = {};

        junctionLaneList.forEach(jLane => {
            jLane.getCrosswalkList().forEach(cw => crosswalkList[cw.id] = cw);
        });

        console.log(`====== crosswalk list: ${Object.values(crosswalkList).length}`);

        return Object.values(crosswalkList);
    }
}

module.exports = Junction;