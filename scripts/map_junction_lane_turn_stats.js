require("../src/apollo-hd-map/common/setup");
const fs = require("fs");

// const mapName = "san_francisco";
// const graphData = require(`../data/apollo/${mapName}_routing_map.json`);
// const mapData = require(`../data/apollo/${mapName}_base_map.json`);

const mapName = "test";
const graphData = require(`/home/tangyun/Desktop/apollo/modules/map/data/test/routing_map.json`);
const mapData = require(`/home/tangyun/Desktop/apollo/modules/map/data/test/base_map.json`);

// parse hd map data
const Graph = require("../src/apollo-hd-map/common/ApolloHDMap/Graph");
const graph = new Graph(mapName);
graph.init(graphData, mapData);

// all stop signs of san francisco map are of type 0
const turns = new Set();
graph.getLaneList().filter(lane => lane.junction !== null).forEach(lane => {
    turns.add(lane.turn);
});

console.log(turns);