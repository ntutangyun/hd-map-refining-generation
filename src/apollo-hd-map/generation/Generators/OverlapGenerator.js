const JunctionLaneOverlap = require("../MapElements/JunctionLaneOverlap");

class OverlapGenerator {
    static generateJunctionLaneOverlap(junction, lane) {
        return new JunctionLaneOverlap(junction, lane);
    }

    static generateSignalLaneOverlap(signal, lane) {
        // todo learn how the signal lane is overlapped.
    }
}

module.exports = OverlapGenerator;