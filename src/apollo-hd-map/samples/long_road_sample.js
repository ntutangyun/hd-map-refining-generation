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
        junctionList: [],
        roadList: [
            {
                id: "R_1",
                startPoint: new Point(100, 0, 0),
                startHeading: degreeToRad(0),
                endPoint: new Point(1000, 0, 0),
                endHeading: degreeToRad(0),
                forwardLaneCount: 4,
                backwardLaneCount: 0,
                forwardSpeedLimit: 3,
                backwardSpeedLimit: 3
            }
        ]
    }
};
const mapGenerator = new MapGeneratorManual(config);

const map = mapGenerator.generate();

fs.writeFileSync("./base_map.bin", map.serializeBinary());
fs.writeFileSync("./base_map.json", JSON.stringify(map.toObject()));
fs.writeFileSync("./sim_map.bin", map.serializeBinary());
