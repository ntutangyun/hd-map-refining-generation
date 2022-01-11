const {Point} = require("./ApolloHDMap/Geometry");

/*
    JUNCTION GRID

    this is a 4 (width) by 2 (height) grid

                      width_gap
              * ----- * ----- * ----- *
              |       |       |       |  height_gap
              |       |       |       |
    --------- * ----- * ----- * ----- *
    x_offset  |
              | y_offset
              |

     grid_width: 9,
     grid_height: 9,
     grid_base_offset: {
        x: 1000,        // east
        y: 1000         // north
     },
     grid_width_gap: 100,
     grid_height_gap: 100
 */
class MapGrid {
    constructor({grid_width, grid_height, grid_base_offset, grid_width_gap, grid_height_gap}) {
        this.width = grid_width;
        this.height = grid_height;
        this.base_offset = grid_base_offset;
        this.width_gap = grid_width_gap;
        this.height_gap = grid_height_gap;

        this.grid_points = [];

        this.initGridPoints();
    }

    initGridPoints() {
        this.grid_points = [];
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                this.grid_points.push(new Point(this.base_offset.x + j * this.width_gap, this.base_offset.y + i * this.height_gap, 0));
            }
        }
    }
}

module.exports = {
    MapGrid,
};