require("../common/setup");
const fs = require("fs");

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
const junction_samples = JunctionConfigSampler.sampleJunctionConfigsFromRoadTopoGroups(graph, roadTopoGroupList);

console.log(junction_samples);

const MapGenerator = require("./Generators/MapGenerator");

const config = {
    hd_map_header: require("../common/hd_map_header.json"),
    junction_samples,
    curveSampleCount: 100
};

fs.writeFileSync("./index.json", JSON.stringify(config));

const mapGenerator = new MapGenerator(config);

const map = mapGenerator.generate();

fs.writeFileSync("./index.bin", map.serializeBinary());
