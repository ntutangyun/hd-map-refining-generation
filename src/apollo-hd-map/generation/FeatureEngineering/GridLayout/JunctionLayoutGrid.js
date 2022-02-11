const {JunctionGrid} = require("./JunctionGrid");

// Try to add all junctions into one junction grid for now.
// later can support multiple junction grid in a single map;
function buildGridLayout(graph, roadTopoList) {
    const junctionGrid = new JunctionGrid();

    // greedy match add in the highest match per iteration
    const localTopoList = roadTopoList.shuffle();

    while (localTopoList.length > 0) {
        localTopoList.sort((t1, t2) => {
            return junctionGrid.computeBestMatch(t2).assignment.score - junctionGrid.computeBestMatch(t1).assignment.score;
        });

        const topoGroup = localTopoList.shift();
        const {point, assignment} = junctionGrid.computeBestMatch(topoGroup);

        if (assignment.score < 0) {
            global.logE("BUILD_GRID_LAYOUT", "Cannot find a match for current topoGroup. Please try run again.");
            console.log(junctionGrid);
            console.log(topoGroup);
            process.exit(-1);
        }

        point.assignTopoGroup(topoGroup, assignment);
    }

    return junctionGrid;
}

module.exports = {
    buildGridLayout
};