/*
    Roundabout are at same hierarchy level as road, as they both contains multiple lanes.

    id depends on how many roundabouts existing in current graph, count starting from 0.
 */

class Roundabout {
    constructor(graph) {
        this.id = null;
        this.graph = graph;
        this.laneList = {};

        this.incoming = {};
        this.outgoing = {};
    }

    init(rbData) {
        this.id = `roundabout_${this.graph.getRoundaboutList().length}`;

        rbData.lanes.forEach(laneId => {
            const lane = this.graph.getLaneById(laneId);
            this.laneList[lane.id] = lane;
            lane.roundabout = this;
        });

        // update lane left/right neighbor
        rbData.circles.forEach(laneIdList => {
            for (let i = 1; i < laneIdList.length; i++) {
                const leftLane = this.graph.getLaneById(laneIdList[i - 1]);
                const rightLane = this.graph.getLaneById(laneIdList[i]);
                leftLane.addRightNeighborLane(rightLane);
                rightLane.addLeftNeighborLane(leftLane);
            }
        });

        return this;
    }

    // since roundabout contains multiple lanes that are interconnected.
    // check if the incoming or outgoing is itself or not.
    addIncoming(incoming) {
        if (incoming.id !== this.id) {
            this.incoming[incoming.id] = incoming;
        }
    }

    addOutgoing(outgoing) {
        if (outgoing.id !== this.id) {
            this.outgoing[outgoing.id] = outgoing;
        }
    }

    getLaneList() {
        return Object.values(this.laneList);
    }

}

export default Roundabout;