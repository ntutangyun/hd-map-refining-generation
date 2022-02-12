const {JunctionGrid} = require("./JunctionGrid");
const {TOPO_MISMATCH_PENALTY} = require("./JunctionGridUtils");


// Try to add all junctions into one junction grid for now.
// later can support multiple junction grid in a single map;
function buildGridLayout(graph, junctionClusters) {
    const junctionGrid = new JunctionGrid();

    // greedy match add in the highest match per iteration
    // const jClusters = junctionClusters.shuffle();

    while (junctionClusters.length > 0) {
        const matchList = junctionClusters.map(junctionCluster => ({
            junctionCluster,
            bestMatch: junctionGrid.computeBestMatch(junctionCluster),
        })).sort((a, b) => b.bestMatch.assignment.score - a.bestMatch.assignment.score);

        const {junctionCluster, bestMatch} = matchList[0];

        if (bestMatch.assignment.score === TOPO_MISMATCH_PENALTY) {
            global.logE("BUILD_GRID_LAYOUT", "Cannot find a match for current topoGroup. Please try run again.");
            console.log(junctionGrid);
            console.log(junctionCluster);
            process.exit(-1);
        }

        bestMatch.point.assignJunctionCluster(junctionCluster, bestMatch.assignment);

        // remove the cluster from the clusterList
        const clusterIdx = junctionClusters.findIndex(c => c.id === junctionCluster.id);
        junctionClusters.splice(clusterIdx, 1);
        global.logI("BUILD_GRID_LAYOUT", `junction clusters remaining: ${junctionClusters.length}`);
    }

    return junctionGrid;
}

module.exports = {
    buildGridLayout
};