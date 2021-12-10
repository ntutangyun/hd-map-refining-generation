const fs = require("fs");
const Maps = require("./protobuf_out/modules/map/proto/map_pb");
const Graphs = require("./protobuf_out/modules/routing/proto/topo_graph_pb");

const Graph = require("./common/ApolloHDMap/Graph");
const {initJunctionGroups} = require("./common/ApolloHDMap/JunctionGroup");

const baseMapBin = process.argv[2];
const routingMapBin = process.argv[3];

let mapData = fs.readFileSync(baseMapBin);
mapData = Maps.Map.deserializeBinary(mapData);

let graphData = fs.readFileSync(routingMapBin);
graphData = Graphs.Graph.deserializeBinary(graphData);

const graph = new Graph("original_graph").init(graphData.toObject(), mapData.toObject());

const junctionGroups = initJunctionGroups(graph);

console.log(junctionGroups);