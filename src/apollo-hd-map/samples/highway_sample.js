const fs = require("fs");
const path = require("path");

let config = require("../lib/global.config.json");
global.ApolloTestingLib = (localPath) => require(path.join(config.ApolloTestingLibPath, localPath));
global.ApolloTestingLib("common/setup");

const MapGeneratorManual = require("../lib/Generators/MapGeneratorManual");
const {Point} = global.ApolloTestingLib("common/ApolloHDMap/Geometry");
const {degreeToRad} = global.ApolloTestingLib("common/mathUtils");

// height:
// horizontal way: 30
// ramps: 15
// vertical way: 0

config = {
    ...config,
    hd_map_header: global.ApolloTestingLib("common/hd_map_header.json"),
    curveSampleCount: 20,
    autoLinkRoadLane: true,
    enable3D: true,
    manual: {
        junctionList: [],
        roadList: [
            {
                // horizontal main road
                id: "R_h0",
                startPoint: new Point(0, 0, 30),
                startHeading: degreeToRad(0),
                endPoint: new Point(200, 0, 30),
                endHeading: degreeToRad(0),
                forwardLaneCount: 3,
                backwardLaneCount: 3
            },
            {
                // horizontal main road
                id: "R_h1",
                startPoint: new Point(200, 0, 30),
                startHeading: degreeToRad(0),
                endPoint: new Point(500 - 3.5 - 30, 0, 30),
                endHeading: degreeToRad(0),
                forwardLaneCount: 2,
                backwardLaneCount: 2
            },
            {
                // horizontal main road
                id: "R_h2",
                startPoint: new Point(500 - 3.5 - 30, 0, 30),
                startHeading: degreeToRad(0),
                endPoint: new Point(500 + 3.5 + 30, 0, 30),
                endHeading: degreeToRad(0),
                forwardLaneCount: 2,
                backwardLaneCount: 2
            },
            {
                // horizontal main road
                id: "R_h3",
                startPoint: new Point(500 + 3.5 + 30, 0, 30),
                startHeading: degreeToRad(0),
                endPoint: new Point(800, 0, 30),
                endHeading: degreeToRad(0),
                forwardLaneCount: 2,
                backwardLaneCount: 2
            },
            {
                // horizontal main road
                id: "R_h4",
                startPoint: new Point(800, 0, 30),
                startHeading: degreeToRad(0),
                endPoint: new Point(1000, 0, 30),
                endHeading: degreeToRad(0),
                forwardLaneCount: 3,
                backwardLaneCount: 3
            },
            {
                // vertical main road
                id: "R_v0",
                startPoint: new Point(500, -500, 0),
                startHeading: degreeToRad(90),
                endPoint: new Point(500, -300, 0),
                endHeading: degreeToRad(90),
                forwardLaneCount: 3,
                backwardLaneCount: 3
            },
            {
                // vertical main road
                id: "R_v1",
                startPoint: new Point(500, -300, 0),
                startHeading: degreeToRad(90),
                endPoint: new Point(500, -33.5, 0),
                endHeading: degreeToRad(90),
                forwardLaneCount: 2,
                backwardLaneCount: 2
            },
            {
                // vertical main road
                id: "R_v2",
                startPoint: new Point(500, -33.5, 0),
                startHeading: degreeToRad(90),
                endPoint: new Point(500, 33.5, 0),
                endHeading: degreeToRad(90),
                forwardLaneCount: 2,
                backwardLaneCount: 2
            },
            {
                // vertical main road
                id: "R_v3",
                startPoint: new Point(500, 33.5, 0),
                startHeading: degreeToRad(90),
                endPoint: new Point(500, 300, 0),
                endHeading: degreeToRad(90),
                forwardLaneCount: 2,
                backwardLaneCount: 2
            },
            {
                // vertical main road
                id: "R_v4",
                startPoint: new Point(500, 300, 0),
                startHeading: degreeToRad(90),
                endPoint: new Point(500, 500, 0),
                endHeading: degreeToRad(90),
                forwardLaneCount: 3,
                backwardLaneCount: 3
            },
            {
                // ramp
                id: "Ramp_v0_h4_0",
                startPoint: new Point(507, -300, 0),
                startHeading: degreeToRad(90),
                endPoint: new Point(556.53, -101, 10),
                endHeading: degreeToRad(60),
                startOffsetRatio: 0.3,
                endOffsetRatio: 0.3,
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                // ramp
                id: "Ramp_v0_h4_1",
                startPoint: new Point(556.53, -101, 10),
                startHeading: degreeToRad(60),
                endPoint: new Point(673.85, -20.73, 20),
                endHeading: degreeToRad(15),
                startOffsetRatio: 0.3,
                endOffsetRatio: 0.3,
                // endPoint: new Point(800, -7, 0),
                // endHeading: degreeToRad(0),
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                // ramp
                id: "Ramp_v0_h4_2",
                startPoint: new Point(673.85, -20.73, 20),
                startHeading: degreeToRad(15),
                startOffsetRatio: 0.3,
                endOffsetRatio: 0.3,
                endPoint: new Point(800, -7, 30),
                endHeading: degreeToRad(0),
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                // ramp
                id: "Ramp_h0_v0",
                startPoint: new Point(200, -7, 30),
                startHeading: degreeToRad(0),
                startOffsetRatio: 0.5,
                endOffsetRatio: 0.5,
                endPoint: new Point(493, -300, 0),
                endHeading: degreeToRad(-90),
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                // ramp
                id: "Ramp_h2_v2_0",
                startPoint: new Point(530 + 3.5, -3.5, 30),
                startHeading: degreeToRad(0),
                startOffsetRatio: 0.7,
                endOffsetRatio: 0.7,
                endPoint: new Point(530 + 3.5, -63.5, 10),
                endHeading: degreeToRad(180),
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                // ramp
                id: "Ramp_h2_v2_1",
                startOffsetRatio: 0.4,
                endOffsetRatio: 0.4,
                startPoint: new Point(530 + 3.5, -63.5, 10),
                startHeading: degreeToRad(180),
                endPoint: new Point(503.5, -33.5, 0),
                endHeading: degreeToRad(90),
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                // ramp
                id: "Ramp_h4_v4",
                startOffsetRatio: 0.5,
                endOffsetRatio: 0.5,
                startPoint: new Point(800, 7, 30),
                startHeading: degreeToRad(180),
                endPoint: new Point(507, 300, 0),
                endHeading: degreeToRad(90),
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                id: "Ramp_v4_h0_0",
                startOffsetRatio: 0.3,
                endOffsetRatio: 0.3,
                startPoint: new Point(500 - 7, 300, 0),
                startHeading: degreeToRad(-90),
                endPoint: new Point(476, 183.2, 10),
                endHeading: degreeToRad(-110),
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                id: "Ramp_v4_h0_1",
                startOffsetRatio: 0.3,
                endOffsetRatio: 0.3,
                startPoint: new Point(476, 183.2, 10),
                startHeading: degreeToRad(-110),
                endPoint: new Point(500 - 114.73, 43.46, 20),
                endHeading: degreeToRad(-150),
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                id: "Ramp_v4_h0_2",
                startOffsetRatio: 0.3,
                endOffsetRatio: 0.3,
                startPoint: new Point(500 - 114.73, 43.46, 20),
                startHeading: degreeToRad(-150),
                endPoint: new Point(200, 7, 30),
                endHeading: degreeToRad(180),
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                // ramp
                id: "Ramp_h2_v2_2",
                startOffsetRatio: 0.7,
                endOffsetRatio: 0.7,
                startPoint: new Point(500 - 3.5 - 30, 3.5, 30),
                startHeading: degreeToRad(180),
                endPoint: new Point(500 - 3.5 - 30, 3.5 + 60, 10),
                endHeading: degreeToRad(0),
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                // ramp
                id: "Ramp_h2_v2_3",
                startOffsetRatio: 0.4,
                endOffsetRatio: 0.4,
                startPoint: new Point(500 - 3.5 - 30, 3.5 + 60, 10),
                startHeading: degreeToRad(0),
                endPoint: new Point(500 - 3.5, 3.5 + 30, 0),
                endHeading: degreeToRad(-90),
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                // ramp
                id: "Ramp_v0_h0_0",
                startPoint: new Point(556.53, -101, 10),
                startHeading: degreeToRad(60),
                endPoint: new Point(500 - 114.73, 43.46, 20),
                endHeading: degreeToRad(-150),
                startOffsetRatio: 0.6,
                endOffsetRatio: 0.6,
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                // ramp
                id: "Ramp_v4_h4_0 ",
                startPoint: new Point(476, 183.2, 0),
                startHeading: degreeToRad(-110),
                endPoint: new Point(557.36, 47.85, 0),
                endHeading: degreeToRad(-45),
                startOffsetRatio: 0.5,
                endOffsetRatio: 0.5,
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                // ramp
                id: "Ramp_v4_h4_1",
                startPoint: new Point(557.36, 47.85, 0),
                startHeading: degreeToRad(-45),
                endPoint: new Point(673.85, -20.73, 0),
                endHeading: degreeToRad(15),
                startOffsetRatio: 0.5,
                endOffsetRatio: 0.5,
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
        ]
    }
};
const mapGenerator = new MapGeneratorManual(config);

const map = mapGenerator.generate();

fs.writeFileSync(path.join("C:\\Users\\Tang Yun\\Desktop", "base_map.bin"), map.serializeBinary());
fs.writeFileSync(path.join("C:\\Users\\Tang Yun\\Desktop", "base_map.json"), JSON.stringify(map.toObject()));
fs.writeFileSync(path.join("C:\\Users\\Tang Yun\\Desktop", "sim_map.bin"), map.serializeBinary());
