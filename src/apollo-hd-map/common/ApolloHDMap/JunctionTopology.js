/*
Junction Topology
     select one in road, use that as the starting point, circle around in anti-clockwise direction,
     if it’s in-road, and has 3 outs, then push +3 to the topo vector.
     If it’s out road and has 2 In, push a -2 to the topo vector.
     When comparing topo vectors, compare length then make one circle around.
 */

const {angleBetween, vector} = require("./Geometry");

function analyzeJunctionTopoVector(junction) {
    // {
    //      road: road_id,
    //      angle: relative vector angle to first road,
    //      inout: 2 / -3 etc.  (positive for in roads, negative for out roads)
    // }
    let roadList = [];

    // get reference vector
    // assume junction geometry is convex. here use junction polygon center as origin.
    const origin = junction.getPolygonCenter();
    // select one incoming road as reference road
    const inRoads = junction.getIncomingList();
    if (inRoads.length === 0) {
        console.warn(`junction ${junction.id} has no incoming roads`);
        console.log(junction);
        return;
    }
    const refRoad = junction.getIncomingList()[0];
    const refVector = vector(origin, refRoad.getRoadTailCenter());

    junction.getIncomingList().forEach(inRoad => {
        const outRoads = {};

        const roadLanes = inRoad.getLaneList();

        const jLanes = {};
        roadLanes.forEach(rLane => {
            rLane.getOutgoingLaneList().forEach(l => {
                if (l.getParent().id === junction.id) {
                    jLanes[l.id] = l;
                }
            });
        });

        Object.values(jLanes).forEach(jLane => {
            jLane.getOutgoingLaneList().forEach(outLane => {
                if (outLane.road !== null) {
                    outRoads[outLane.road.id] = outLane.road;
                }
            });
        });

        let angle = 0;
        if (inRoad.id !== refRoad.id) {
            angle = angleBetween(refVector, vector(origin, inRoad.getRoadTailCenter())) / Math.PI * 180;
        }

        roadList.push({
            road: inRoad,
            angle: angle,
            inout: Object.values(outRoads).length,
        });
    });

    junction.getOutgoingList().forEach(outRoad => {
        const inRoads = {};

        const roadLanes = outRoad.getLaneList();

        const jLanes = {};
        roadLanes.forEach(rLane => {
            rLane.getIncomingLaneList().forEach(l => {
                if (l.getParent().id === junction.id) {
                    jLanes[l.id] = l;
                }
            });
        });

        Object.values(jLanes).forEach(jLane => {
            jLane.getIncomingLaneList().forEach(inLane => {
                if (inLane.road !== null) {
                    inRoads[inLane.road.id] = inLane.road;
                }
            });
        });

        let angle = 0;
        if (outRoad.id !== refRoad.id) {
            angle = angleBetween(refVector, vector(origin, outRoad.getRoadHeadCenter())) / Math.PI * 180;
        }

        roadList.push({
            road: outRoad,
            angle: angle,
            inout: -Object.values(inRoads).length,
        });
    });

    roadList.sort((a, b) => a.angle - b.angle);

    junction.topoVector = roadList.map(r => r.inout);
    junction.topoRoadList = roadList;
}

function getTopologyComplexity(junction) {
    const inRoadTrees = [];

    junction.getIncomingList().forEach(inRoad => {
        junction.getOutgoingList().forEach(outRoad => {

            let matchedJLanes = {};

            junction.getLaneList().forEach(jLane => {
                const inLanes = jLane.getIncomingLaneList();
                const outLanes = jLane.getOutgoingLaneList();

                let inMatched = false;
                let outMatched = false;

                inLanes.forEach(inLane => {
                    if (inLane.road !== null) {
                        if (inLane.road.id === inRoad.id) {
                            inMatched = true;
                        }
                    }
                });

                outLanes.forEach(outLane => {
                    if (outLane.road !== null) {
                        if (outLane.road.id === outRoad.id) {
                            outMatched = true;
                        }
                    }
                });

                if (inMatched && outMatched) {
                    matchedJLanes[jLane.id] = jLane;
                }
            });

            if (Object.values(matchedJLanes).length > 0) {
                inRoadTrees.push({
                    inLaneCount: inRoad.getLaneList().length,
                    junctionLaneCount: Object.values(matchedJLanes).length,
                    outLaneCount: outRoad.getLaneList().length
                });
            }
        });
    });

    // console.log(`Junction ${junction.id} in road trees for topo Complexity:`);
    // console.log(inRoadTrees);

    let maxInLane = 0;
    let maxJLane = 0;
    let maxOutLane = 0;

    inRoadTrees.forEach(tree => {
        maxInLane = tree.inLaneCount > maxInLane ? tree.inLaneCount : maxInLane;
        maxJLane = tree.junctionLaneCount > maxJLane ? tree.junctionLaneCount : maxJLane;
        maxOutLane = tree.outLaneCount > maxOutLane ? tree.outLaneCount : maxOutLane;
    });

    junction.topoComplexity = {
        maxInLane: maxInLane,
        maxJLane: maxJLane,
        maxOutLane: maxOutLane
    };
}

module.exports = {
    getTopologyComplexity,
    analyzeJunctionTopoVector
};