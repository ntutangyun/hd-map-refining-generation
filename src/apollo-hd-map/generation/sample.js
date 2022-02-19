require("../common/setup");
const fs = require("fs");

// const mapName = "san_francisco";
//
// // read existing hd map data
// const graphData = require(`../../../data/apollo/${mapName}_routing_map.json`);
// const mapData = require(`../../../data/apollo/${mapName}_base_map.json`);
//
// // parse hd map data
// const Graph = require("../common/ApolloHDMap/Graph");
// const graph = new Graph(mapName);
// graph.init(graphData, mapData);
//
// // extract junction feature vectors
// const JunctionFeatureExtractor = require("./FeatureEngineering/JunctionFeatureExtractor");
//
// // cluster junction based on their topology and geometry feature
// const junctionClusters = JunctionFeatureExtractor.junctionTopoGeoClustering(graph);
//
// const {buildGridLayout} = require("./FeatureEngineering/GridLayout/JunctionLayoutGrid");
// const junctionGrid = buildGridLayout(graph, junctionClusters);

const {JunctionGrid} = require("./FeatureEngineering/GridLayout/JunctionGrid");
const MapGeneratorGrid = require("./Generators/MapGeneratorGrid");
const {getDirectionAngle} = require("./FeatureEngineering/GridLayout/JunctionGridUtils");

const junctionGrid = new JunctionGrid();
junctionGrid.addPoint(1, 0);
junctionGrid.addPoint(2, 0);
junctionGrid.addPoint(1, 1);
junctionGrid.addPoint(0, 1);
junctionGrid.addPoint(-1, 0);
junctionGrid.addPoint(0, -1);
junctionGrid.addPoint(1, -1);


const signalJunctionPoint = junctionGrid.getPointByLocation(0, 0);
signalJunctionPoint.junctionCluster = {};
signalJunctionPoint.EAST = {topo: "IN-OUT", rotation: getDirectionAngle("EAST")};
signalJunctionPoint.NORTH = {topo: "IN-OUT", rotation: getDirectionAngle("NORTH")};
signalJunctionPoint.WEST = {topo: "IN-OUT", rotation: getDirectionAngle("WEST")};
signalJunctionPoint.SOUTH = {topo: "IN-OUT", rotation: getDirectionAngle("SOUTH")};

signalJunctionPoint.eastSignal = true;
signalJunctionPoint.northSignal = true;
signalJunctionPoint.westSignal = true;
signalJunctionPoint.southSignal = true;

signalJunctionPoint.eastStopSign = false;
signalJunctionPoint.northStopSign = false;
signalJunctionPoint.westStopSign = false;
signalJunctionPoint.southStopSign = false;

signalJunctionPoint.eastCrosswalk = true;
signalJunctionPoint.northCrosswalk = true;
signalJunctionPoint.westCrosswalk = true;
signalJunctionPoint.southCrosswalk = true;

const stopSignJunctionPoint = junctionGrid.getPointByLocation(1, 0);
stopSignJunctionPoint.junctionCluster = {};
stopSignJunctionPoint.EAST = {topo: "IN-OUT", rotation: getDirectionAngle("EAST")};
stopSignJunctionPoint.NORTH = {topo: "IN-OUT", rotation: getDirectionAngle("NORTH")};
stopSignJunctionPoint.WEST = {topo: "IN-OUT", rotation: getDirectionAngle("WEST")};
stopSignJunctionPoint.SOUTH = {topo: "IN-OUT", rotation: getDirectionAngle("SOUTH")};

stopSignJunctionPoint.eastSignal = false;
stopSignJunctionPoint.northSignal = false;
stopSignJunctionPoint.westSignal = false;
stopSignJunctionPoint.southSignal = false;

stopSignJunctionPoint.eastStopSign = true;
stopSignJunctionPoint.northStopSign = true;
stopSignJunctionPoint.westStopSign = true;
stopSignJunctionPoint.southStopSign = true;

stopSignJunctionPoint.eastCrosswalk = true;
stopSignJunctionPoint.northCrosswalk = true;
stopSignJunctionPoint.westCrosswalk = true;
stopSignJunctionPoint.southCrosswalk = true;

const config = {
    hd_map_header: require("../common/hd_map_header.json"), curveSampleCount: 20
};
const mapGenerator = new MapGeneratorGrid(config, junctionGrid);

const map = mapGenerator.generate();

fs.writeFileSync("./base_map.bin", map.serializeBinary());
fs.writeFileSync("./base_map.json", JSON.stringify(map.toObject()));
fs.writeFileSync("./sim_map.bin", map.serializeBinary());
//
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
