require("../../common/setup");

const MapGenerator = require("../MapGenerator");

const config = {
    hd_map_header_path: "../common/hd_map_header.json",
    junction_samples: require("./junction_samples"),
    curveSampleCount: 100
};

const mapGenerator = new MapGenerator(config);

const map = mapGenerator.generate();

const fs = require("fs");

fs.writeFileSync("./map_with_junction_samples.bin", map.serializeBinary());



