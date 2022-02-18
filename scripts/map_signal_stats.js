require("../src/apollo-hd-map/common/setup");
const fs = require("fs");

const mapName = "san_francisco";

// read existing hd map data
const graphData = require(`../data/apollo/${mapName}_routing_map.json`);
const mapData = require(`../data/apollo/${mapName}_base_map.json`);

// parse hd map data
const Graph = require("../src/apollo-hd-map/common/ApolloHDMap/Graph");
const graph = new Graph(mapName);
graph.init(graphData, mapData);

// all stop signs of san francisco map are of type 0
console.log(graph.getStopSignList().filter(stopSign => stopSign.type !== 0));