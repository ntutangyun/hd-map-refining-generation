const fs = require("fs");
const path = require("path");
const mapBinaryPath = "/home/tangyun/Desktop/apollo/modules/map/data/highway101GLE/base_map.bin";
const routingBinaryPath = "/home/tangyun/Desktop/apollo/modules/map/data/highway101GLE/routing_map.bin";

let config = require("../src/apollo-hd-map/lib/global.config.json");
global.ApolloTestingLib = (localPath) => require(path.join(config.ApolloTestingLibPath, localPath));
global.ApolloTestingLib("common/setup");

const MapProto = global.ApolloTestingLib("protobuf_out/modules/map/proto/map_pb");
const RoutingProto = global.ApolloTestingLib("protobuf_out/modules/routing/proto/topo_graph_pb");

const mapData = fs.readFileSync(mapBinaryPath);
const map = MapProto.Map.deserializeBinary(mapData);
fs.writeFileSync(mapBinaryPath.replace(".bin", ".json"), JSON.stringify(map.toObject()));

const routingData = fs.readFileSync(routingBinaryPath);
const routing = RoutingProto.Graph.deserializeBinary(routingData);
fs.writeFileSync(routingBinaryPath.replace(".bin", ".json"), JSON.stringify(routing.toObject()));