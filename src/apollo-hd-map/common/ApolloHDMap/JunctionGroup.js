const {analyzeJunctionTopoVector} = require("./JunctionTopology");

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
    });

    return junctionList;
}

module.exports = {
    initJunctionGroups
};