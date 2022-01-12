const mapBinaryPath = "../data/apollo/san_francisco_base_map.bin";
const routingBinaryPath = "../data/apollo/san_francisco_routing_map.bin";

const MapProto = require("../src/apollo-hd-map/protobuf_out/modules/map/proto/map_pb");
const RoutingProto = require("../src/apollo-hd-map/protobuf_out/modules/routing/proto/topo_graph_pb");

const fs = require("fs");

const mapData = fs.readFileSync(mapBinaryPath);
const map = MapProto.Map.deserializeBinary(mapData);
fs.writeFileSync(mapBinaryPath.replace(".bin", ".json"), JSON.stringify(map.toObject()));

const routingData = fs.readFileSync(routingBinaryPath);
const routing = RoutingProto.Graph.deserializeBinary(routingData);
fs.writeFileSync(routingBinaryPath.replace(".bin", ".json"), JSON.stringify(routing.toObject()));