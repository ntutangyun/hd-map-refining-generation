const EDGE_DIRECTION_FORWARD = 0;
const EDGE_DIRECTION_LEFT = 1;
const EDGE_DIRECTION_RIGHT = 2;

class Edge {

    constructor(graph) {
        this.id = null;
        this.graph = graph;
        this.fromLane = null;
        this.toLane = null;
        this.cost = null;
        this.directionType = null;   // one of EDGE_DIRECTION_TYPES
    }

    init(edgeData) {
        this.id = `${edgeData.fromLaneId}->${edgeData.toLaneId}`;
        this.fromLane = this.graph.getLaneById(edgeData.fromLaneId);
        this.toLane = this.graph.getLaneById(edgeData.toLaneId);
        this.cost = +edgeData.cost;
        this.directionType = edgeData.directionType;

        return this;
    }
}

module.exports = {
    EDGE_DIRECTION_FORWARD,
    EDGE_DIRECTION_LEFT,
    EDGE_DIRECTION_RIGHT,
    Edge
};