require("../common/setup");
const fs = require("fs");

const mapName = "san_francisco";

// read existing hd map data
const graphData = require(`../../../data/apollo/${mapName}_routing_map.json`);
const mapData = require(`../../../data/apollo/${mapName}_base_map.json`);

// parse hd map data
const Graph = require("../common/ApolloHDMap/Graph");
const graph = new Graph(mapName);
graph.init(graphData, mapData);

// extract junction feature vectors
const JunctionFeatureExtractor = require("./FeatureEngineering/JunctionFeatureExtractor");
const {buildFreeSpaceLayout} = require("./FeatureEngineering/JunctionLayoutFreespace");

// // cluster junction based on their topology and geometry feature
const junctionClusters = JunctionFeatureExtractor.junctionTopoGeoClustering(graph);
console.log(junctionClusters);

const freeSpaceLayout = buildFreeSpaceLayout(junctionClusters);

//
// // cluster junctions based on their road topology feature vector
// const roadTopoGroupList = JunctionFeatureExtractor.computeRoadTopoGroups(graph);
//
// const {buildGridLayout} = require("./FeatureEngineering/JunctionLayoutGrid");
// const junctionGrid = buildGridLayout(graph, roadTopoGroupList);
//
// const MapGeneratorGrid = require("./Generators/MapGeneratorGrid");
// const config = {
//     hd_map_header: require("../common/hd_map_header.json"),
//     curveSampleCount: 20
// };
// const mapGenerator = new MapGeneratorGrid(config, junctionGrid);
//
// const map = mapGenerator.generate();
//
// // console.log(map);
//
// fs.writeFileSync("./base_map.bin", map.serializeBinary());
// fs.writeFileSync("./base_map.json", JSON.stringify(map.toObject()));
// fs.writeFileSync("./sim_map.bin", map.serializeBinary());

//
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
