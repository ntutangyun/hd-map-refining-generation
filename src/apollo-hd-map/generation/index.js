const graphData = require("../common/ApolloHDMap/jsons/routing_maps/san_francisco_roadonly.json");
const mapData = require("../common/ApolloHDMap/jsons/base_maps/san_francisco_roadonly.json");

const Graph = require("../common/ApolloHDMap/Graph");

const graph = new Graph("san_francisco_roadonly");

graph.init(graphData, mapData);

console.log(graph);