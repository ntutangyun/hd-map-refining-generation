const JunctionLaneOverlap = require("../MapElements/JunctionLaneOverlap");
const SignalLaneOverlap = require("../MapElements/SignalLaneOverlap");
const SignalJunctionOverlap = require("../MapElements/SignalJunctionOverlap");
const StopSignLaneOverlap = require("../MapElements/StopSignLaneOverlap");
const StopSignJunctionOverlap = require("../MapElements/StopSignJunctionOverlap");
const CrosswalkLaneOverlap = require("../MapElements/CrosswalkLaneOverlap");
const CrosswalkJunctionOverlap = require("../MapElements/CrosswalkJunctionOverlap");

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

    static generateCrosswalkLaneOverlap(crosswalk, lane) {
        return new CrosswalkLaneOverlap(crosswalk, lane);
    }

    static generateCrosswalkJunctionOverlap(crosswalk, junction) {
        return new CrosswalkJunctionOverlap(crosswalk, junction);
    }
}

module.exports = OverlapGenerator;