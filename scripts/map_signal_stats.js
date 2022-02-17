require("../src/apollo-hd-map/common/setup");
const fs = require("fs");

const mapName = "san_francisco";

// read existing hd map data
const graphData = require(`../data/apollo/${mapName}_routing_map.json`);
const mapData = require(`../data/apollo/${mapName}_base_map.json`);

// parse hd map data
const Graph = require("../src/apollo-hd-map/common/ApolloHDMap/Graph");
const graph = new Graph(mapName);
graph.init(graphData, mapData);

console.log(graph);

// signal types of san francisco are all type 5 --> max 3 vertical
console.log(graph.getSignalList().filter(signal => signal.type !== 5));

// all signals have stop lines.
console.log(graph.getSignalList().filter(signal => {
    return !signal.hasOwnProperty(`stopLineList`) || signal.stopLineList.length === 0;
}));

// all signals have no sign info.
console.log(graph.getSignalList().filter(signal => {
    return signal.hasOwnProperty(`signInfoList`) && signal.signInfoList.length > 0;
}));

// sub-signal types -- all sub-signal types are 2 --> circle
console.log(graph.getSignalList().filter(signal => {
    return Object.values(signal.subSignalList).some(ss => ss.type !== 2);
}));
