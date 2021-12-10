const JunctionLanePair = require("./JunctionLanePair");
const {analyzeJunctionTopoVector} = require("./JunctionTopology");


function computeJLaneIntersectVector(junction) {
    const jLanes = junction.getLaneList();

    const topoRoadList = junction.topoRoadList;

    jLanes.forEach(jLane => {
        const incomingRoad = jLane.getIncomingRoad();
        if (incomingRoad === null) {
            return;
        }

        let topoRoadListCopy = [...topoRoadList];
        let inRoadIndex = 0;
        for (let i = 0; i < topoRoadListCopy.length; i++) {
            if (topoRoadListCopy[i].road.id === incomingRoad.id) {
                inRoadIndex = i;
                break;
            }
        }

        topoRoadListCopy.rotate(inRoadIndex);
        const roadIndexLib = {};
        for (let i = 0; i < topoRoadListCopy.length; i++) {
            roadIndexLib[topoRoadListCopy[i].road.id] = topoRoadListCopy[i].inout >= 0 ? i : -i;
        }

        // const counter = {};
        jLane.intersectVector = {};
        Object.values({...jLane.intersectLaneList, ...jLane.sameEndLaneList})
            .forEach(intersectLane => {
                const inRoad = intersectLane.getIncomingRoad();
                const outRoad = intersectLane.getOutgoingRoad();

                if (inRoad === null || outRoad === null) {
                    return;
                }

                const inRoadIndex = roadIndexLib[inRoad.id];
                const outRoadIndex = roadIndexLib[outRoad.id];

                const intersectKey = `${inRoadIndex}=>${outRoadIndex}`;
                // if (!counter[intersectKey]) {
                //     counter[intersectKey] = [];
                // }
                // counter[intersectKey].push(intersectLane);

                jLane.intersectVector[intersectKey] = intersectLane;
                const newLanePair = new JunctionLanePair(junction, jLane, intersectLane, intersectKey).init();
                jLane.jLanePairs[newLanePair.id] = newLanePair;
            });

        // Object.keys(counter).forEach(key => {
        //     const newKey = `${key}:${counter[key].length}`;
        //     jLane.intersectVector[newKey] = counter[key].length;
        // });
    });
}

function initJunctionLaneGroups(graph) {
    if (graph === null) {
        return null;
    }

    // select valid signal-controlled junctions without lane errors.
    const junctionList = graph.getJunctionList().filter(j => j.valid).filter(j => j.getSignalList().length > 0);
    if (junctionList.length === 0) {
        return;
    }

    junctionList.forEach(j => {
        analyzeJunctionTopoVector(j);
        computeJLaneIntersectVector(j);
    });

    const jLaneGroups = {};

    let junctionLaneBlacklist = [];
    if (global.configs.map["junctionLaneBlacklist"]) {
        junctionLaneBlacklist = global.configs.map["junctionLaneBlacklist"];
    }

    // add/create junction Lane Pair groups
    junctionList.forEach(junction => {
        let jLanes = junction.getLaneList().filter(jLane => Object.keys(jLane.intersectVector).length > 0);

        jLanes = jLanes.filter(l => {
            if (junctionLaneBlacklist.includes(l.id)) {
                console.log(`removing: ${l.id}`);
                return false;
            }
            return true;
        });

        jLanes.forEach(jLane => {
            let laneAdded = false;

            for (const group of Object.values(jLaneGroups)) {
                if (group.addJLane(jLane)) {
                    laneAdded = true;
                    break;
                }
            }

            if (!laneAdded) {
                const newGroup = new JunctionLaneGroup(jLane);
                jLaneGroups[newGroup.id] = newGroup;
            }
        });
    });

    // each group select one junction lane for testing
    Object.values(jLaneGroups).forEach(group => group.selectJLane());

    // analyze junction groups relationships. superset, subset.
    const groupList = Object.values(jLaneGroups);
    for (let i = 0; i < groupList.length - 1; i++) {
        for (let j = i + 1; j < groupList.length; j++) {
            JunctionLaneGroup.compareJLaneGroups(groupList[i], groupList[j]);
        }
    }

    return jLaneGroups;
}


class JunctionLaneGroup {
    constructor(firstJLane) {
        this.id = `JLG--${firstJLane.id.replace("lane_", "")}`;
        this.jLaneList = {};
        this.jLaneList[firstJLane.id] = firstJLane;
        this.intersectVector = firstJLane.intersectVector;

        this.selectedJLane = null;

        this.supersets = {};
        this.subsets = {};
    }

    hasSupersets() {
        return Object.keys(this.supersets).length > 0;
    }

    hasSubsets() {
        return Object.keys(this.subsets).length > 0;
    }

    addJLane(jLane) {
        if (this.jLaneList.hasOwnProperty(jLane.id)) {
            return true;
        }

        if (!this.compareIntersectVector(jLane.intersectVector)) {
            return false;
        }

        // add jLane
        this.jLaneList[jLane.id] = jLane;
        return true;
    }

    selectJLane(jLane = null) {
        if (jLane) {
            this.selectedJLane = jLane;
            return;
        }

        if (global.configs.map["randomSelectPerJLG"]) {
            this.selectedJLane = Object.values(this.jLaneList).random();
            return;
        }

        const jLaneList = Object.values(this.jLaneList);
        jLaneList.sort((a, b) => {
            const aLanePairs = Object.values(a.jLanePairs);

            const aEgoStartLength = aLanePairs[0].egoStartLane.length;

            const bLanePairs = Object.values(b.jLanePairs);
            const bEgoStartLength = bLanePairs[0].egoStartLane.length;

            return bEgoStartLength - aEgoStartLength;
        });

        this.selectedJLane = jLaneList[0];
    }

    addSubset(g) {
        this.subsets[g.id] = g;
    }

    addSuperset(g) {
        this.supersets[g.id] = g;
    }

    compareIntersectVector(vec) {
        const keys1 = Object.keys(this.intersectVector);
        const keys2 = Object.keys(vec);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (const key1 of keys1) {
            if (!vec.hasOwnProperty(key1)) {
                return false;
            }
        }

        for (const key2 of keys2) {
            if (!this.intersectVector.hasOwnProperty(key2)) {
                return false;
            }
        }
        return true;
    }

    static compareJLaneGroups(g1, g2) {
        const vec1 = {...g1.intersectVector};
        const vec2 = {...g2.intersectVector};

        const combinedKeys = {...vec1, ...vec2};

        Object.keys(combinedKeys).forEach(key => {
            if (vec1.hasOwnProperty(key) && vec2.hasOwnProperty(key)) {
                delete vec1[key];
                delete vec2[key];
            }
        });

        let g1Remains = Object.keys(vec1).length > 0;
        let g2Remains = Object.keys(vec2).length > 0;

        if (g1Remains && g2Remains) {
            return;
        }

        if (g1Remains && !g2Remains) {
            g1.addSubset(g2);
            g2.addSuperset(g1);
            return;
        }

        if (!g1Remains && g2Remains) {
            g1.addSuperset(g2);
            g2.addSubset(g1);
            return;
        }

        console.error(`${g1.id} and ${g2.id} has same intersect vector. Something isn't right.`);
    }
}

module.exports = {
    computeJLaneIntersectVector,
    initJunctionLaneGroups,
    JunctionLaneGroup
};