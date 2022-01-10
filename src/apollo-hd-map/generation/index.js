require("../common/setup");

const MapGenerator = require("./MapGenerator");

const config = {
    hd_map_header_path: "./hd_map_header.json",
    junction_sample: {
        junctionId: "J_0",
        center_point: {
            x: 0,
            y: 0,
            z: 0
        },
        road_links: [
            {
                roadId: "road_0",
                junction_center_angle: 0,
                junction_center_distance: 10,
                self_rotation: 10 / 180 * Math.PI,   // clockwise in radian
                outgoing_lane_count: 1,
                incoming_lane_count: 1
            },
            {
                roadId: "road_1",
                junction_center_angle: Math.PI,
                junction_center_distance: 10,
                self_rotation: -10 / 180 * Math.PI,   // clockwise in radian
                outgoing_lane_count: 1,
                incoming_lane_count: 1
            },
            {
                roadId: "road_2",
                junction_center_angle: -Math.PI / 2,
                junction_center_distance: 10,
                self_rotation: 0,   // clockwise in radian
                outgoing_lane_count: 1,
                incoming_lane_count: 1
            },
        ]
    },
    curveSampleCount: 100
};

const mapGenerator = new MapGenerator(config);

const map = mapGenerator.generate();

console.log(map);

const fs = require("fs");

fs.writeFileSync("./index.bin", map.serializeBinary());



