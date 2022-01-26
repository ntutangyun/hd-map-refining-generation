const {degreeToRad, getRandomIntInclusive} = require("../../common/mathUtils");

const MAP_START_OFFSET_X = 10000;
const MAP_START_OFFSET_Y = 10000;
const JUNCTION_GRID_WIDTH = 100;
const MAX_LANE_COUNT_PER_ROAD = 4;
const DEFAULT_LANE_WIDTH = 3.5;
const DEFAULT_ROAD_SOCKET_X_OFFSET = 10;

class JunctionConfigSampler {
    // from the road topo groups extracted from the existing map data,
    // generate one junction configuration with road socket information from each road topo group.

    static sampleJunctionConfigsFromRoadTopoGroups(graph, roadTopoGroupList, rows = 1) {
        let totalRoadCount = 0;

        let junctionConfigs = [];

        for (let rowI = 0; rowI < rows; rowI++) {
            junctionConfigs = junctionConfigs.concat(
                roadTopoGroupList.map((roadTopoGroup, junctionIndex) => {
                    const junction_id = `J_${junctionIndex}`;

                    const center_point = {
                        x: JUNCTION_GRID_WIDTH * junctionIndex + MAP_START_OFFSET_X,
                        y: -JUNCTION_GRID_WIDTH * rowI + MAP_START_OFFSET_X,
                        z: 0
                    };

                    // Equally divide the roads for now.
                    const junctionRoadCount = roadTopoGroup.roadTopoVec.length;
                    const roadSocketAngleGap = degreeToRad(360) / junctionRoadCount;

                    const road_sockets = roadTopoGroup.roadTopoVec.map((roadTopoEntry, roadLocalIndex) => {
                        const road_id = `R_${totalRoadCount++}`;

                        let outgoing_lane_count, incoming_lane_count;
                        if (roadTopoEntry === "IN-OUT") {
                            // randomly select number of total lanes in the road
                            outgoing_lane_count = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD - 1);
                            incoming_lane_count = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD - outgoing_lane_count);
                        } else if (roadTopoEntry === "OUT") {
                            outgoing_lane_count = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD);
                            incoming_lane_count = 0;
                        } else if (roadTopoEntry === "IN") {
                            outgoing_lane_count = 0;
                            incoming_lane_count = getRandomIntInclusive(1, MAX_LANE_COUNT_PER_ROAD);
                        } else {
                            global.logE("JUNCTION_CONFIG_SAMPLER", `Unknown roadTopoEntry: ${roadTopoEntry}`);
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
                        const xOffset = DEFAULT_ROAD_SOCKET_X_OFFSET;
                        const yOffset = (0.5 * outgoing_lane_count - 0.5 * incoming_lane_count) * DEFAULT_LANE_WIDTH;

                        const localCenterAngle = Math.atan2(yOffset, xOffset);
                        const junction_center_angle = roadSocketAngleGap * roadLocalIndex + localCenterAngle;
                        const junction_center_distance = localCenterAngle === 0 ? DEFAULT_ROAD_SOCKET_X_OFFSET : yOffset / Math.sin(localCenterAngle);
                        const self_rotation = -localCenterAngle;

                        return {
                            road_id,
                            junction_center_angle,
                            junction_center_distance,
                            self_rotation,
                            outgoing_lane_count,
                            incoming_lane_count
                        };
                    });

                    return {
                        junction_id,
                        center_point,
                        road_sockets
                    };
                })
            );
        }

        return junctionConfigs;
    }
}

// Junction config sample
// {
//     junctionId: "J_38",
//     center_point: {
//         x: 0,
//         y: 0,
//         z: 0
//     },
//     road_links: [
//         {
//             roadId: "R_0",
//             junction_center_angle: degreeToRad(30),
//             junction_center_distance: 15,
//             self_rotation: degreeToRad(-30),   // anti-clockwise in radian
//             outgoing_lane_count: 4,
//             incoming_lane_count: 0
//         },
//         {
//             roadId: "R_1",
//             junction_center_angle: degreeToRad(60),
//             junction_center_distance: 15,
//             self_rotation: degreeToRad(30),   // clockwise in radian
//             outgoing_lane_count: 0,
//             incoming_lane_count: 4
//         },
//     ]
// },

module.exports = JunctionConfigSampler;