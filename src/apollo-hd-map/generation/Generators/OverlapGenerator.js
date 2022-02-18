const JunctionLaneOverlap = require("../MapElements/JunctionLaneOverlap");
const SignalLaneOverlap = require("../MapElements/SignalLaneOverlap");
const SignalJunctionOverlap = require("../MapElements/SignalJunctionOverlap");
const StopSignLaneOverlap = require("../MapElements/StopSignLaneOverlap");
const StopSignJunctionOverlap = require("../MapElements/StopSignJunctionOverlap");

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

    static generateStopSignLaneOverlap(stopSign, lane) {
        return new StopSignLaneOverlap(stopSign, lane);
    }

    static generateStopSignJunctionOverlap(stopSign, junction) {
        return new StopSignJunctionOverlap(stopSign, junction);
    }
}

module.exports = OverlapGenerator;