const MapProto = require("../../protobuf_out/modules/map/proto/map_pb");
const Junction = require("../MapElements/Junction");
const {Point} = require("../../common/ApolloHDMap/Geometry");
const {JunctionGridPoint, DEFAULT_DIRECTIONS} = require("../FeatureEngineering/JunctionGrid");
const {getRandomIntInclusive, getHypotenuse} = require("../../common/mathUtils");
const {
    DEFAULT_ROAD_SOCKET_X_OFFSET,
    DEFAULT_LANE_WIDTH,
    MAX_LANE_COUNT_PER_ROAD,
    DEFAULT_ROAD_LENGTH
} = require("../../common/constants");
const RoadGenerator = require("./RoadGenerator");

class MapGeneratorGrid {
    constructor(config, junctionGrid) {
        this.config = config;
        this.map = null;
        this.junctionGrid = junctionGrid;
    }

    get name() {
        return this.constructor.name;
    }

    generate() {
        this.map = new MapProto.Map();
        this.map.setHeader(MapProto.Header.fromObject(this.config.hd_map_header));

        console.log(this.junctionGrid);

        this.instantiateJunctions();
        this.instantiateRoads();

        this.updateJunctions();

        return this.map;
    }

    instantiateJunctions() {
        this.junctionGrid.pointList.forEach(point => {
            // empty point
            if (point.topoGroup === null) {
                point.junction = null;
                return;
            }

            point.junction = new Junction({
                junction_id: point.formatJunctionId(), center_point: new Point(point.x, point.y, 0)
            });
        });
    }

    instantiateRoads() {
        console.log(this.junctionGrid);
        console.log(this.junctionGrid.pointList.filter(p => p.junction !== null));
        this.junctionGrid.pointList
            .filter(point => point.junction !== null)
            .forEach(junctionPoint => {
                DEFAULT_DIRECTIONS.forEach(direction => {

                    const roadTopo = junctionPoint[direction];

                    // self direction is null. no road is instantiated.
                    if (junctionPoint[direction] === null) {
                        return;
                    }

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
                    const oppositeDirection = JunctionGridPoint.getOppositeDirection(direction);
                    if (oppositePoint[oppositeDirection] === null) {
                        // create road connecting to the current junction
                        // the road will be named after current junction
                        const roadId = `R_${junctionPoint.junction.id}_${direction}`;

                        // for in-out and out, startsFromJunction is true. for in roads, startsFromJunction is false
                        let startsFromJunction = true;

                        let forwardLaneCount, backwardLaneCount;
                        if (roadTopo === "IN-OUT") {
                            // randomly select number of total lanes in the road
                            forwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD - 1);
                            backwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD - forwardLaneCount);
                        } else if (roadTopo === "OUT") {
                            forwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD);
                            backwardLaneCount = 0;
                        } else if (roadTopo === "IN") {
                            startsFromJunction = false;
                            forwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD);
                            backwardLaneCount = 0;
                        } else {
                            global.logE(this.name, `Unknown roadTopo: ${roadTopo}`);
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

                        const directionAngle = JunctionGridPoint.getDirectionAngle(direction);
                        const directionOppositeAngle = JunctionGridPoint.getDirectionOppositeAngle(direction);

                        if (startsFromJunction) {

                            const xOffset = DEFAULT_ROAD_SOCKET_X_OFFSET;
                            const yOffset = (0.5 * forwardLaneCount - 0.5 * backwardLaneCount) * DEFAULT_LANE_WIDTH;

                            const localCenterAngle = Math.atan2(yOffset, xOffset);
                            const junctionCenterAngle = directionAngle + localCenterAngle;
                            const junctionCenterDistance = getHypotenuse(xOffset, yOffset);

                            startPoint = junctionPoint.junction.centerPoint.moveTowards(junctionCenterAngle, junctionCenterDistance);
                            startHeading = directionAngle;

                            endPoint = startPoint.moveTowards(startHeading, DEFAULT_ROAD_LENGTH);
                            endHeading = startHeading;

                        } else {
                            const xOffset = DEFAULT_ROAD_SOCKET_X_OFFSET;
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
                            roadId,
                            startPoint,
                            startHeading,
                            endPoint,
                            endHeading,
                            forwardLaneCount,
                            backwardLaneCount,
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
                        if (roadTopo === "IN") {
                            return;
                        }

                        // create road connecting to junctions on both side
                        // road starts from and is named after the current junction.
                        const roadId = `R_${junctionPoint.junction.id}_${direction}`;

                        let forwardLaneCount, backwardLaneCount;
                        if (roadTopo === "IN-OUT") {
                            // randomly select number of total lanes in the road
                            forwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD - 1);
                            backwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD - forwardLaneCount);
                        } else if (roadTopo === "OUT") {
                            forwardLaneCount = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD);
                            backwardLaneCount = 0;
                        } else {
                            global.logE(this.name, `Unknown roadTopo: ${roadTopo}`);
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

                        const directionAngle = JunctionGridPoint.getDirectionAngle(direction);

                        const xOffset = DEFAULT_ROAD_SOCKET_X_OFFSET;
                        const yOffset = (0.5 * forwardLaneCount - 0.5 * backwardLaneCount) * DEFAULT_LANE_WIDTH;

                        const localCenterAngle = Math.atan2(yOffset, xOffset);
                        const junctionCenterAngle = directionAngle + localCenterAngle;
                        const junctionCenterDistance = getHypotenuse(xOffset, yOffset);

                        startPoint = junctionPoint.junction.centerPoint.moveTowards(junctionCenterAngle, junctionCenterDistance);
                        startHeading = directionAngle;

                        endPoint = startPoint.moveTowards(startHeading, DEFAULT_ROAD_LENGTH);
                        endHeading = startHeading;

                        const road = RoadGenerator.generateRoad({
                            roadId,
                            startPoint,
                            startHeading,
                            endPoint,
                            endHeading,
                            forwardLaneCount,
                            backwardLaneCount,
                        });

                        junctionPoint.assignRoad(direction, road);
                        oppositePoint.assignRoad(oppositeDirection, road);

                        junctionPoint.junction.connectRoad(road);
                        oppositePoint.junction.connectRoad(road);
                    }
                });
            });
    }

    updateJunctions() {
        const roadList = {};

        this.junctionGrid.pointList.filter(p => p.junction !== null).forEach(junctionPoint => {
            junctionPoint.junction.generateJunctionLanes();
            junctionPoint.junction.generatePolygon();
            junctionPoint.junction.generateLaneOverlap();

            junctionPoint.junction.laneRoadList.forEach(jLaneRoad => {
                jLaneRoad.getLaneList().forEach(lane => {
                    this.map.addLane(lane.serializeToProtobuf(this.config.curveSampleCount));
                });
                this.map.addRoad(jLaneRoad.serializeToProtobuf(this.config.curveSampleCount));
            });

            junctionPoint.junction.getOverlapList().forEach(overlap => {
                this.map.addOverlap(overlap.serializeToProtobuf());
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