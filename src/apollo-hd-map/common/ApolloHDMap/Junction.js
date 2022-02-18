const {checkLineSegmentIntersect, pointDist, vectorHeading, vector} = require("./Geometry");
const TwoWayRoad = require("./TwoWayRoad");
const {radToDegree, angleNormalize, degreeNormalize} = require("../mathUtils");

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

        this.topoGeoVector = null;
    }

    init(junctionData) {
        this.id = junctionData.id.id;
        this.pointList = junctionData.polygon.pointList;

        junctionData.overlapIdList.forEach(o => {
            if (!o.id.includes("lane")) {
                // ignore other types of overlap for now.
                return;
            }
            const overlap = this.graph.mapData.overlapList.find(overlap => overlap.id.id === o.id);
            if (!overlap) {
                global.logE("junction", "Cannot find the overlap");
                process.exit(-1);
            }
            const laneObject = overlap.objectList.find(object => object.id.id.startsWith("lane"));
            if (!laneObject) {
                global.logE("junction", "Cannot find the lane object");
                process.exit(-1);
            }
            const lane = this.graph.getLaneById(laneObject.id.id);
            if (lane === null) {
                return;
            }

            this.laneList[lane.id] = lane;
            lane.junction = this;

            // check validity
            if (lane.getIncomingLaneList().length === 0 || lane.getOutgoingLaneList().length === 0) {
                this.valid = false;
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

    isRoadOutgoing(road) {
        const polygonCenter = this.getPolygonCenter();
        return (pointDist(polygonCenter, road.startPoint) < pointDist(polygonCenter, road.endPoint));
    }

    getRoadList() {
        // remove duplicates
        const roadList = {};
        this.getIncomingList().filter(r => (r instanceof TwoWayRoad)).forEach(inRoad => {
            roadList[inRoad.id] = inRoad;
        });
        this.getOutgoingList().filter(r => (r instanceof TwoWayRoad)).forEach(outRoad => {
            roadList[outRoad.id] = outRoad;
        });
        return Object.values(roadList);
    }

    getConnectedJunctionAndRoad() {
        const neighborList = {};
        this.getIncomingList()
            .filter(neighbor => (neighbor instanceof TwoWayRoad) || (neighbor instanceof Junction))
            .forEach(neighbor => {
                neighborList[neighbor.id] = neighbor;
            });
        this.getOutgoingList()
            .filter(neighbor => (neighbor instanceof TwoWayRoad) || (neighbor instanceof Junction))
            .forEach(neighbor => {
                neighborList[neighbor.id] = neighbor;
            });
        return Object.values(neighborList);
    }

    // a neighbor of a junction can be a junction or road
    getNeighborCenterRotation(neighbor) {
        if (neighbor instanceof TwoWayRoad) {
            const neighborOutgoing = this.isRoadOutgoing(neighbor);
            const neighborCurvePoint = neighborOutgoing ? neighbor.getStartCenter() : neighbor.getEndCenter();
            return vectorHeading(vector(this.getPolygonCenter(), neighborCurvePoint));
        } else {
            const neighborCenter = neighbor.getPolygonCenter();
            return vectorHeading(vector(this.getPolygonCenter(), neighborCenter));
        }
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

    computeTopoGeoVector() {
        const topoGeoList = this.getConnectedJunctionAndRoad()
            .map(neighbor => {
                let topo;
                if (neighbor.incoming.hasOwnProperty(this.id) && neighbor.outgoing.hasOwnProperty(this.id)) {
                    topo = "IN-OUT";
                } else if (neighbor.incoming.hasOwnProperty(this.id)) {
                    topo = "OUT";
                } else {
                    topo = "IN";
                }
                return {
                    topo, rotation: degreeNormalize(radToDegree(this.getNeighborCenterRotation(neighbor)))
                };
            }).sort((nA, nB) => {
                return nA.rotation - nB.rotation;
            });

        if (topoGeoList.length > 4 || topoGeoList.length < 2) {
            global.logE(this.id, `Incorrect number of neighbors (${topoGeoList.length}).`);
            process.exit(-1);
        }

        // normalize angles.
        // for four legged junctions, normalization is needed to prevent
        // cases where the angles of two consecutive roads are less than 90 degrees and gets classified into one direction.
        const delta = 0 - topoGeoList[0].rotation;
        topoGeoList.forEach(entry => {
            entry.rotation = degreeNormalize(entry.rotation + delta);
        });

        // neighbors: 2, 3, 4. Fill in null values if necessary
        const eastList = [];
        const northList = [];
        const westList = [];
        const southList = [];

        topoGeoList.forEach(entry => {
            const r = entry.rotation;
            if ((r >= -45) && (r < 45)) {
                eastList.push(entry);
            } else if ((r >= 45) && (r < 135)) {
                northList.push(entry);
            } else if ((r >= 135) || (r < -135)) {
                westList.push(entry);
            } else {
                southList.push(entry);
            }
        });

        if (eastList.length > 1 || northList.length > 1 || westList.length > 1 || southList.length > 1) {
            global.logE(this.id, `found multiple neighbors in one direction ${JSON.stringify(topoGeoList)}`);
            process.exit(-1);
        }

        this.topoGeoVector = [
            eastList.length === 1 ? eastList[0] : null, northList.length === 1 ? northList[0] : null, westList.length === 1 ? westList[0] : null, southList.length === 1 ? southList[0] : null,
        ];
    }
}

module.exports = Junction;