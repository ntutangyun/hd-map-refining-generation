const MapProto = require("../../protobuf_out/modules/map/proto/map_pb");
const Junction = require("../MapElements/Junction");
const {Point, vectorHeading, vector, BezierCurve} = require("../../common/ApolloHDMap/Geometry");
const {JunctionGridPoint} = require("../FeatureEngineering/GridLayout/JunctionGrid");
const {getRandomIntInclusive, getHypotenuse, degreeNormalize, degreeToRad} = require("../../common/mathUtils");
const {
    DEFAULT_ROAD_SOCKET_X_OFFSET, DEFAULT_LANE_WIDTH, MAX_LANE_COUNT_PER_ROAD, DEFAULT_ROAD_LENGTH
} = require("../../common/constants");
const RoadGenerator = require("./RoadGenerator");
const {getOppositeDirection, DEFAULT_DIRECTIONS} = require("../FeatureEngineering/GridLayout/JunctionGridUtils");
const Signal = require("../MapElements/Signal");

class MapGeneratorGrid {
    constructor(config, junctionGrid) {
        this.config = config;
        this.map = null;
        this.junctionGrid = junctionGrid;

        this.junctionCount = 0;
        this.roadCount = 0;
        this.laneCount = 0;
        this.signalCount = 0;

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
    }

    get name() {
        return this.constructor.name;
    }

    generate() {
        this.map = new MapProto.Map();
        this.map.setHeader(MapProto.Header.fromObject(this.config.hd_map_header));

        this.instantiateJunctions();
        this.instantiateRoads();
        this.instantiateSignals();
        this.updateJunctions();
        this.updateOverlaps();

        return this.map;
    }

    instantiateJunctions() {
        this.junctionGrid.pointList.forEach(point => {
            // empty point
            if (point.junctionCluster === null) {
                point.junction = null;
                return;
            }

            point.junction = new Junction({
                junction_id: global.getNewJunctionId(), center_point: new Point(point.x, point.y, 0)
            });
        });
    }

    instantiateRoads() {
        this.junctionGrid.getJunctionPointList()
            .forEach(junctionPoint => {
                DEFAULT_DIRECTIONS.forEach(direction => {
                    // self direction is null. no road is instantiated.
                    if (junctionPoint[direction].topo === null) {
                        return;
                    }

                    const {topo, rotation} = junctionPoint[direction];

                    // check if a road has already been instantiated or not
                    if (junctionPoint.roadAssignment[direction] !== null) {
                        return;
                    }

                    // check if the road of the direction connects the opposite junction
                    const oppositePoint = junctionPoint.getOppositeGridPoint(direction);
                    if (!oppositePoint) {
                        global.logE(this.name, "Cannot find opposite point.");
                        process.exit(-1);
                    }

                    // check opposite point is empty point or not
                    const oppositeDirection = getOppositeDirection(direction);

                    if (oppositePoint.junction === null || oppositePoint[oppositeDirection].topo === null) {
                        // create a straight road connecting to the current junction
                        // the road will be named after current junction
                        const roadId = global.getNewRoadId();

                        // for in-out and out, startsFromJunction is true. for in roads, startsFromJunction is false
                        let startsFromJunction = true;

                        let forwardLaneCount, backwardLaneCount;
                        if (topo === "IN-OUT") {
                            // randomly select number of total lanes in the road
                            // forwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD - 1);
                            // backwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD - forwardLaneCount);
                            forwardLaneCount = 1;
                            backwardLaneCount = 1;
                        } else if (topo === "OUT") {
                            // forwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD);
                            forwardLaneCount = 1;
                            backwardLaneCount = 0;
                        } else if (topo === "IN") {
                            startsFromJunction = false;
                            forwardLaneCount = 1;
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

                        const xOffset = DEFAULT_ROAD_SOCKET_X_OFFSET;
                        if (startsFromJunction) {
                            const yOffset = (0.5 * forwardLaneCount - 0.5 * backwardLaneCount) * DEFAULT_LANE_WIDTH;

                            const localCenterAngle = Math.atan2(yOffset, xOffset);
                            const junctionCenterAngle = directionAngle + localCenterAngle;
                            const junctionCenterDistance = getHypotenuse(xOffset, yOffset);

                            startPoint = junctionPoint.junction.centerPoint.moveTowards(junctionCenterAngle, junctionCenterDistance);
                            startHeading = directionAngle;

                            endPoint = startPoint.moveTowards(startHeading, DEFAULT_ROAD_LENGTH);
                            endHeading = startHeading;
                        } else {
                            const yOffset = (0.5 * backwardLaneCount - 0.5 * forwardLaneCount) * DEFAULT_LANE_WIDTH;

                            const localCenterAngle = Math.atan2(yOffset, xOffset);
                            const junctionCenterAngle = directionAngle + localCenterAngle;
                            const junctionCenterDistance = getHypotenuse(xOffset, yOffset);

                            endPoint = junctionPoint.junction.centerPoint.moveTowards(junctionCenterAngle, junctionCenterDistance);
                            endHeading = directionOppositeAngle;

                            startPoint = endPoint.moveTowards(directionAngle, DEFAULT_ROAD_LENGTH);
                            startHeading = endHeading;
                        }

                        const road = RoadGenerator.generateRoad({
                            roadId, startPoint, startHeading, endPoint, endHeading, forwardLaneCount, backwardLaneCount,
                        });

                        junctionPoint.assignRoad(direction, road);

                        junctionPoint.junction.connectRoad(road);

                    } else {
                        // check if a road has already been created
                        if (oppositePoint.roadAssignment[oppositeDirection] !== null) {
                            global.logE(this.name, "Road created in opposite direction. Something went wrong. This should not happen.");
                            process.exit(-1);
                        }

                        // if the road topo is IN, road will be named after and starts from the opposite junction.
                        // road will be created at the opposite point, not here.
                        if (topo === "IN") {
                            return;
                        }

                        // create road connecting to junctions on both side
                        // road starts from and is named after the current junction.
                        const roadId = global.getNewRoadId();

                        let forwardLaneCount, backwardLaneCount;
                        if (topo === "IN-OUT") {
                            // randomly select number of total lanes in the road
                            // forwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD - 1);
                            // backwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD - forwardLaneCount);
                            forwardLaneCount = 1;
                            backwardLaneCount = 1;
                        } else if (topo === "OUT") {
                            // forwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD);
                            forwardLaneCount = 1;
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

                        let startPoint, startHeading, endPoint, endHeading;

                        // calculate start point and start heading on the current point
                        {
                            const directionAngle = degreeToRad(rotation);

                            const xOffset = DEFAULT_ROAD_SOCKET_X_OFFSET;
                            const yOffset = (0.5 * forwardLaneCount - 0.5 * backwardLaneCount) * DEFAULT_LANE_WIDTH;

                            const localCenterAngle = Math.atan2(yOffset, xOffset);
                            const junctionCenterAngle = directionAngle + localCenterAngle;
                            const junctionCenterDistance = getHypotenuse(xOffset, yOffset);

                            startPoint = junctionPoint.junction.centerPoint.moveTowards(junctionCenterAngle, junctionCenterDistance);
                            startHeading = directionAngle;
                        }

                        // calculate the end point and end heading based on the opposite point
                        {
                            const directionAngle = degreeToRad(oppositePoint[oppositeDirection].rotation);

                            const xOffset = DEFAULT_ROAD_SOCKET_X_OFFSET;
                            const yOffset = (0.5 * backwardLaneCount - 0.5 * forwardLaneCount) * DEFAULT_LANE_WIDTH;

                            const localCenterAngle = Math.atan2(yOffset, xOffset);
                            const junctionCenterAngle = directionAngle + localCenterAngle;
                            const junctionCenterDistance = getHypotenuse(xOffset, yOffset);

                            endPoint = oppositePoint.junction.centerPoint.moveTowards(junctionCenterAngle, junctionCenterDistance);
                            endHeading = degreeToRad(degreeNormalize(180 + oppositePoint[oppositeDirection].rotation));
                        }

                        const road = RoadGenerator.generateRoad({
                            roadId, startPoint, startHeading, endPoint, endHeading, forwardLaneCount, backwardLaneCount,
                        });

                        junctionPoint.assignRoad(direction, road);
                        oppositePoint.assignRoad(oppositeDirection, road);

                        junctionPoint.junction.connectRoad(road);
                        oppositePoint.junction.connectRoad(road);
                    }
                });
            });
    }

    instantiateSignals() {
        this.junctionGrid.getJunctionPointList().forEach(junctionPoint => {
            console.log(junctionPoint);

            const junction = junctionPoint.junction;

            const roadList = [];
            if (junctionPoint.eastSignal) {
                roadList.push(junctionPoint.roadAssignment.EAST);
            }
            if (junctionPoint.northSignal) {
                roadList.push(junctionPoint.roadAssignment.NORTH);
            }
            if (junctionPoint.westSignal) {
                roadList.push(junctionPoint.roadAssignment.WEST);
            }
            if (junctionPoint.southSignal) {
                roadList.push(junctionPoint.roadAssignment.SOUTH);
            }
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
                const position = junction.centerPoint.moveTowards(heading + Math.PI, DEFAULT_ROAD_SOCKET_X_OFFSET / 3 * 2);

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

    updateJunctions() {
        const roadList = {};

        this.junctionGrid.getJunctionPointList().forEach(junctionPoint => {
            junctionPoint.junction.generateJunctionLanes();
            junctionPoint.junction.generatePolygon();
            junctionPoint.junction.generateLaneOverlap();

            junctionPoint.junction.laneRoadList.forEach(jLaneRoad => {
                jLaneRoad.getLaneList().forEach(lane => {
                    this.map.addLane(lane.serializeToProtobuf(this.config.curveSampleCount));
                });
                this.map.addRoad(jLaneRoad.serializeToProtobuf(this.config.curveSampleCount));
            });

            junctionPoint.junction.getConnectedRoadList().forEach(road => {
                roadList[road.id] = road;
            });

            this.map.addJunction(junctionPoint.junction.serializeToProtobuf(this.config.curveSampleCount));
        });

        Object.values(roadList).forEach(road => {
            road.getLaneList().forEach(lane => {
                this.map.addLane(lane.serializeToProtobuf(this.config.curveSampleCount));
            });
            this.map.addRoad(road.serializeToProtobuf(this.config.curveSampleCount));
        });
    }

    updateOverlaps() {
        const overlapList = {};
        this.junctionGrid.getJunctionPointList().forEach(junctionPoint => {
            junctionPoint.junction.getOverlapList().forEach(overlap => {
                overlapList[overlap.id] = overlap;
            });
            junctionPoint.junction.getSignalList().forEach(signal => {
                signal.getOverlapList().forEach(overlap => {
                    overlapList[overlap.id] = overlap;
                });
            });
        });

        Object.values(overlapList).forEach(overlap => {
            this.map.addOverlap(overlap.serializeToProtobuf());
        });
    }

// generateJunctions() {
//     this.config.junction_samples.forEach(junctionSample => {
//         const junction = JunctionGenerator.generateJunction(junctionSample);
//
//         junction.laneRoadList.forEach(jLaneRoad => {
//             jLaneRoad.getLaneList().forEach(lane => {
//                 this.map.addLane(lane.serializeToProtobuf(this.config.curveSampleCount));
//             });
//             this.map.addRoad(jLaneRoad.serializeToProtobuf(this.config.curveSampleCount));
//         });
//
//         junction.getOverlapList().forEach(overlap => {
//             this.map.addOverlap(overlap.serializeToProtobuf());
//         });
//
//         junction.getConnectedRoadList().forEach(road => {
//             road.getLaneList().forEach(lane => {
//                 this.map.addLane(lane.serializeToProtobuf(this.config.curveSampleCount));
//             });
//             this.map.addRoad(road.serializeToProtobuf(this.config.curveSampleCount));
//         });
//         this.junctionGrid = junctionGrid;
//
//         this.map.addJunction(junction.serializeToProtobuf(this.config.curveSampleCount));
//     });
// }
}

module.exports = MapGeneratorGrid;