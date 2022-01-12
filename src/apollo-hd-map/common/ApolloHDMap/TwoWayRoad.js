class TwoWayRoad {
    constructor(graph) {
        this.id = null;
        this.graph = graph;
        this.forwardLaneList = [];  // order from left to right, i.e. closer to -> far away from the road central curve
        this.backwardLaneList = []; // order from left to right, i.e. closer to -> far away from the road central curve

        // for two-way roads, one junction may appear in both incoming and outgoing list
        this.incoming = {};
        this.outgoing = {};
    }

    get name() {
        return this.constructor.name;
    }

    init(roadData) {
        if (roadData.sectionList.length !== 1) {
            global.logE("TwoWayRoad", "road have multiple sections.: ");
            console.log(roadData);
            process.exit(-1);
        }

        // by default road only have one section
        const roadSection = roadData.sectionList[0];
        const laneList = roadSection.laneIdList.map(id => this.graph.getLaneById(id.id));

        const forwardLaneList = laneList.filter(lane => lane.direction === "FORWARD");
        const backwardLaneList = laneList.filter(lane => lane.direction === "BACKWARD");

        // forward lane List
        const forwardLeftMostLanes = forwardLaneList.filter(lane => lane.getLeftNeighborLanes().length === 0);
        if (forwardLeftMostLanes.length === 0) {
            global.logE(this.name, "Cannot find the left most lane");
            process.exit(-1);
        } else if (forwardLeftMostLanes.length > 1) {
            global.logE(this.name, "Found multiple left most lane");
            process.exit(-1);
        }
        this.forwardLaneList = [forwardLeftMostLanes[0], ...forwardLeftMostLanes[0].getAllRightSideLanesInArray()];

        // backward lane List
        const backwardLeftMostLanes = backwardLaneList.filter(lane => lane.getLeftNeighborLanes().length === 0);
        if (backwardLeftMostLanes.length === 0) {
            global.logE(this.name, "Cannot find the left most lane");
            process.exit(-1);
        } else if (backwardLeftMostLanes.length > 1) {
            global.logE(this.name, "Found multiple left most lane");
            process.exit(-1);
        }
        this.backwardLaneList = [backwardLeftMostLanes[0], ...backwardLeftMostLanes[0].getAllRightSideLanesInArray()];

        this.forwardLaneList.forEach(lane => lane.road = this);
        this.backwardLaneList.forEach(lane => lane.road = this);
    }

    getLaneList() {
        return [...this.forwardLaneList, ...this.backwardLaneList];
    }

    getForwardLaneList() {
        return [...this.forwardLaneList];
    }

    getBackwardLaneList() {
        return [...this.backwardLaneList];
    }

    addIncoming(incoming) {
        if (incoming.id === this.id) return;
        this.incoming[incoming.id] = incoming;
    }

    addOutgoing(outgoing) {
        if (outgoing.id === this.id) return;
        this.outgoing[outgoing.id] = outgoing;
    }

    getIncomingList() {
        return Object.values(this.incoming);
    }

    getOutgoingList() {
        return Object.values(this.outgoing);
    }
}

module.exports = TwoWayRoad;