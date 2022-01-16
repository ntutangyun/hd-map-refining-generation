require("../common/setup");

// read existing hd map data
const graphData = require("../../../data/apollo/san_francisco_routing_map.json");
const mapData = require("../../../data/apollo/san_francisco_base_map.json");

// parse hd map data
const Graph = require("../common/ApolloHDMap/Graph");
const graph = new Graph("san_francisco_roadonly");
graph.init(graphData, mapData);

// extract junction feature vectors
const JunctionFeatureExtractor = require("./FeatureEngineering/JunctionFeatureExtractor");

// cluster junctions based on their road topology feature vector
const roadTopoGroupList = JunctionFeatureExtractor.computeRoadTopoGroups(graph);

// sample new junction configurations including road socket information using the clustering results.
const JunctionConfigSampler = require("./FeatureEngineering/JunctionConfigSampler");
const junctionConfigs = JunctionConfigSampler.sampleJunctionConfigsFromRoadTopoGroups(graph, roadTopoGroupList);

console.log(junctionConfigs);