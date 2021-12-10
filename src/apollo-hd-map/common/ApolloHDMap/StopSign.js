const STOP_SIGN_TYPE = {
    UNKNOWN: 0,
    ONE_WAY: 1,
    TWO_WAY: 2,
    THREE_WAY: 3,
    FOUR_WAY: 4,
    ALL_WAY: 5
};

class StopSign {
    constructor(graph) {
        this.graph = graph;
        this.id = null;
        this.type = null;
        this.laneList = {};
    }

    init(stopSignData) {
        this.id = stopSignData.id.id;
        this.type = stopSignData.type;
        stopSignData.overlapIdList.forEach(o => {
            const laneId = this.extractLaneId(o.id);
            if (laneId !== null) {
                const lane = this.graph.getLaneById(laneId);

                if (lane === null) {
                    return;
                }

                this.laneList[lane.id] = lane;
                lane.stopSignList[this.id] = this;
            }
        });
        return this;
    }

    extractLaneId(str) {
        if (str.includes("lane")) {
            return str.replace(`overlap_${this.id}_`, "");
        }
        return null;
    }
}

module.exports = {
    StopSign,
    STOP_SIGN_TYPE
};