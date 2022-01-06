const mapBinaryPath = "../data/apollo/san_francisco_base_map.bin";

const MapProto = require("../protobuf_out/modules/map/proto/map_pb");

const fs = require("fs");

const mapData = fs.readFileSync(mapBinaryPath);

const map = MapProto.Map.deserializeBinary(mapData);

console.log(map);

fs.writeFileSync(mapBinaryPath.replace(".bin", ".json"), JSON.stringify(map.toObject()));