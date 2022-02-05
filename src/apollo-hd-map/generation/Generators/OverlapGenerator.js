const JunctionLaneOverlap = require("../MapElements/JunctionLaneOverlap");

class OverlapGenerator {
    static generateJunctionLaneOverlap(junction, lane) {
        return new JunctionLaneOverlap(junction, lane);
    }
}

module.exports = OverlapGenerator;