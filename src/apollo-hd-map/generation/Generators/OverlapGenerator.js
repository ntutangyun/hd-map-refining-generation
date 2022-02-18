const JunctionLaneOverlap = require("../MapElements/JunctionLaneOverlap");
const SignalLaneOverlap = require("../MapElements/SignalLaneOverlap");
const SignalJunctionOverlap = require("../MapElements/SignalJunctionOverlap");

class OverlapGenerator {
    static generateJunctionLaneOverlap(junction, lane) {
        return new JunctionLaneOverlap(junction, lane);
    }

    static generateSignalLaneOverlap(signal, lane) {
        return new SignalLaneOverlap(signal, lane);
    }

    static generateSignalJunctionOverlap(signal, junction) {
        return new SignalJunctionOverlap(signal, junction);
    }
}

module.exports = OverlapGenerator;