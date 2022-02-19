require("../src/apollo-hd-map/common/setup");
const fs = require("fs");

// const mapName = "san_francisco";
// const graphData = require(`../data/apollo/${mapName}_routing_map.json`);
// const mapData = require(`../data/apollo/${mapName}_base_map.json`);

const mapName = "sample";
const graphData = require(`/home/tangyun/Desktop/apollo/modules/map/data/sample/routing_map.json`);
const mapData = require(`/home/tangyun/Desktop/apollo/modules/map/data/sample/base_map.json`);

// // parse hd map data
// const Graph = require("../src/apollo-hd-map/common/ApolloHDMap/Graph");
// const graph = new Graph(mapName);
// graph.init(graphData, mapData);
//
// const roadList = graph.getRoadList();

console.log(mapData);

const errorRoads = mapData.roadList.filter(road => {
    const boundaryEdgeList = road.sectionList[0].boundary.outerPolygon.edgeList;
    for (const curve of boundaryEdgeList) {
        if (curve.curve.segmentList[0].lineSegment.pointList.some(p => p.y < 8000)) {
            return true;
        }
    }
    return false;
});

console.log(errorRoads);

