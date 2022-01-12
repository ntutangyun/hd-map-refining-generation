const Lane = require("./Lane");
const {Edge, EDGE_DIRECTION_FORWARD} = require("./Edge");
const OneWayRoad = require("./OneWayRoad");
const TwoWayRoad = require("./TwoWayRoad");
const Junction = require("./Junction");
const Signal = require("./Signal");
const Crosswalk = require("./Crosswalk");
const {StopSign} = require("./StopSign");
const {Curve, LineSegment} = require("./Curve");

class Graph {
    constructor(name) {
        this.name = name;
        this.hdmapVersion = null;
        this.hdmapDistrict = null;
        this.laneList = {};
        this.edgeList = {};
        this.roadList = {};
        this.junctionList = {};
        this.signalList = {};
        this.crosswalkList = {};
        this.stopSignList = {};
    }

    init(graphData, mapData = null, manualData = null) {
        this.hdmapVersion = graphData.hdmapVersion;
        this.hdmapDistrict = graphData.hdmapDistrict;

        graphData.nodeList.forEach(laneData => this.addLane(new Lane(this).init(laneData)));

        // init edges / connections
        // leave out for edges of lane change type : direction = left or right
        graphData.edgeList.forEach(edgeData => {
            const edge = new Edge(this).init(edgeData);
            this.addEdge(edge);
            if (edge.directionType === EDGE_DIRECTION_FORWARD) {
                edge.fromLane.addOutgoingLane(edge.toLane);
                edge.toLane.addIncomingLane(edge.fromLane);
            }
        });

        if (mapData !== null) {
            // augmented lane data from baseMap
            mapData.laneList.forEach(l => {
                const lane = this.getLaneById(l.id.id);
                if (lane === null) {
                    console.warn(`cannot find lane ${l.id.id} in routing_map`);
                    console.warn(l);
                } else {
                    this.getLaneById(l.id.id).importMapData(l);
                }
            });

            // get road level data from base map i.e. road, junctions.
            // according to the data version at 2020.1, the roundabout is also referred as junction
            // group all lanes with left/right neighbor forward laneId List
            mapData.junctionList.forEach(j => this.addJunction(new Junction(this).init(j)));

            // add signals
            mapData.signalList.forEach(s => this.addSignal(new Signal(this).init(s)));

            // add crosswalk
            mapData.crosswalkList.forEach(c => this.addCrosswalk(new Crosswalk(this).init(c)));

            // add stop signs
            mapData.stopSignList.forEach(s => this.addStopSign(new StopSign(this).init(s)));

            // add two-way roads instead of one way roads
            mapData.roadList.forEach(r => {
                // ignore those single lane roads in junctions
                if (r.hasOwnProperty("junctionId")) {
                    return;
                }
                this.addRoad(new TwoWayRoad(this).init(r));
            });
            //
            // // those lanes without junction, are road lanes
            // mapData.laneList.forEach(l => {
            //     const lane = this.getLaneById(l.id.id);
            //
            //     if (lane === null) {
            //         return;
            //     }
            //
            //     if (lane.junction !== null || lane.road !== null) {
            //         return;
            //     }
            //     // assume simple cases where lanes only have single left / right neighbors.
            //     // always create a new road with left-most lane
            //     if (lane.getLeftNeighborLanes().length > 0) {
            //         return;
            //     }
            //
            //     // left-most lane in its direction
            //     let road = new OneWayRoad(this);
            //     let lanesToAdd = [lane];
            //
            //     while (lanesToAdd.length > 0) {
            //         const laneToAdd = lanesToAdd.shift();
            //         laneToAdd.getRightNeighborLanes().forEach(rn => lanesToAdd.push(rn));
            //         road.addLane(laneToAdd);
            //     }
            //
            //     this.addRoad(road);
            // });

            this.getEdgeList().forEach(edge => {
                // update road / junction level connection
                edge.fromLane.getParent().addOutgoing(edge.toLane.getParent());
                edge.toLane.getParent().addIncoming(edge.fromLane.getParent());
            });
        }

        if (manualData !== null) {
            // roundabout manual process
            if (manualData.hasOwnProperty("roundaboutList")) {
                const roundaboutList = manualData.roundaboutList;
                roundaboutList.forEach(ra => {
                    const id = ra.id;
                    const oldJunction = this.getJunctionById(id);
                    const newJunction = new Junction(this);

                    newJunction.id = oldJunction.id;
                    newJunction.pointList = oldJunction.pointList;

                    // laneList
                    const mergeLaneList = ra.laneList;
                    mergeLaneList.forEach(laneIDsToMerge => {
                        if (laneIDsToMerge.length === 0) {
                            return;
                        }
                        if (laneIDsToMerge.length === 1) {
                            const lane = this.getLaneById(laneIDsToMerge[0]);
                            // reset intersect data
                            lane.intersectLaneList = {};
                            lane.sameStartLaneList = {};
                            lane.sameEndLaneList = {};
                            lane.intersectVector = {};

                            lane.junction = newJunction;
                            newJunction.laneList[lane.id] = lane;
                            return;
                        }

                        const lanesToMerge = laneIDsToMerge.map(id => this.getLaneById(id));
                        const firstLane = lanesToMerge[0];
                        const lastLane = lanesToMerge[lanesToMerge.length - 1];

                        const newLane = new Lane(this);
                        newLane.id = `lane_${firstLane.id.replace("lane_", "")}_${lastLane.id.replace("lane_", "")}`;
                        newLane.speedLimit = lanesToMerge.map(lane => lane.speedLimit).min();
                        newLane.type = lastLane.type;
                        newLane.turn = lastLane.turn;
                        newLane.direction = lastLane.direction;

                        newLane.length = 0;
                        newLane.cost = 0;
                        newLane.isVirtual = false;

                        newLane.enterCrosswalk = firstLane.enterCrosswalk;
                        newLane.exitCrosswalk = lastLane.exitCrosswalk;

                        let newPointList = [];
                        for (let i = 0; i < lanesToMerge.length; i++) {
                            const lane = lanesToMerge[i];
                            newLane.length += lane.length;
                            newLane.cost += lane.cost;
                            newLane.isVirtual = newLane.isVirtual || lane.isVirtual;

                            const allPoints = lane.getAllPoints();
                            if (i !== lanesToMerge.length - 1) {
                                allPoints.pop();
                            }
                            newPointList = [...newPointList, ...allPoints];

                            newLane.crosswalkList = {...newLane.crosswalkList, ...lane.crosswalkList};
                            newLane.signalList = {...newLane.signalList, ...lane.signalList};
                            newLane.stopSignList = {...newLane.stopSignList, ...lane.stopSignList};

                            Object.values(newLane.crosswalkList).forEach(cw => {
                                delete cw.laneList[lane.id];
                                cw.laneList[newLane.id] = newLane;
                            });
                            Object.values(newLane.signalList).forEach(signal => {
                                delete signal.laneList[lane.id];
                                signal.laneList[newLane.id] = newLane;
                            });
                            Object.values(newLane.stopSignList).forEach(stop => {
                                delete stop.laneList[lane.id];
                                stop.laneList[newLane.id] = newLane;
                            });
                        }
                        newLane.centralCurve = new Curve(newLane);
                        const lineSegment = new LineSegment(newLane.centralCurve);
                        lineSegment.pointList = newPointList;
                        lineSegment.s = 0;
                        lineSegment.startPosition = newPointList[0];
                        lineSegment.length = newLane.length;
                        newLane.centralCurve.segmentList = [lineSegment];

                        Object.values(firstLane.getIncomingLaneList()).forEach(inLane => {
                            delete inLane.outgoingLanes[firstLane.id];
                            newLane.addIncomingLane(inLane);
                            inLane.addOutgoingLane(newLane);
                        });

                        Object.values(lastLane.getOutgoingLaneList()).forEach(outLane => {
                            delete outLane.incomingLanes[lastLane.id];
                            newLane.addOutgoingLane(outLane);
                            outLane.addIncomingLane(newLane);
                        });

                        newJunction.laneList[newLane.id] = newLane;
                        newLane.junction = newJunction;
                        this.addLane(newLane);
                    });

                    // update junction lane intersections after all lanes are added.
                    newJunction.updateIntersection();

                    oldJunction.getIncomingList().forEach(incoming => {
                        incoming.addOutgoing(newJunction);
                        newJunction.addIncoming(incoming);
                    });

                    oldJunction.getOutgoingList().forEach(outgoing => {
                        outgoing.addIncoming(newJunction);
                        newJunction.addOutgoing(outgoing);
                    });

                    oldJunction.getLaneList().forEach(oldLane => {
                        delete this.laneList[oldLane.id];
                    });
                    oldJunction.valid = false;
                    delete this.junctionList[oldJunction.id];
                    this.junctionList[newJunction.id] = newJunction;
                });
            }
        }

        this.getCrosswalkList().forEach(cw => cw.fixLaneOverlaps());

        // console.log(this);
        return this;
    }

    getNearestLaneToPoint(point) {
        const laneList = this.getLaneList().map(lane => ({
            lane,
            minDistToPoint: lane.getMinDistToPoint(point)
        }));
        return laneList.sort((l1, l2) => l1.minDistToPoint - l2.minDistToPoint)[0]["lane"];
    }

    searchLanePath(startLane, endLane) {
        if (!startLane || !endLane) {
            return null;
        }

        if (startLane.id === endLane.id) {
            return [startLane];
        }

        let finalPath = null;
        let pathsToSearch = [[startLane]];
        let lanesDiscovered = {};

        while (pathsToSearch.length > 0) {
            if (finalPath) {
                break;
            }

            // update lanesDiscovered
            lanesDiscovered = {};
            pathsToSearch.forEach(path => {
                path.forEach(lane => {
                    lanesDiscovered[lane.id] = true;
                });
            });

            const currentPath = pathsToSearch.shift();

            const lastLane = currentPath.last();
            const outgoingLaneList = lastLane.getOutgoingLaneList().filter(l => !lanesDiscovered.hasOwnProperty(l.id));

            for (const outLane of outgoingLaneList) {
                if (outLane.id === endLane.id) {
                    finalPath = [...currentPath, outLane];
                    break;
                }

                pathsToSearch.push([...currentPath, outLane]);
            }
        }

        return finalPath;
    }

    getLaneById(id) {
        return this.laneList.hasOwnProperty(id) ? this.laneList[id] : null;
    }

    getJunctionById(id) {
        return this.junctionList.hasOwnProperty(id) ? this.junctionList[id] : null;
    }

    getLaneList() {
        return Object.values(this.laneList);
    }

    getEdgeList() {
        return Object.values(this.edgeList);
    }

    getJunctionList() {
        return Object.values(this.junctionList);
    }

    getRoadList() {
        return Object.values(this.roadList);
    }

    getSignalList() {
        return Object.values(this.signalList);
    }

    getCrosswalkList() {
        return Object.values(this.crosswalkList);
    }

    addLane(lane) {
        this.laneList[lane.id] = lane;
    }

    addEdge(edge) {
        this.edgeList[edge.id] = edge;
    }

    addRoad(road) {
        this.roadList[road.id] = road;
    }

    addJunction(junction) {
        this.junctionList[junction.id] = junction;
    }

    addSignal(signal) {
        this.signalList[signal.id] = signal;
    }

    addCrosswalk(crosswalk) {
        this.crosswalkList[crosswalk.id] = crosswalk;
    }

    addStopSign(stopSign) {
        this.stopSignList[stopSign.id] = stopSign;
    }
}

module.exports = Graph;