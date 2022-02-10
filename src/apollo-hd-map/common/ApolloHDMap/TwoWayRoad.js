const {vector, vectorHeading, Point} = require("./Geometry");

class TwoWayRoad {
    constructor(graph) {
        this.id = null;
        this.graph = graph;
        this.forwardLaneList = [];  // order from left to right, i.e. closer to -> far away from the road central curve
        this.backwardLaneList = []; // order from left to right, i.e. closer to -> far away from the road central curve

        // for two-way roads, one junction may appear in both incoming and outgoing list
        this.incoming = {};
        this.outgoing = {};

        this.startPoint = null;
        this.startHeading = null;
        this.endPoint = null;
        this.endHeading = null;
    }

    get name() {
        return this.constructor.name;
    }

    init(roadData) {
        this.id = roadData.id.id;
        if (roadData.sectionList.length !== 1) {
            global.logE("TwoWayRoad", "road have multiple sections.: ");
            console.log(roadData);
            process.exit(-1);
        }

        // by default road only have one section
        const roadSection = roadData.sectionList[0];
        const laneList = roadSection.laneIdList.map(id => this.graph.getLaneById(id.id));

        laneList.forEach(lane => lane.road = this);

        const leftMostLanes = laneList.filter(lane => lane.getLeftNeighborLanes().length === 0);
        if (leftMostLanes.length === 0) {
            global.logE(this.name, "Cannot find the left most lane");
            process.exit(-1);
        }

        if (leftMostLanes.length > 2) {
            global.logE(this.name, "Find more than two left most lanes...");
            console.log(leftMostLanes.map(lane => lane.id));
            process.exit(-1);
        }

        if (leftMostLanes.length === 1) {
            this.forwardLaneList = [leftMostLanes[0], ...leftMostLanes[0].getAllRightSideLanesInArray()];
            this.backwardLaneList = [];
        } else if (leftMostLanes.length === 2) {
            this.forwardLaneList = [leftMostLanes[0], ...leftMostLanes[0].getAllRightSideLanesInArray()];
            this.backwardLaneList = [leftMostLanes[1], ...leftMostLanes[1].getAllRightSideLanesInArray()];
        }

        // use the forwards lanes to calculate the road start point, start heading, end point and end heading.
        const pList = this.forwardLaneList[0].getLeftBoundaryPoints();
        this.startPoint = pList[0];
        this.endPoint = pList.last();
        this.startHeading = vectorHeading(vector(pList[0], pList[1]));
        this.endHeading = vectorHeading(vector(pList[pList.length - 2], pList[pList.length - 1]));

        return this;
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

    getStartCenter() {
        const center = new Point(0, 0, 0);
        this.forwardLaneList.forEach(forwardLane => {
            const point = forwardLane.getFirstPoint();
            center.x += point.x;
            center.y += point.y;
            center.z += point.z;
        });
        this.backwardLaneList.forEach(backwardLane => {
            const point = backwardLane.getLastPoint();
            center.x += point.x;
            center.y += point.y;
            center.z += point.z;
        });
        center.x /= (this.forwardLaneList.length + this.backwardLaneList.length);
        center.y /= (this.forwardLaneList.length + this.backwardLaneList.length);
        center.z /= (this.forwardLaneList.length + this.backwardLaneList.length);
        return center;
    }

    getEndCenter() {
        const center = new Point(0, 0, 0);
        this.forwardLaneList.forEach(forwardLane => {
            const point = forwardLane.getLastPoint();
            center.x += point.x;
            center.y += point.y;
            center.z += point.z;
        });
        this.backwardLaneList.forEach(backwardLane => {
            const point = backwardLane.getFirstPoint();
            center.x += point.x;
            center.y += point.y;
            center.z += point.z;
        });
        center.x /= (this.forwardLaneList.length + this.backwardLaneList.length);
        center.y /= (this.forwardLaneList.length + this.backwardLaneList.length);
        center.z /= (this.forwardLaneList.length + this.backwardLaneList.length);
        return center;
    }
}

module.exports = TwoWayRoad;