const {JunctionGrid} = require("./JunctionGrid");

// Try to add all junctions into one junction grid for now.
// later can support multiple junction grid in a single map;
function buildGridLayout(graph, junctionClusters) {
    const junctionGrid = new JunctionGrid();

    // greedy match add in the highest match per iteration
    const jClusters = junctionClusters.shuffle();

    while (jClusters.length > 0) {
        jClusters.sort((t1, t2) => {
            return junctionGrid.computeBestMatch(t2).assignment.score - junctionGrid.computeBestMatch(t1).assignment.score;
        });

        const jCluster = jClusters.shift();
        const {point, assignment} = junctionGrid.computeBestMatch(jCluster);

        if (assignment.score < 0) {
            global.logE("BUILD_GRID_LAYOUT", "Cannot find a match for current topoGroup. Please try run again.");
            console.log(junctionGrid);
            console.log(jCluster);
            process.exit(-1);
        }

        point.assignJunctionCluster(jCluster, assignment);
    }

    return junctionGrid;
}

module.exports = {
    buildGridLayout
};