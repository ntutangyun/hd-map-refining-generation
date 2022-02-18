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

        s.overlapIdList.forEach(o => {
            const overlap = this.graph.graphData.overlapList.find(overlap => overlap.id.id === o.id);
            if (!overlap) {
                global.logE("StopSign", "Cannot find the overlap");
                process.exit(-1);
            }

            if (o.id.includes("lane")) {
                const laneObject = overlap.objectList.find(object => object.id.id.startsWith("lane"));
                if (!laneObject) {
                    global.logE("StopSign", "Cannot find the lane object");
                    process.exit(-1);
                }

                const lane = this.graph.getLaneById(laneObject.id.id);
                if (lane === null) {
                    return;
                }
                this.addLane(lane);
                lane.addSignal(this);
            }

            if (o.id.includes("junction")) {
                const junctionObject = overlap.objectList.find(object => object.id.id.startsWith("J_"));
                if (!junctionObject) {
                    global.logE("StopSign", "Cannot find the junction object");
                    process.exit(-1);
                }
                this.junction = this.graph.getJunctionById(junctionObject.id.id);
            }
        });

        this.stopLineList = s.stopLineList.map(stopLine => new Curve(this).init(stopLine));
        this.signInfoList = s.signInfoList;
        return this;
    }

    addSubSignal(ss) {
        this.subSignalList[ss.id] = ss;
    }

    addLane(lane) {
        this.laneList[lane.id] = lane;
    }
}

module.exports = Signal;