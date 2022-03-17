require("../../../ApolloTestingCommon/common/setup");
const fs = require("fs");

const {JunctionGrid} = require("../../src/apollo-hd-map/generation/FeatureEngineering/GridLayout/JunctionGrid");
const MapGeneratorGrid = require("../../src/apollo-hd-map/generation/Generators/MapGeneratorGrid");
const {getDirectionAngle} = require("../../src/apollo-hd-map/generation/FeatureEngineering/GridLayout/JunctionGridUtils");

const junctionGrid = new JunctionGrid();
junctionGrid.addPoint(1, 0);
junctionGrid.addPoint(2, 0);
junctionGrid.addPoint(1, 1);
junctionGrid.addPoint(0, 1);
junctionGrid.addPoint(-1, 0);
junctionGrid.addPoint(0, -1);
junctionGrid.addPoint(1, -1);


const signalJunctionPoint = junctionGrid.getPointByLocation(0, 0);
signalJunctionPoint.junctionConfig = {};
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
stopSignJunctionPoint.junctionConfig = {};
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
    hd_map_header: require("../../../ApolloTestingCommon/common/hd_map_header.json"), curveSampleCount: 20
};
const mapGenerator = new MapGeneratorGrid(config, junctionGrid);

const map = mapGenerator.generate();

fs.writeFileSync("./base_map.bin", map.serializeBinary());
fs.writeFileSync("./base_map.json", JSON.stringify(map.toObject()));
fs.writeFileSync("./sim_map.bin", map.serializeBinary());