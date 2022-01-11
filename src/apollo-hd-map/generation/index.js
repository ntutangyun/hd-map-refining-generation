require("../common/setup");

const MapGenerator = require("./MapGenerator");

const config = {
    hd_map_header_path: "../common/hd_map_header.json",
    junction_samples: require("./obsolete/junction_samples"),
    curveSampleCount: 100
};

const mapGenerator = new MapGenerator(config);

const map = mapGenerator.generate();

const fs = require("fs");

fs.writeFileSync("./index.bin", map.serializeBinary());



