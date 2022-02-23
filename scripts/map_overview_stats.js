require("../src/apollo-hd-map/common/setup");

const mapName = "san_francisco";

// read existing hd map data
const graphData = require(`../data/apollo/${mapName}_routing_map.json`);
const mapData = require(`../data/apollo/${mapName}_base_map.json`);

// parse hd map data
const Graph = require("../src/apollo-hd-map/common/ApolloHDMap/Graph");
const graph = new Graph(mapName);
graph.init(graphData, mapData);

console.log(`junction count: ${graph.getJunctionList().length}`);
console.log(`junction count: ${graph.getJunctionList().filter(j => j.getSignalList().length > 0).length}`);
console.log(`junction count: ${graph.getJunctionList().filter(j => j.getStopSignList().length > 0).length}`);

console.log(`roads: ${graph.getRoadList().filter(r => !r.junction).length}`);

console.log(`lanes: ${graph.getLaneList().length}`);
console.log(`J lanes: ${graph.getLaneList().filter(l => l.junction).length}`);
console.log(`road lanes: ${graph.getLaneList().filter(l => !l.junction).length}`);