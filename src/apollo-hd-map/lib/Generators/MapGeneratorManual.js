const MapProto = global.ApolloTestingLib("protobuf_out/modules/map/proto/map_pb");
const {Point, vectorHeading, vector, BezierCurve} = global.ApolloTestingLib("common/ApolloHDMap/Geometry");
const {getHypotenuse, degreeNormalize, degreeToRad} = global.ApolloTestingLib("common/mathUtils");
const {DEFAULT_LANE_WIDTH, DEFAULT_ROAD_LENGTH} = global.ApolloTestingLib("common/constants");
const Junction = require("../MapElements/Junction");
const RoadGenerator = require("./RoadGenerator");
const Signal = require("../MapElements/Signal");
const StopSign = require("../MapElements/StopSign");
const Crosswalk = require("../MapElements/Crosswalk");

class MapGeneratorManual {
    constructor(config) {
        this.config = config;
        this.map = null;

        this.junctionCount = 0;
        this.roadCount = 0;
        this.laneCount = 0;
        this.signalCount = 0;
        this.stopSignCount = 0;
        this.crosswalkCount = 0;

        this.junctionList = [];
        this.roadList = [];
        this.laneList = [];
        this.signalList = [];
        this.stopSignList = [];
        this.crosswalkList = [];

        global.getNewJunctionId = () => {
            return `J_${this.junctionCount++}`;
        };

        global.getNewRoadId = () => {
            return `road_${this.roadCount++}`;
        };

        global.getNewLaneId = () => {
            return `lane_${this.laneCount++}`;
        };

        global.getNewSignalId = () => {
            return `signal_${this.signalCount++}`;
        };

        global.getNewStopSignId = () => {
            return `stop_sign_${this.stopSignCount++}`;
        };

        global.getNewCrosswalkId = () => {
            return `CW_${this.crosswalkCount++}`;
        };
    }

    get name() {
        return this.constructor.name;
    }

    generate() {
        this.map = new MapProto.Map();
        this.map.setHeader(MapProto.Header.fromObject(this.config.hd_map_header));

        this.instantiateJunctions();
        this.instantiateRoads();
        this.updateJunctions();
        this.instantiateSignals();
        this.instantiateStopSigns();
        this.instantiateCrosswalks();

        if (this.config.autoLinkRoadLane) {
            this.autoLinkRoadLane();
        }

        this.addJunctions();
        this.addLaneNRoads();
        this.addSignals();
        this.addStopSigns();
        this.addCrosswalks();
        this.addOverlaps();

        return this.map;
    }

    autoLinkRoadLane() {
        const laneList = [];

        this.roadList.forEach(road => {
            road.getLaneList().forEach(lane => {
                laneList.push(lane);
            });
        });

        laneList.forEach(fromLane => {
            laneList.forEach(toLane => {
                if (fromLane.id === toLane.id) {
                    return;
                }

                if (fromLane.centralCurve.endPoint.equalTo(toLane.centralCurve.startPoint)) {
                    fromLane.outgoingList.push(toLane);
                    toLane.incomingList.push(fromLane);
                }
            });
        });
    }

    instantiateJunctions() {
        this.config.manual.junctionList.forEach(junctionConfig => {
            const junction = new Junction({
                junction_id: global.getNewJunctionId(),
                center_point: new Point(junctionConfig.center.x, junctionConfig.center.y, 0)
            });
            junction.config = junctionConfig;
            this.junctionList.push(junction);
        });
    }

    instantiateRoads() {
        this.junctionList.forEach(junction => {
            junction.connectedRoadList = {};
            const {roadList} = junction.config;
            Object.entries(roadList).forEach(([direction, roadConfig]) => {
                const {topo, rotation} = roadConfig;
                // create a straight road connecting to the current junction only
                const roadId = global.getNewRoadId();

                const roadSpeed = 10;

                // for in-out and out, startsFromJunction is true. for in roads, startsFromJunction is false
                let startsFromJunction = true;

                let forwardLaneCount, backwardLaneCount;
                if (topo === "IN-OUT") {
                    // randomly select number of total lanes in the road
                    // forwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD - 1);
                    // backwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD - forwardLaneCount);
                    forwardLaneCount = 2;
                    backwardLaneCount = 2;
                } else if (topo === "OUT") {
                    // forwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD);
                    forwardLaneCount = 4;
                    backwardLaneCount = 0;
                } else if (topo === "IN") {
                    startsFromJunction = false;
                    forwardLaneCount = 4;
                    // forwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD);
                    backwardLaneCount = 0;
                } else {
                    global.logE(this.name, `Unknown topo: ${topo}`);
                    process.exit(-1);
                }

                // starts from junction = true
                //                                        y_offset
                //  junction_center                       |
                //    * ----------------------------------|
                //                 x_offset               |
                //
                // imagine the x_offset of the road socket is at the distance of DEFAULT_ROAD_SOCKET_X_OFFSET,
                // then for every forward lane / outgoing lane, the y_offset increases by 0.5,
                // for every backward lane / incoming lane, the y_offset decreases by 0.5

                // starts from junction = false
                //
                //  junction_center             |  0.75 * JUNCTION GRID GAP   |
                //    * ------------------------|-----------------------------|
                //                            x_offset                        y_offset
                //
                // imagine the x_offset of the road socket is at the distance of DEFAULT_ROAD_SOCKET_X_OFFSET,
                // then for every forward lane / outgoing lane, the y_offset increases by 0.5,
                // for every backward lane / incoming lane, the y_offset decreases by 0.5
                let startPoint, startHeading, endPoint, endHeading;

                const directionAngle = degreeToRad(rotation);
                const directionOppositeAngle = degreeToRad(degreeNormalize(180 + rotation));

                const xOffset = 20;
                if (startsFromJunction) {
                    const yOffset = (0.5 * forwardLaneCount - 0.5 * backwardLaneCount) * DEFAULT_LANE_WIDTH;

                    const localCenterAngle = Math.atan2(yOffset, xOffset);
                    const junctionCenterAngle = directionAngle + localCenterAngle;
                    const junctionCenterDistance = getHypotenuse(xOffset, yOffset);

                    startPoint = junction.centerPoint.moveTowards(junctionCenterAngle, junctionCenterDistance);
                    startHeading = directionAngle;

                    endPoint = startPoint.moveTowards(startHeading, DEFAULT_ROAD_LENGTH);
                    endHeading = startHeading;
                } else {
                    const yOffset = (0.5 * backwardLaneCount - 0.5 * forwardLaneCount) * DEFAULT_LANE_WIDTH;

                    const localCenterAngle = Math.atan2(yOffset, xOffset);
                    const junctionCenterAngle = directionAngle + localCenterAngle;
                    const junctionCenterDistance = getHypotenuse(xOffset, yOffset);

                    endPoint = junction.centerPoint.moveTowards(junctionCenterAngle, junctionCenterDistance);
                    endHeading = directionOppositeAngle;

                    startPoint = endPoint.moveTowards(directionAngle, DEFAULT_ROAD_LENGTH);
                    startHeading = endHeading;
                }

                const road = RoadGenerator.generateRoad({
                    roadId,
                    startPoint,
                    startHeading,
                    endPoint,
                    endHeading,
                    forwardLaneCount,
                    backwardLaneCount,
                    forwardSpeedLimit: roadSpeed,
                    backwardSpeedLimit: roadSpeed
                });

                junction.connectRoad(road, direction);
            });
        });

        // instantiate standalone roads
        this.config.manual.roadList.forEach(roadConfig => {
            const {
                id,
                startPoint,
                startHeading,
                endPoint,
                endHeading,
                forwardLaneCount,
                backwardLaneCount,
                forwardSpeedLimit,
                backwardSpeedLimit,
                startOffsetRatio,
                endOffsetRatio
            } = roadConfig;

            const road = RoadGenerator.generateRoad({
                roadId: id,
                startPoint,
                startHeading,
                endPoint,
                endHeading,
                forwardLaneCount,
                backwardLaneCount,
                forwardSpeedLimit,
                backwardSpeedLimit,
                startOffsetRatio,
                endOffsetRatio,
            });

            this.roadList.push(road);
        });

        let a = {};
        this.roadList.forEach(road => {
            if (a.hasOwnProperty(road.id)) {
                console.log(`found::: ${road.id}`);
            }
        });
    }

    instantiateSignals() {
        this.junctionList.forEach(junction => {
            const config = junction.config;
            if (!config.signal) {
                return;
            }
            const roadList = junction.getConnectedRoadList();
            roadList.forEach(road => {
                const isRoadOutgoing = junction.isRoadOutgoing(road);

                // signal for east direction is located at west
                // since opposite not necessarily has road assignment, use the current road to calculate the signal position
                let roadConnectionPoint;
                if (isRoadOutgoing) {
                    roadConnectionPoint = road.startPoint;
                } else {
                    roadConnectionPoint = road.endPoint;
                }
                const heading = vectorHeading(vector(junction.centerPoint, roadConnectionPoint));
                const position = junction.centerPoint.moveTowards(heading + Math.PI, 20 / 3 * 2);

                const laneList = [];
                if (isRoadOutgoing) {
                    road.getBackwardLaneList().forEach(rLane => {
                        laneList.push(rLane);
                        rLane.getOutgoingLaneList()
                            .filter(jLane => jLane.junction.id === junction.id)
                            .forEach(jLane => {
                                laneList.push(jLane);
                            });
                    });
                } else {
                    road.getForwardLaneList().forEach(rLane => {
                        laneList.push(rLane);
                        rLane.getOutgoingLaneList()
                            .filter(jLane => jLane.junction.id === junction.id)
                            .forEach(jLane => {
                                laneList.push(jLane);
                            });
                    });
                }

                let stopLine, incomingLaneList;
                if (isRoadOutgoing) {
                    incomingLaneList = road.getBackwardLaneList();
                } else {
                    incomingLaneList = road.getForwardLaneList();
                }

                if (incomingLaneList.length === 0) {
                    return;
                }

                const startPoint = incomingLaneList.first().leftBoundaryCurve.endPoint;
                const endPoint = incomingLaneList.last().rightBoundaryCurve.endPoint;
                const startHeading = vectorHeading(vector(startPoint, endPoint));
                const endHeading = startHeading;
                stopLine = BezierCurve.buildBezierCurve({startPoint, startHeading, endPoint, endHeading});

                const signal = new Signal({
                    id: global.getNewSignalId(), position, heading, junction, laneList, stopLine
                });

                junction.signalList.push(signal);
            });
        });
    }

    instantiateStopSigns() {
        this.junctionList.forEach(junction => {
            const config = junction.config;
            if (!config.stopSign) {
                return;
            }

            const roadList = junction.getConnectedRoadList();
            roadList.forEach(road => {
                const isRoadOutgoing = junction.isRoadOutgoing(road);

                let stopLine, incomingLaneList;
                if (isRoadOutgoing) {
                    incomingLaneList = road.getBackwardLaneList();
                } else {
                    incomingLaneList = road.getForwardLaneList();
                }

                const startPoint = incomingLaneList.first().leftBoundaryCurve.endPoint;
                const endPoint = incomingLaneList.last().rightBoundaryCurve.endPoint;
                const startHeading = vectorHeading(vector(startPoint, endPoint));
                const endHeading = startHeading;
                stopLine = BezierCurve.buildBezierCurve({startPoint, startHeading, endPoint, endHeading});

                // signal for east direction is located at west
                // since opposite not necessarily has road assignment, use the current road to calculate the signal position
                const laneList = [];
                if (isRoadOutgoing) {
                    road.getBackwardLaneList().forEach(rLane => {
                        laneList.push(rLane);
                        rLane.getOutgoingLaneList()
                            .filter(jLane => jLane.junction.id === junction.id)
                            .forEach(jLane => {
                                laneList.push(jLane);
                            });
                    });
                } else {
                    road.getForwardLaneList().forEach(rLane => {
                        laneList.push(rLane);
                        rLane.getOutgoingLaneList()
                            .filter(jLane => jLane.junction.id === junction.id)
                            .forEach(jLane => {
                                laneList.push(jLane);
                            });
                    });
                }

                const stopSign = new StopSign({
                    id: global.getNewStopSignId(), junction, laneList, stopLine
                });

                junction.stopSignList.push(stopSign);
            });
        });
    }

    instantiateCrosswalks() {
        this.junctionList.forEach(junction => {
            const config = junction.config;
            if (!config.crosswalk) {
                return;
            }

            const roadList = junction.getConnectedRoadList();
            roadList.forEach(road => {
                let isRoadOutgoing;
                isRoadOutgoing = junction.isRoadOutgoing(road);

                let laneList = {};

                road.getForwardLaneList().forEach(forwardLane => {
                    laneList[forwardLane.id] = forwardLane;

                    if (isRoadOutgoing) {
                        forwardLane.getIncomingList().forEach(inLane => {
                            laneList[inLane.id] = inLane;
                        });
                    } else {
                        forwardLane.getOutgoingList().forEach(outLane => {
                            laneList[outLane.id] = outLane;
                        });
                    }
                });

                road.getBackwardLaneList().forEach(backwardLane => {
                    laneList[backwardLane.id] = backwardLane;

                    if (isRoadOutgoing) {
                        backwardLane.getOutgoingList().forEach(outLane => {
                            laneList[outLane.id] = outLane;
                        });
                    } else {
                        backwardLane.getIncomingList().forEach(inLane => {
                            laneList[inLane.id] = inLane;
                        });
                    }
                });

                laneList = Object.values(laneList);

                const crosswalk = new Crosswalk({
                    id: global.getNewCrosswalkId(), junction, laneList, road
                });

                junction.crosswalkList.push(crosswalk);
            });
        });
    }

    updateJunctions() {
        this.junctionList.forEach(junction => {
            junction.generateJunctionLanes();
            junction.generatePolygon();
            junction.generateLaneOverlap();
        });
    }

    addOverlaps() {
        const overlapList = {};
        this.junctionList.forEach(junction => {
            junction.getOverlapList().forEach(overlap => {
                overlapList[overlap.id] = overlap;
            });
            junction.getSignalList().forEach(signal => {
                signal.getOverlapList().forEach(overlap => {
                    overlapList[overlap.id] = overlap;
                });
            });
            junction.getStopSignList().forEach(stopSign => {
                stopSign.getOverlapList().forEach(overlap => {
                    overlapList[overlap.id] = overlap;
                });
            });
            junction.getCrosswalkList().forEach(crosswalk => {
                crosswalk.getOverlapList().forEach(overlap => {
                    overlapList[overlap.id] = overlap;
                });
            });

            junction.getLaneList().forEach(lane => {
                lane.getOverlapList().forEach(overlap => {
                    overlapList[overlap.id] = overlap;
                });
            });

            junction.getConnectedRoadList().forEach(road => {
                road.getLaneList().forEach(lane => {
                    lane.getOverlapList().forEach(overlap => {
                        overlapList[overlap.id] = overlap;
                    });
                });
            });
        });

        Object.values(overlapList).forEach(overlap => {
            this.map.addOverlap(overlap.serializeToProtobuf());
        });
    }

    addLaneNRoads() {
        const roadList = {};
        this.junctionList.forEach(junction => {
            junction.laneRoadList.forEach(jLaneRoad => {
                jLaneRoad.getLaneList().forEach(lane => {
                    this.map.addLane(lane.serializeToProtobuf(this.config.curveSampleCount));
                });
                this.map.addRoad(jLaneRoad.serializeToProtobuf(this.config.curveSampleCount));
            });

            junction.getConnectedRoadList().forEach(road => {
                roadList[road.id] = road;
            });
        });

        this.roadList.forEach(road => {
            roadList[road.id] = road;
            // this.map.addRoad(road.serializeToProtobuf(this.config.curveSampleCount));
        });

        this.roadList.sort((a, b) => a.id.localeCompare(b.id));

        console.log(roadList);

        Object.values(roadList).forEach(road => {
            road.getLaneList().forEach(lane => {
                this.map.addLane(lane.serializeToProtobuf(this.config.curveSampleCount));
            });
            this.map.addRoad(road.serializeToProtobuf(this.config.curveSampleCount));
        });
    }

    addJunctions() {
        this.junctionList.forEach(junction => {
            this.map.addJunction(junction.serializeToProtobuf(this.config.curveSampleCount));
        });
    }

    addSignals() {
        this.junctionList.forEach(junction => {
            junction.signalList.forEach(signal => {
                this.map.addSignal(signal.serializeToProtobuf());
            });
        });
    }

    addStopSigns() {
        this.junctionList.forEach(junction => {
            junction.stopSignList.forEach(stopSign => {
                this.map.addStopSign(stopSign.serializeToProtobuf());
            });
        });
    }

    addCrosswalks() {
        this.junctionList.forEach(junction => {
            junction.crosswalkList.forEach(crosswalk => {
                this.map.addCrosswalk(crosswalk.serializeToProtobuf());
            });
        });
    }
}

module.exports = MapGeneratorManual;