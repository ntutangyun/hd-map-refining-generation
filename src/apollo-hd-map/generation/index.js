require("../common/setup");
const fs = require("fs");

const {buildGridLayoutFromJunctionConfigs} = require("./FeatureEngineering/GridLayout/JunctionGridBuilder");
const {extractMapFeature, mergeMapFeature} = require("./FeatureEngineering/JunctionFeatureExtractor");
const {combinatorialSampling} = require("./SamplingTechniques/CombinatorialSampling");

const mapList = [
    "san_francisco",
    "shalun",
    "go_mentum"
];

const mergedFeatures = {
    roadFeatures: new Set(),
    geoFeatures: {
        EAST: {
            min: 0, max: 0
        }, NORTH: {
            min: 0, max: 0
        }, WEST: {
            min: 0, max: 0
        }, SOUTH: {
            min: 0, max: 0
        }
    },
    rotFeature: {},
    controlFeatures: new Set(),
    auxiliaryFeatures: new Set()
};

mapList.forEach(mapName => {

    // read existing hd map data
    const graphData = require(`../../../data/apollo/${mapName}_routing_map.json`);
    const mapData = require(`../../../data/apollo/${mapName}_base_map.json`);

    // parse hd map data
    const Graph = require("../common/ApolloHDMap/Graph");
    const graph = new Graph(mapName);
    graph.init(graphData, mapData);

    const mapFeatures = extractMapFeature(graph);
    mergeMapFeature(mergedFeatures, mapFeatures);
});

const junctionConfigs = combinatorialSampling(mergedFeatures);

const junctionGrid = buildGridLayoutFromJunctionConfigs(junctionConfigs);

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
