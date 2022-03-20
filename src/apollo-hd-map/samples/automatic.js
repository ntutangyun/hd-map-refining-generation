const fs = require("fs");
const path = require("path");
let config = require("../lib/global.config.json");

global.ApolloTestingLib = (localPath) => require(path.join(config.ApolloTestingLibPath, localPath));
global.ApolloTestingLib("common/setup");

const {buildGridLayoutFromJunctionConfigs} = require("../lib/FeatureEngineering/GridLayout/JunctionGridBuilder");
const {extractMapFeature, mergeMapFeature} = require("../lib/FeatureEngineering/JunctionFeatureExtractor");
const {combinatorialSampling} = require("../lib/SamplingTechniques/CombinatorialSampling");

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
    const Graph = global.ApolloTestingLib("common/ApolloHDMap/Graph");
    const graph = new Graph(mapName);
    graph.init(graphData, mapData);

    const mapFeatures = extractMapFeature(graph);
    mergeMapFeature(mergedFeatures, mapFeatures);
});

const junctionConfigs = combinatorialSampling(mergedFeatures);

const junctionGrid = buildGridLayoutFromJunctionConfigs(junctionConfigs);

const MapGeneratorGrid = require("../lib/Generators/MapGeneratorGrid");
config = {
    ...config,
    hd_map_header: global.ApolloTestingLib("common/hd_map_header.json"),
    curveSampleCount: 20
};
const mapGenerator = new MapGeneratorGrid(config, junctionGrid);

const map = mapGenerator.generate();

fs.writeFileSync("./base_map.bin", map.serializeBinary());
fs.writeFileSync("./base_map.json", JSON.stringify(map.toObject()));
fs.writeFileSync("./sim_map.bin", map.serializeBinary());