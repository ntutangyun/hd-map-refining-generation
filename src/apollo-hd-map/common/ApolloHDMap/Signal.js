const {Curve} = require("./Curve");
const SIGNAL_TYPE = {
    UNKNOWN: 1,
    MIX_2_HORIZONTAL: 2,
    MIX_2_VERTICAL: 3,
    MIX_3_HORIZONTAL: 4,
    MIX_3_VERTICAL: 5,
    SINGLE: 6
};

const SUB_SIGNAL_TYPE = {
    UNKNOWN: 1,
    CIRCLE: 2,
    ARROW_LEFT: 3,
    ARROW_FORWARD: 4,
    ARROW_RIGHT: 5,
    ARROW_LEFT_AND_FORWARD: 6,
    ARROW_RIGHT_AND_FORWARD: 7,
    ARROW_U_TURN: 8,
};

class SubSignal {
    constructor(signal) {
        this.signal = signal;
        this.id = null;
        this.type = null;                   // one of SUB_SIGNAL_TYPE
        this.location = null;
    }

    init(ss) {
        this.id = ss.id.id;
        this.type = ss.type;
        this.location = ss.location;
        return this;
    }
}

class Signal {
    constructor(graph) {
        this.graph = graph;
        this.id = null;
        this.boundary = [];
        this.type = null;                   // one of SIGNAL_TYPE
        this.laneList = {};
        this.subSignalList = {};
        this.junction = null;
        this.signInfoList = [];
        this.stopLineList = [];
        this.renderColor = null;
    }

    init(s) {
        this.id = s.id.id;
        s.boundary.pointList.forEach(p => this.boundary.push(p));
        s.subsignalList.forEach(ss => this.addSubSignal(new SubSignal(this).init(ss)));
        this.type = s.type;

        s.overlapIdList.forEach(ol => {
            if (ol.id.includes("lane")) {
                const lane = this.graph.getLaneById(this.extractLaneId(ol.id));
                if (lane === null) {
                    return;
                }
                this.addLane(lane);
                lane.addSignal(this);
            }

            if (ol.id.includes("overlap_junction_I")) {
                this.junction = this.graph.getJunctionById(this.extractJunctionId(ol.id));
            }
        });

        this.stopLineList = s.stopLineList.map(stopLine => new Curve(this).init(stopLine));
        this.signInfoList = s.signInfoList;
        return this;
    }

    extractJunctionId(olId) {
        const split = olId.split("_J0_")[0];
        return split.replace(`overlap_junction_I`, "J_");
    }

    extractLaneId(olId) {
        return olId.replace(`overlap_${this.id}_`, "");
    }

    addSubSignal(ss) {
        this.subSignalList[ss.id] = ss;
    }

    addLane(lane) {
        this.laneList[lane.id] = lane;
    }
}

module.exports = Signal;