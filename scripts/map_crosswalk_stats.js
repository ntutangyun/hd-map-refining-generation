require("../src/apollo-hd-map/common/setup");
const fs = require("fs");

const mapName = "san_francisco";

// read existing hd map data
const graphData = require(`../data/apollo/${mapName}_routing_map.json`);
const mapData = require(`../data/apollo/${mapName}_base_map.json`);

// parse hd map data
const Graph = require("../src/apollo-hd-map/common/ApolloHDMap/Graph");
const {pointDist} = require("../src/apollo-hd-map/common/ApolloHDMap/Geometry");
const graph = new Graph(mapName);
graph.init(graphData, mapData);

console.log(graph);

const crosswalkList = graph.getCrosswalkList();

console.log(crosswalkList);

let minSegLength = Number.POSITIVE_INFINITY;

crosswalkList.forEach(crosswalk => {
    const pointList = crosswalk.pointList;
    const pointListRotate = [...pointList];
    pointListRotate.rotate(1);

    for (let i = 0; i < pointList.length; i++) {
        const segLen = pointDist(pointList[i], pointListRotate[i]);
        minSegLength = Math.min(minSegLength, segLen);
    }
});

console.log(minSegLength);

console.log(pointDist({x: 553322.7422749038, y: 4183227.976318213}, {x: 553317.8268085952, y: 4183222.306274268}));