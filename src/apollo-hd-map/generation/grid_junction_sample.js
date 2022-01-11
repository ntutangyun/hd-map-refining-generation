const Graph = require("../common/ApolloHDMap/Graph");
const {MapGrid} = require("./gridUtils");
const JunctionGenerator = require("junction_generator");
const LaneGenerator = require("src/apollo-hd-map/generation/LaneGenerator");

const config = {
    grid_width: 9,
    grid_height: 9,
    grid_base_offset: {
        x: 1000,    // east
        y: 1000     // north
    },
    grid_width_gap: 100,
    grid_height_gap: 100,

    hd_map_header: require("../common/hd_map_header.json")
};

const mapGrid = new MapGrid(config);

console.log(mapGrid);


