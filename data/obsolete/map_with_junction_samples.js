require("../../common/setup");

const MapGenerator = require("../Generators/MapGenerator");

const config = require("./map_with_junction_samples.json");

const mapGenerator = new MapGenerator(config);

const map = mapGenerator.generate();

const fs = require("fs");

fs.writeFileSync("./map_with_junction_samples.bin", map.serializeBinary());



