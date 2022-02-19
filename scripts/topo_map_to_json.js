const routingBinaryPath = "/home/tangyun/Desktop/apollo/modules/map/data/test/routing_map.bin";

const RoutingProto = require("../src/apollo-hd-map/protobuf_out/modules/routing/proto/topo_graph_pb");

const fs = require("fs");

const routingData = fs.readFileSync(routingBinaryPath);
const routing = RoutingProto.Graph.deserializeBinary(routingData);
fs.writeFileSync(routingBinaryPath.replace(".bin", ".json"), JSON.stringify(routing.toObject()));