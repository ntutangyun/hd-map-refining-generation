const fs = require("fs");
const path = require("path");

let config = require("../lib/global.config.json");
global.ApolloTestingLib = (localPath) => require(path.join(config.ApolloTestingLibPath, localPath));
global.ApolloTestingLib("common/setup");

const MapGeneratorManual = require("../lib/Generators/MapGeneratorManual");
const {Point, BezierCurve} = global.ApolloTestingLib("common/ApolloHDMap/Geometry");
const {degreeToRad} = global.ApolloTestingLib("common/mathUtils");


config = {
    ...config,
    hd_map_header: global.ApolloTestingLib("common/hd_map_header.json"),
    curveSampleCount: 20,
    manual: {
        junctionList: [],
        roadList: [
            {
                // horizontal main road
                id: "R_h0",
                startPoint: new Point(0, 0, 0),
                startHeading: degreeToRad(0),
                endPoint: new Point(200, 0, 0),
                endHeading: degreeToRad(0),
                forwardLaneCount: 3,
                backwardLaneCount: 3
            },
            {
                // horizontal main road
                id: "R_h1",
                startPoint: new Point(200, 0, 0),
                startHeading: degreeToRad(0),
                endPoint: new Point(800, 0, 0),
                endHeading: degreeToRad(0),
                forwardLaneCount: 2,
                backwardLaneCount: 3
            },
            {
                // horizontal main road
                id: "R_h2",
                startPoint: new Point(800, 0, 0),
                startHeading: degreeToRad(0),
                endPoint: new Point(1000, 0, 0),
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
                endPoint: new Point(500, 300, 0),
                endHeading: degreeToRad(90),
                forwardLaneCount: 2,
                backwardLaneCount: 2
            },
            {
                // ramp
                id: "Ramp_v0_h2_0",
                startPoint: new Point(507, -300, 0),
                startHeading: degreeToRad(90),
                endPoint: new Point(556.53, -101, 0),
                endHeading: degreeToRad(60),
                startOffsetRatio: 0.3,
                endOffsetRatio: 0.3,
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                // ramp
                id: "Ramp_v0_h2_1",
                startPoint: new Point(556.53, -101, 0),
                startHeading: degreeToRad(60),
                endPoint: new Point(614.73, -43.46, 0),
                endHeading: degreeToRad(30),
                startOffsetRatio: 0.3,
                endOffsetRatio: 0.3,
                // endPoint: new Point(800, -7, 0),
                // endHeading: degreeToRad(0),
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                // ramp
                id: "Ramp_v0_h2_2",
                startPoint: new Point(614.73, -43.46, 0),
                startHeading: degreeToRad(30),
                startOffsetRatio: 0.3,
                endOffsetRatio: 0.3,
                endPoint: new Point(800, -7, 0),
                endHeading: degreeToRad(0),
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                // ramp
                id: "Ramp_h0_v0_0",
                startPoint: new Point(200, -7, 0),
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
                id: "Ramp_h1_v1_0",
                startPoint: new Point(503.5 + 30, -3.5, 0),
                startHeading: degreeToRad(0),
                startOffsetRatio: 0.7,
                endOffsetRatio: 0.7,
                endPoint: new Point(503.5 + 30, -63.5, 0),
                endHeading: degreeToRad(180),
                forwardLaneCount: 1,
                backwardLaneCount: 0
            },
            {
                // ramp
                id: "Ramp_h1_v1_1",
                startOffsetRatio: 0.5,
                endOffsetRatio: 0.5,
                startPoint: new Point(503.5 + 30, -63.5, 0),
                startHeading: degreeToRad(180),
                endPoint: new Point(503.5, -33.5, 0),
                endHeading: degreeToRad(90),
                forwardLaneCount: 1,
                backwardLaneCount: 0
            }
        ]
    }
};
const mapGenerator = new MapGeneratorManual(config);

const map = mapGenerator.generate();

fs.writeFileSync(path.join("C:\\Users\\Tang Yun\\Desktop", "base_map.bin"), map.serializeBinary());
fs.writeFileSync(path.join("C:\\Users\\Tang Yun\\Desktop", "base_map.json"), JSON.stringify(map.toObject()));
fs.writeFileSync(path.join("C:\\Users\\Tang Yun\\Desktop", "sim_map.bin"), map.serializeBinary());
