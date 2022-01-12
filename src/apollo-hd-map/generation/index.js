const graphData = require("../../../data/apollo/san_francisco_routing_map.json");
const mapData = require("../../../data/apollo/san_francisco_base_map.json");

const Graph = require("../common/ApolloHDMap/Graph");

const graph = new Graph("san_francisco_roadonly");

graph.init(graphData, mapData);

console.log(mapData.roadList.filter(road => road.sectionList[0].laneIdList.map(id => id.id).includes("lane_1516")));

console.log(graph);