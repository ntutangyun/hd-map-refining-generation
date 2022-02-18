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
            if (!o.id.includes("lane")) {
                // ignore other types of overlap for now
                return;
            }
            const overlap = this.graph.mapData.overlapList.find(overlap => overlap.id.id === o.id);
            if (!overlap) {
                global.logE("StopSign", "Cannot find the overlap");
                process.exit(-1);
            }
            const laneObject = overlap.objectList.find(object => object.id.id.startsWith("lane"));
            if (!laneObject) {
                global.logE("StopSign", "Cannot find the lane object");
                process.exit(-1);
            }
            const lane = this.graph.getLaneById(laneObject.id.id);
            if (lane === null) {
                return;
            }
            this.laneList[lane.id] = lane;
            lane.stopSignList[this.id] = this;
        });
        return this;
    }
}

module.exports = {
    StopSign,
    STOP_SIGN_TYPE
};