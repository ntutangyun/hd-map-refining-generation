const {JunctionGrid} = require("./JunctionGrid");

// Try to add all junctions into one junction grid for now.
// later can support multiple junction grid in a single map;
function buildGridLayout(graph, roadTopoList) {

    const junctionGrid = new JunctionGrid();

    roadTopoList.forEach(topoGroup => {
        if (junctionGrid.tryAddTopoGroup(topoGroup)) {

        }
    });

    console.log(roadTopoList);
    return null;
}

module.exports = {
    buildGridLayout
};