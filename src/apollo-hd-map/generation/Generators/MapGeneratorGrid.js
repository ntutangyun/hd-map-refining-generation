const MapProto = require("../../protobuf_out/modules/map/proto/map_pb");
const JunctionGenerator = require("./JunctionGenerator");
const Junction = require("../MapElements/Junction");
const {Point} = require("../../common/ApolloHDMap/Geometry");
const {JunctionGridPoint, DEFAULT_DIRECTIONS} = require("../FeatureEngineering/JunctionGrid");
const {getRandomIntInclusive} = require("../../common/mathUtils");
const {DEFAULT_ROAD_SOCKET_X_OFFSET, DEFAULT_LANE_WIDTH} = require("../../common/constants");
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
        const roadConfigs = [];
        this.junctionGrid.pointList
            .filter(point => point.junction !== null)
            .forEach(junctionPoint => {
                DEFAULT_DIRECTIONS.forEach(direction => {

                    const roadTopo = junctionPoint[direction];

                    // self direction is null. no road is instantiated.
                    if (junctionPoint[direction] === null) {
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

                        //                                        y_offset
                        //  junction_center                       |
                        //    * ----------------------------------|
                        //                 x_offset               |
                        //
                        // imagine the x_offset of the road socket is at the distance of DEFAULT_ROAD_SOCKET_X_OFFSET,
                        // then for every forward lane / outgoing lane, the y_offset increases by 0.5,
                        // for every backward lane / incoming lane, the y_offset decreases by 0.5
                        let xOffset, yOffset;
                        xOffset = DEFAULT_ROAD_SOCKET_X_OFFSET;
                        if (startsFromJunction) {
                            yOffset = (0.5 * forwardLaneCount - 0.5 * backwardLaneCount) * DEFAULT_LANE_WIDTH;
                        } else {
                            yOffset = (0.5 * backwardLaneCount - 0.5 * forwardLaneCount) * DEFAULT_LANE_WIDTH;
                        }

                        const localCenterAngle = Math.atan2(yOffset, xOffset);
                        const junction_center_angle = roadSocketAngleGap * roadLocalIndex + localCenterAngle;
                        const junction_center_distance = localCenterAngle === 0 ? DEFAULT_ROAD_SOCKET_X_OFFSET : yOffset / Math.sin(localCenterAngle);
                        const self_rotation = -localCenterAngle;

                        const startPoint = junction.centerPoint.moveTowards(junction_center_angle, junction_center_distance);
                        const startHeading = junction_center_angle + self_rotation;

                        const endPoint = startPoint.moveTowards(startHeading, 20);
                        const endHeading = startHeading;

                        const road = RoadGenerator.generateRoad({
                            road_id,
                            startPoint,
                            startHeading,
                            endPoint,
                            endHeading,
                            forwardLaneCount: outgoing_lane_count,
                            backwardLaneCount: incoming_lane_count
                        });

                        // road_id,
                        //     junction_center_angle,
                        //     junction_center_distance,
                        //     self_rotation,
                        //     outgoing_lane_count,
                        //     incoming_lane_count

                    } else {
                        // create road connecting to junctions on both side
                    }

                    switch (junctionPoint.east) {
                        case "IN-OUT": {
                            // check opposite direction has junction or not

                            break;
                        }
                        case "IN": {

                            break;
                        }
                        case "OUT": {

                            break;
                        }
                        default: {
                            global.logE(this.name, `Invalid grid direction assignment on east ${junctionPoint.east}`);
                            break;
                        }
                    }
                });
            });
    }

    generateJunctions() {
        this.config.junction_samples.forEach(junctionSample => {
            const junction = JunctionGenerator.generateJunction(junctionSample);

            junction.laneRoadList.forEach(jLaneRoad => {
                jLaneRoad.getLaneList().forEach(lane => {
                    this.map.addLane(lane.serializeToProtobuf(this.config.curveSampleCount));
                });
                this.map.addRoad(jLaneRoad.serializeToProtobuf(this.config.curveSampleCount));
            });

            junction.getOverlapList().forEach(overlap => {
                this.map.addOverlap(overlap.serializeToProtobuf());
            });

            junction.getConnectedRoadList().forEach(road => {
                road.getLaneList().forEach(lane => {
                    this.map.addLane(lane.serializeToProtobuf(this.config.curveSampleCount));
                });
                this.map.addRoad(road.serializeToProtobuf(this.config.curveSampleCount));
            });
            this.junctionGrid = junctionGrid;

            this.map.addJunction(junction.serializeToProtobuf(this.config.curveSampleCount));
        });
    }
}

module.exports = MapGeneratorGrid;