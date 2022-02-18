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

const overlapList = mapData.overlapList;

const overlaps_with_signals = overlapList.filter(overlap => {
    const id = overlap.id.id;

    if (!id.includes("signal") || !id.includes("lane")) {
        return false;
    }
    return true;
});

// all lane signal overlap -> isMerge is false
const overlaps_with_signal_merge = overlapList.filter(overlap => {
    const id = overlap.id.id;

    if (!id.includes("signal") || !id.includes("lane")) {
        return false;
    }

    const laneObject = overlap.objectList[0];
    const signalObject = overlap.objectList[1];

    if (!laneObject.laneOverlapInfo.isMerge) {
        return false;
    }

    return true;
});

// there is no overlap with outgoing lanes. all incoming lanes to the signal junction
const overlaps_with_outgoing_road_lanes = overlapList.map(overlap => {
    const id = overlap.id.id;

    if (!id.includes("signal") || !id.includes("lane")) {
        return null;
    }

    const laneObject = overlap.objectList[0];
    const signalObject = overlap.objectList[1];

    const lane = graph.getLaneById(laneObject.id.id);
    const signal = graph.getSignalById(signalObject.id.id);

    if (lane.junction !== null) {
        return null;
    }

    const junction = signal.junction;
    if (!lane.getOutgoingLaneList().some(outLane => !junction.laneList.hasOwnProperty(outLane.id))) {
        return null;
    }

    return {
        signal: graph.getSignalById(signalObject.id.id),
        lane,
        laneOffset: {
            startS: laneObject.laneOverlapInfo.startS - lane.length,
            endS: laneObject.laneOverlapInfo.endS - lane.length,
        },
        isMerge: laneObject.laneOverlapInfo.isMerge
    };
}).filter(o => o !== null);


const overlaps_with_road_lanes = overlapList.map(overlap => {
    const id = overlap.id.id;

    if (!id.includes("signal") || !id.includes("lane")) {
        return null;
    }

    const laneObject = overlap.objectList[0];
    const signalObject = overlap.objectList[1];

    const lane = graph.getLaneById(laneObject.id.id);

    if (lane.junction !== null) {
        return null;
    }

    return {
        signal: graph.getSignalById(signalObject.id.id),
        lane,
        laneOffset: {
            startS: laneObject.laneOverlapInfo.startS - lane.length,
            endS: laneObject.laneOverlapInfo.endS - lane.length,
        },
        isMerge: laneObject.laneOverlapInfo.isMerge
    };
}).filter(o => o !== null);
console.log(overlaps_with_road_lanes);

// let roadLaneMin = null;
// let roadLaneStartSMin = Number.POSITIVE_INFINITY;
// let roadLaneEndSMax = Number.NEGATIVE_INFINITY;
//
// let junctionLaneStartSMinNoCross = Number.POSITIVE_INFINITY;
// let junctionLaneEndSMaxNoCross = Number.NEGATIVE_INFINITY;
//
// let junctionLaneStartSMinCross = Number.POSITIVE_INFINITY;
// let junctionLaneEndSMaxCross = Number.NEGATIVE_INFINITY;
//
// overlapList.forEach(overlap => {
//         const id = overlap.id.id;
//
//         if (!id.includes("signal") || !id.includes("lane")) {
//             return null;
//         }
//
//         const laneObject = overlap.objectList[0];
//         const signalObject = overlap.objectList[1];
//
//         const lane = graph.getLaneById(laneObject.id.id);
//
//         if (lane.junction !== null) {
//             if (lane.enterCrosswalk !== null) {
//                 junctionLaneStartSMinCross = Math.min(junctionLaneStartSMinCross, laneObject.laneOverlapInfo.startS);
//                 junctionLaneEndSMaxCross = Math.max(junctionLaneEndSMaxCross, laneObject.laneOverlapInfo.endS);
//             } else {
//                 junctionLaneStartSMinNoCross = Math.min(junctionLaneStartSMinNoCross, laneObject.laneOverlapInfo.startS);
//                 junctionLaneEndSMaxNoCross = Math.max(junctionLaneEndSMaxNoCross, laneObject.laneOverlapInfo.endS);
//             }
//         } else {
//             roadLaneStartSMin = Math.min(roadLaneStartSMin, laneObject.laneOverlapInfo.startS - lane.length);
//             roadLaneEndSMax = Math.max(roadLaneEndSMax, laneObject.laneOverlapInfo.endS - lane.length);
//
//             if (roadLaneMin === null || roadLaneStartSMin === (laneObject.laneOverlapInfo.startS - lane.length)) {
//                 roadLaneMin = lane;
//             }
//         }
//     }
// );

let roadLaneMin = null;
let roadLaneStartSMin = Number.POSITIVE_INFINITY;
let roadLaneEndSMax = Number.NEGATIVE_INFINITY;

let junctionLaneStartSMinNoCross = Number.POSITIVE_INFINITY;
let junctionLaneEndSMaxNoCross = Number.NEGATIVE_INFINITY;

let junctionLaneStartSMinCross = Number.POSITIVE_INFINITY;
let junctionLaneEndSMaxCross = Number.NEGATIVE_INFINITY;

overlapList.forEach(overlap => {
        const id = overlap.id.id;

        if (!id.includes("stop_sign") || !id.includes("lane")) {
            return null;
        }

        const laneObject = overlap.objectList[0];
        const stopSignObject = overlap.objectList[1];

        const lane = graph.getLaneById(laneObject.id.id);

        if (lane.junction !== null) {
            if (lane.enterCrosswalk !== null) {
                junctionLaneStartSMinCross = Math.min(junctionLaneStartSMinCross, laneObject.laneOverlapInfo.startS);
                junctionLaneEndSMaxCross = Math.max(junctionLaneEndSMaxCross, laneObject.laneOverlapInfo.endS);
            } else {
                junctionLaneStartSMinNoCross = Math.min(junctionLaneStartSMinNoCross, laneObject.laneOverlapInfo.startS);
                junctionLaneEndSMaxNoCross = Math.max(junctionLaneEndSMaxNoCross, laneObject.laneOverlapInfo.endS);
            }
        } else {
            roadLaneStartSMin = Math.min(roadLaneStartSMin, laneObject.laneOverlapInfo.startS - lane.length);
            roadLaneEndSMax = Math.max(roadLaneEndSMax, laneObject.laneOverlapInfo.endS - lane.length);

            if (roadLaneMin === null || roadLaneStartSMin === (laneObject.laneOverlapInfo.startS - lane.length)) {
                roadLaneMin = lane;
            }
        }
    }
);

console.log("");