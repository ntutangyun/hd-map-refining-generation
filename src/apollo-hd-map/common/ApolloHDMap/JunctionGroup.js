const {analyzeJunctionTopoVector, analyzeJunctionFeatureVector} = require("./JunctionTopology");

function rotateArray(arr, n) {
    let res = [...arr];
    let len = arr.length >>> 0, // convert to uint
        count = n >> 0; // convert to int

    // convert n to value in range [0, len)
    count = ((count % len) + len) % len;
    Array.prototype.push.apply(res, Array.prototype.splice.call(res, 0, count));
    return res;
}


function compareJunctionTopoVec(vec1, vec2) {
    if (vec1.length !== vec2.length) {
        return false;
    }

    let matched = false;
    for (let i = 0; i < vec1.length; i++) {
        let rotatedVec = rotateArray(vec2, i);
        let rotMatched = true;
        for (let j = 0; j < vec1.length; j++) {
            if (vec1[j] !== rotatedVec[j]) {
                rotMatched = false;
                break;
            }
        }
        if (rotMatched) {
            matched = true;
            break;
        }
    }

    return matched;
}

function compareFeatureVector(vec1, vec2) {
    return vec1.hasStopSign === vec2.hasStopSign &&
        vec1.hasSignal === vec2.hasSignal &&
        vec1.hasCrosswalk === vec2.hasCrosswalk;
}

function initJunctionGroups(graph) {
    if (graph === null) {
        return null;
    }

    // select valid junctions without lane errors.
    const junctionList = graph.getJunctionList().filter(j => j.valid).filter(j => j.getSignalList().length > 0);
    if (junctionList.length === 0) {
        return;
    }

    junctionList.forEach(j => {
        analyzeJunctionTopoVector(j);
        analyzeJunctionFeatureVector(j);
    });

    const junctionGroups = [];

    junctionList.forEach(junction => {
        let junctionAdded = false;

        for (const group of junctionGroups) {
            if (group.addJunction(junction)) {
                junctionAdded = true;
                break;
            }
        }

        if (!junctionAdded) {
            const newGroup = new JunctionGroup(junction);
            junctionGroups.push(newGroup);
        }
    });

    return junctionGroups;
}


class JunctionGroup {
    constructor(firstJunction) {
        this.id = `JG--${firstJunction.id.replace("J_", "")}`;
        this.junctionList = {};
        this.junctionList[firstJunction.id] = firstJunction;
        this.topoVector = firstJunction.topoVector;
        this.featureVector = firstJunction.featureVector;

        firstJunction.junctionGroup = this;
    }

    addJunction(junction) {
        if (this.junctionList.hasOwnProperty(junction.id)) {
            return true;
        }

        if (!compareJunctionTopoVec(junction.topoVector, this.topoVector)) {
            return false;
        }

        if (!compareFeatureVector(this.featureVector, junction.featureVector)) {
            return false;
        }

        // add junction
        this.junctionList[junction.id] = junction;
        junction.junctionGroup = this;
        return true;
    }

    getJunctionList() {
        return Object.values(this.junctionList);
    }

    selectJunction(random = true) {
        if (random) {
            return this.getJunctionList().random();
        }

        return this.getJunctionList()[0];
    }
}


module.exports = {
    initJunctionGroups
};