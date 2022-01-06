require("../common/setup");

const MapGenerator = require("./MapGenerator");

const config = {
    hd_map_header_path: "./hd_map_header.json",
    road_sample: {
        startPoint: {
            x: 1000,    // east,
            y: 1000,    // north
            z: 0        // altitude
        },
        startHeading: 0, // east to north in degrees
        endPoint: {
            x: 1500,
            y: 1000,
            z: 0
        },
        endHeading: 0
    }
};

const mapGenerator = new MapGenerator(config);

const map = mapGenerator.generate();

console.log(map);

const fs = require("fs");

fs.writeFileSync("./index.bin", map.serializeBinary());



