const {degreeToRad, getRandomIntInclusive} = require("../../common/mathUtils");

const JUNCTION_GRID_WIDTH = 100;
const MAX_LANE_COUNT_PER_ROAD = 4;

class JunctionConfigSampler {
    // from the road topo groups extracted from the existing map data,
    // generate one junction configuration with road socket information from each road topo group.

    static sampleJunctionConfigsFromRoadTopoGroups(graph, roadTopoGroupList) {
        let totalRoadCount = 0;

        const junctionConfigs = roadTopoGroupList.map((roadTopoGroup, junctionIndex) => {
            const junction_id = `J_${junctionIndex}`;

            const center_point = {
                x: JUNCTION_GRID_WIDTH * junctionIndex,
                y: 0,
                z: 0
            };

            // Equally divide the roads for now.
            const junctionRoadCount = roadTopoGroup.roadTopoVec.length;
            const roadSocketAngleGap = 360 / junctionRoadCount;

            const road_sockets = roadTopoGroup.roadTopoVec.map((roadTopoEntry, roadIndex) => {
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

                const RoadLaneCount = outgoing_lane_count + incoming_lane_count;



            });

        });

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