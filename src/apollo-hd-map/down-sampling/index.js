require("../common/setup");

const fs = require("fs");
const Maps = require("../protobuf_out/modules/map/proto/map_pb");
const Graphs = require("../protobuf_out/modules/routing/proto/topo_graph_pb");

const Graph = require("../common/ApolloHDMap/Graph");
const {initJunctionGroups} = require("../common/ApolloHDMap/JunctionGroup");
const {pointDist} = require("../common/ApolloHDMap/Geometry");

const baseMapBin = process.argv[2];
const routingMapBin = process.argv[3];

let mapData = fs.readFileSync(baseMapBin);
mapData = Maps.Map.deserializeBinary(mapData);

let graphData = fs.readFileSync(routingMapBin);
graphData = Graphs.Graph.deserializeBinary(graphData);

const graph = new Graph("original_graph").init(graphData.toObject(), mapData.toObject());

const junctionGroups = initJunctionGroups(graph);

console.log(junctionGroups);

// select junction from each junction group

let junctionSelectionList = [];

const junctionList = graph.getJunctionList().filter(junction => junction.junctionGroup);

junctionList.forEach(centerJunction => {
    const junctionSelection = {
        centerJunction,
        otherJunctionList: [],
        totalDistance: 0
    };
    const remainingJunctionGroups = junctionGroups.filter(jg => jg.id !== centerJunction.junctionGroup.id);
    remainingJunctionGroups.forEach(jg => {
        let selectedJunction = junctionList[0];
        let minDistance = null;

        jg.getJunctionList().forEach(j => {
            const dist = pointDist(j.getPolygonCenter(), centerJunction.getPolygonCenter());
            if (minDistance === null || minDistance > dist) {
                minDistance = dist;
                selectedJunction = j;
            }
        });

        junctionSelection.otherJunctionList.push(selectedJunction);
        junctionSelection.totalDistance += minDistance;
    });

    junctionSelectionList.push(junctionSelection);
});

const finalJunctionSelection = junctionSelectionList.sort((a, b) => a.totalDistance - b.totalDistance)[0];

const jList = [finalJunctionSelection.centerJunction, ...finalJunctionSelection.otherJunctionList];
const jIDSet = new Set(jList.map(j => j.id));

let cwIDSet = new Set();
jList.forEach(j => j.getCrosswalkList().forEach(cw => cwIDSet.add(cw.id)));

let laneIDSet = new Set();
jList.forEach(j => j.getLaneList().forEach(jLane => {
    laneIDSet.add(jLane.id);
    jLane.getIncomingLaneList().forEach(inLane => laneIDSet.add(inLane.id));
    jLane.getOutgoingLaneList().forEach(inLane => laneIDSet.add(inLane.id));
}));

// let roadIdSet = new Set();
// jList.forEach(j => {
//     j.getIncomingList().filter(r => r.constructor.name === "Road").forEach(r => roadIdSet.add(r.id));
//     j.getOutgoingList().filter(r => r.constructor.name === "Road").forEach(r => roadIdSet.add(r.id));
// });

let signalIDSet = new Set();
jList.forEach(j => j.getSignalList().forEach(s => signalIDSet.add(s.id)));

let stopSignIdSet = new Set();
jList.forEach(j => j.getStopSignList().forEach(s => stopSignIdSet.add(s.id)));

const mapDataObject = mapData.toObject();

function fixCrosswalkId(mapDataObject) {
    console.log(mapDataObject);
    mapDataObject.crosswalkList.forEach((crosswalk, index) => {
        if (!crosswalk.id) {
            crosswalk.id = {id: `CW_${index}`};
        }
    });
}

fixCrosswalkId(mapDataObject);

const newMapDataObject = {
    header: mapDataObject.header,
    junctionList: mapDataObject.junctionList.filter(j => jIDSet.has(j.id.id)),
    crosswalkList: mapDataObject.crosswalkList.filter(cw => cwIDSet.has(cw.id.id)),
    laneList: mapDataObject.laneList.filter(l => laneIDSet.has(l.id.id)),
    stopSignList: mapDataObject.stopSignList.filter(s => stopSignIdSet.has(s.id.id)),
    signalList: mapDataObject.signalList.filter(s => signalIDSet.has(s.id.id)),
    // roadList: mapDataObject.roadList.filter(r => roadIdSet.has(r.id.id))
};

const newMap = Maps.Map.fromObject(newMapDataObject);

console.log(newMap);

fs.writeFileSync(baseMapBin.replace(".bin", "-new.bin"), newMap.serializeBinary());
