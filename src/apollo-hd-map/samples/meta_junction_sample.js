const fs = require("fs");
const path = require("path");

let config = require("../lib/global.config.json");
global.ApolloTestingLib = (localPath) => require(path.join(config.ApolloTestingLibPath, localPath));
global.ApolloTestingLib("common/setup");

const MapGeneratorManual = require("../lib/Generators/MapGeneratorManual");
const {Point} = global.ApolloTestingLib("common/ApolloHDMap/Geometry");
const {degreeToRad} = global.ApolloTestingLib("common/mathUtils");
config = {
    ...config,
    hd_map_header: global.ApolloTestingLib("common/hd_map_header.json"),
    curveSampleCount: 20,
    manual: {
        // junctionList: [
        //     {
        //         id: "J_0",
        //         center: {
        //             x: 1000,
        //             y: 1000
        //         },
        //         roadList: {
        //             "EAST": {
        //                 topo: "IN-OUT",
        //                 rotation: 0,
        //             },
        //             "EAST-NORTH": {
        //                 topo: "IN-OUT",
        //                 rotation: 72,
        //             },
        //             "WEST-NORTH": {
        //                 topo: "IN-OUT",
        //                 rotation: 144,
        //             },
        //             "WEST-SOUTH": {
        //                 topo: "IN-OUT",
        //                 rotation: -144,
        //             },
        //             "SOUTH": {
        //                 topo: "IN-OUT",
        //                 rotation: -72,
        //             }
        //         },
        //         signal: true,
        //         stopSign: false,
        //         crosswalk: true
        //     },
        //     {
        //         id: "J_1",
        //         center: {
        //             x: 1100,
        //             y: 1100
        //         },
        //         roadList: {
        //             "A": {
        //                 topo: "IN",
        //                 rotation: 0,
        //             },
        //             "B": {
        //                 topo: "OUT",
        //                 rotation: 90,
        //             },
        //             "C": {
        //                 topo: "IN-OUT",
        //                 rotation: -150,
        //             },
        //         },
        //         signal: true,
        //         stopSign: false,
        //         crosswalk: true
        //     },
        // ],
        junctionList: [],
        roadList: [
            {
                id: "R_100",
                startPoint: new Point(900, 900, 0),
                startHeading: degreeToRad(45),
                endPoint: new Point(925, 925, 0),
                endHeading: degreeToRad(45),
                forwardLaneCount: 2,
                backwardLaneCount: 1
            },
            {
                id: "R_101",
                startPoint: new Point(925, 925, 0),
                startHeading: degreeToRad(45),
                endPoint: new Point(950, 925, 0),
                endHeading: degreeToRad(-45),
                forwardLaneCount: 2,
                backwardLaneCount: 1
            },
            {
                id: "R_102",
                startPoint: new Point(950, 925, 0),
                startHeading: degreeToRad(-45),
                endPoint: new Point(950, 875, 0),
                endHeading: degreeToRad(-135),
                forwardLaneCount: 2,
                backwardLaneCount: 1
            },
            {
                id: "R_103",
                startPoint: new Point(950, 875, 0),
                startHeading: degreeToRad(-135),
                endPoint: new Point(925, 875, 0),
                endHeading: degreeToRad(135),
                forwardLaneCount: 2,
                backwardLaneCount: 1
            },
            {
                id: "R_104",
                startPoint: new Point(925, 875, 0),
                startHeading: degreeToRad(135),
                endPoint: new Point(915, 880, 0),
                endHeading: degreeToRad(-170),
                forwardLaneCount: 2,
                backwardLaneCount: 1
            },
            {
                id: "R_105",
                startPoint: new Point(915, 880, 0),
                startHeading: degreeToRad(-170),
                endPoint: new Point(900, 900, 0),
                endHeading: degreeToRad(45),
                forwardLaneCount: 2,
                backwardLaneCount: 1
            },
        ]
    }
};
const mapGenerator = new MapGeneratorManual(config);

const map = mapGenerator.generate();

fs.writeFileSync("./base_map.bin", map.serializeBinary());
fs.writeFileSync("./base_map.json", JSON.stringify(map.toObject()));
fs.writeFileSync("./sim_map.bin", map.serializeBinary());
