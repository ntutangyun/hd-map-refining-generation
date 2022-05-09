const fs = require("fs");
const path = require("path");

let config = require("../lib/global.config.json");
global.ApolloTestingLib = (localPath) => require(path.join(config.ApolloTestingLibPath, localPath));
global.ApolloTestingLib("common/setup");

const MapGeneratorManual = require("../lib/Generators/MapGeneratorManual");
config = {
    ...config,
    hd_map_header: global.ApolloTestingLib("common/hd_map_header.json"),
    curveSampleCount: 20,
    manual: {
        junctionList: [
            {
                id: "J_0",
                center: {
                    x: 1000,
                    y: 1000
                },
                roadList: {
                    "EAST": {
                        topo: "IN-OUT",
                        rotation: 0,
                    },
                    "NORTH": {
                        topo: "IN-OUT",
                        rotation: 90,
                    },
                    // "WEST": {
                    //     topo: "IN-OUT",
                    //     rotation: 180,
                    // },
                    // "SOUTH": {
                    //     topo: "IN-OUT",
                    //     rotation: -90,
                    // },
                },
                signal: true,
                stopSign: false,
                crosswalk: true
            },
            {
                id: "J_1",
                center: {
                    x: 2000,
                    y: 1000
                },
                roadList: {
                    "EAST": {
                        topo: "IN-OUT",
                        rotation: 0,
                    },
                    "NORTH": {
                        topo: "IN-OUT",
                        rotation: 90,
                    },
                    "WEST": {
                        topo: "IN-OUT",
                        rotation: 180,
                    },
                    // "SOUTH": {
                    //     topo: "IN-OUT",
                    //     rotation: -90,
                    // },
                },
                signal: false,
                stopSign: true,
                crosswalk: true
            },
            {
                id: "J_2",
                center: {
                    x: 3000,
                    y: 1000
                },
                roadList: {
                    "EAST": {
                        topo: "IN-OUT",
                        rotation: 0,
                    },
                    "NORTH": {
                        topo: "IN-OUT",
                        rotation: 90,
                    },
                    "WEST": {
                        topo: "IN-OUT",
                        rotation: 180,
                    },
                    // "SOUTH": {
                    //     topo: "IN-OUT",
                    //     rotation: -90,
                    // },
                },
                signal: false,
                stopSign: true,
                crosswalk: true
            },
            {
                id: "J_3",
                center: {
                    x: 4000,
                    y: 1000
                },
                roadList: {
                    // "EAST": {
                    //     topo: "IN-OUT",
                    //     rotation: 0,
                    // },
                    "NORTH": {
                        topo: "IN-OUT",
                        rotation: 90,
                    },
                    "WEST": {
                        topo: "IN-OUT",
                        rotation: 180,
                    },
                    // "SOUTH": {
                    //     topo: "IN-OUT",
                    //     rotation: -90,
                    // },
                },
                signal: true,
                stopSign: false,
                crosswalk: true
            },
            {
                id: "J_4",
                center: {
                    x: 1000,
                    y: 2000
                },
                roadList: {
                    "EAST": {
                        topo: "IN-OUT",
                        rotation: 0,
                    },
                    "NORTH": {
                        topo: "IN-OUT",
                        rotation: 90,
                    },
                    // "WEST": {
                    //     topo: "IN-OUT",
                    //     rotation: 180,
                    // },
                    "SOUTH": {
                        topo: "IN-OUT",
                        rotation: -90,
                    },
                },
                signal: false,
                stopSign: true,
                crosswalk: true
            },
            {
                id: "J_5",
                center: {
                    x: 2000,
                    y: 2000
                },
                roadList: {
                    "EAST": {
                        topo: "IN-OUT",
                        rotation: 0,
                    },
                    "NORTH": {
                        topo: "IN-OUT",
                        rotation: 90,
                    },
                    "WEST": {
                        topo: "IN-OUT",
                        rotation: 180,
                    },
                    "SOUTH": {
                        topo: "IN-OUT",
                        rotation: -90,
                    },
                },
                signal: false,
                stopSign: true,
                crosswalk: true
            },
            {
                id: "J_6",
                center: {
                    x: 3000,
                    y: 2000
                },
                roadList: {
                    "EAST": {
                        topo: "IN-OUT",
                        rotation: 0,
                    },
                    "NORTH": {
                        topo: "IN-OUT",
                        rotation: 90,
                    },
                    "WEST": {
                        topo: "IN-OUT",
                        rotation: 180,
                    },
                    "SOUTH": {
                        topo: "IN-OUT",
                        rotation: -90,
                    },
                },
                signal: true,
                stopSign: false,
                crosswalk: true
            },
            {
                id: "J_7",
                center: {
                    x: 4000,
                    y: 2000
                },
                roadList: {
                    // "EAST": {
                    //     topo: "IN-OUT",
                    //     rotation: 0,
                    // },
                    "NORTH": {
                        topo: "IN-OUT",
                        rotation: 90,
                    },
                    "WEST": {
                        topo: "IN-OUT",
                        rotation: 180,
                    },
                    "SOUTH": {
                        topo: "IN-OUT",
                        rotation: -90,
                    },
                },
                signal: false,
                stopSign: true,
                crosswalk: true
            },
            {
                id: "J_8",
                center: {
                    x: 1000,
                    y: 3000
                },
                roadList: {
                    "EAST": {
                        topo: "IN-OUT",
                        rotation: 0,
                    },
                    // "NORTH": {
                    //     topo: "IN-OUT",
                    //     rotation: 90,
                    // },
                    // "WEST": {
                    //     topo: "IN-OUT",
                    //     rotation: 180,
                    // },
                    "SOUTH": {
                        topo: "IN-OUT",
                        rotation: -90,
                    },
                },
                signal: true,
                stopSign: false,
                crosswalk: true
            },
            {
                id: "J_9",
                center: {
                    x: 2000,
                    y: 3000
                },
                roadList: {
                    "EAST": {
                        topo: "IN-OUT",
                        rotation: 0,
                    },
                    // "NORTH": {
                    //     topo: "IN-OUT",
                    //     rotation: 90,
                    // },
                    "WEST": {
                        topo: "IN-OUT",
                        rotation: 180,
                    },
                    "SOUTH": {
                        topo: "IN-OUT",
                        rotation: -90,
                    },
                },
                signal: true,
                stopSign: false,
                crosswalk: true
            },
            {
                id: "J_10",
                center: {
                    x: 3000,
                    y: 3000
                },
                roadList: {
                    "EAST": {
                        topo: "IN-OUT",
                        rotation: 0,
                    },
                    // "NORTH": {
                    //     topo: "IN-OUT",
                    //     rotation: 90,
                    // },
                    "WEST": {
                        topo: "IN-OUT",
                        rotation: 180,
                    },
                    "SOUTH": {
                        topo: "IN-OUT",
                        rotation: -90,
                    },
                },
                signal: false,
                stopSign: true,
                crosswalk: true
            },
            {
                id: "J_11",
                center: {
                    x: 4000,
                    y: 3000
                },
                roadList: {
                    // "EAST": {
                    //     topo: "IN-OUT",
                    //     rotation: 0,
                    // },
                    // "NORTH": {
                    //     topo: "IN-OUT",
                    //     rotation: 90,
                    // },
                    "WEST": {
                        topo: "IN-OUT",
                        rotation: 180,
                    },
                    "SOUTH": {
                        topo: "IN-OUT",
                        rotation: -90,
                    },
                },
                signal: true,
                stopSign: false,
                crosswalk: true
            },
        ],
        roadList: []
    }
};
const mapGenerator = new MapGeneratorManual(config);

const map = mapGenerator.generate();

fs.writeFileSync("./base_map.bin", map.serializeBinary());
fs.writeFileSync("./base_map.json", JSON.stringify(map.toObject()));
fs.writeFileSync("./sim_map.bin", map.serializeBinary());
