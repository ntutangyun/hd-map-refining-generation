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
                id: "J_1",
                center: {
                    x: 1100,
                    y: 1100
                },
                roadList: {
                    "A": {
                        topo: "IN",
                        rotation: 0,
                    },
                    "B": {
                        topo: "OUT",
                        rotation: 90,
                    },
                    "C": {
                        topo: "IN-OUT",
                        rotation: -150,
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
