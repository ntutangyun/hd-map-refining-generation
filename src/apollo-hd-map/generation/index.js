require("../common/setup");

const graphData = require("../../../data/apollo/san_francisco_routing_map.json");
const mapData = require("../../../data/apollo/san_francisco_base_map.json");

const Graph = require("../common/ApolloHDMap/Graph");
const graph = new Graph("san_francisco_roadonly");

graph.init(graphData, mapData);

const JunctionFeatureExtractor = require("./FeatureExtractors/JunctionFeatureExtractor");
const junctionFeatureExtractor = new JunctionFeatureExtractor(graph);

junctionFeatureExtractor.computeRoadTopoGroups();

console.log(junctionFeatureExtractor);