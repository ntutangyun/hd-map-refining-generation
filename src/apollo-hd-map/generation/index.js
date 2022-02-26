require("../common/setup");
const fs = require("fs");

const mapName = "shalun";

// read existing hd map data
const graphData = require(`../../../data/apollo/${mapName}_routing_map.json`);
const mapData = require(`../../../data/apollo/${mapName}_base_map.json`);

// parse hd map data
const Graph = require("../common/ApolloHDMap/Graph");
const graph = new Graph(mapName);
graph.init(graphData, mapData);

// extract junction feature vectors
const {junctionFeatureMergeExtraction} = require("./FeatureEngineering/JunctionFeatureExtractor");
const {combinatorialSampling} = require("./SamplingTechniques/CombinatorialSampling");

// cluster junction based on their topology and geometry feature
const mergedFeatures = junctionFeatureMergeExtraction(graph);

const junctionConfigs = combinatorialSampling(mergedFeatures);

const {buildGridLayoutFromJunctionConfigs} = require("./FeatureEngineering/GridLayout/JunctionGridBuilder");
const junctionGrid = buildGridLayoutFromJunctionConfigs(graph, junctionConfigs);

const MapGeneratorGrid = require("./Generators/MapGeneratorGrid");
const config = {
    hd_map_header: require("../common/hd_map_header.json"), curveSampleCount: 20
};
const mapGenerator = new MapGeneratorGrid(config, junctionGrid);

const map = mapGenerator.generate();

fs.writeFileSync("./base_map.bin", map.serializeBinary());
fs.writeFileSync("./base_map.json", JSON.stringify(map.toObject()));
fs.writeFileSync("./sim_map.bin", map.serializeBinary());

// // sample new junction configurations including road socket information using the clustering results.
// const JunctionConfigSampler = require("./FeatureEngineering/JunctionConfigSampler");
// const junction_samples = JunctionConfigSampler.sampleJunctionConfigsFromRoadTopoGroups(graph, roadTopoGroupList, 1);
//
// console.log(junction_samples);
//
// const MapGenerator = require("./Generators/MapGenerator");
//

//
// fs.writeFileSync("./index.config.json", JSON.stringify(config));
//
// const mapGenerator = new MapGenerator(config);
//
// const map = mapGenerator.generate();
//
