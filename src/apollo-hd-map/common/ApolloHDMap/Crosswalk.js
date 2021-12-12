class Crosswalk {
    constructor(graph) {
        this.id = null;
        this.graph = graph;
        this.laneList = {};
        this.pointList = [];
    }

    init(crossWalkData) {
        console.log(crossWalkData)
        this.id = crossWalkData.id.id;
        this.pointList = crossWalkData.polygon.pointList;
        crossWalkData.overlapIdList.forEach(o => {
            const laneId = this.extractLaneId(o.id);
            if (laneId !== null) {
                const lane = this.graph.getLaneById(laneId);
                if (lane === null) {
                    return;
                }

                this.laneList[lane.id] = lane;
                // need additional processing for junction lanes.
                lane.addCrosswalk(this);
            }
        });
        return this;
    }

    getPointList() {
        return this.pointList;
    }

    extractLaneId(str) {
        if (str.includes("lane")) {
            return str.replace(`overlap_${this.id}_`, "");
        }
        return null;
    }
}

module.exports = Crosswalk;