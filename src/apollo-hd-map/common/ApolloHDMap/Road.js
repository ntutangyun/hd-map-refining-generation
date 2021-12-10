/*
    Road represents ONE-WAY street/road, abstracted from routing_map,
    by grouping all lanes parallel to each other allowing lane changes in between.

    To avoid mistakes, currently the road are grouped manually.

    id is dynamically calculated from lanes it contains. e.g. road contains lane 3, lane 5 will have id: road_3_5
 */
const {pointDist} = require("../../common/ApolloHDMap/Geometry");

class Road {
    constructor(graph) {
        this.id = "road";
        this.graph = graph;
        this.laneList = {};

        this.incoming = {};
        this.outgoing = {};
    }

    addLane(lane) {
        if (!this.laneList.hasOwnProperty(lane.id)) {
            this.laneList[lane.id] = lane;
            lane.road = this;
            this.id = this.id + lane.id.replace("lane", "");
        }
    }

    getLaneList() {
        return Object.values(this.laneList);
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

    getRoadTailCenter() {
        let x = 0;
        let y = 0;

        const laneList = this.getLaneList();

        laneList.forEach(l => {
            const points = l.getAllPoints();
            x += points[points.length - 1].x;
            y += points[points.length - 1].y;
        });

        return {x: x / laneList.length, y: y / laneList.length, z: 0};
    }

    getRoadHeadCenter() {
        let x = 0;
        let y = 0;

        const laneList = this.getLaneList();

        laneList.forEach(l => {
            const points = l.getAllPoints();
            x += points[0].x;
            y += points[0].y;
        });

        return {x: x / laneList.length, y: y / laneList.length, z: 0};
    }

    getLaneListLeftToRight() {
        const lanes = this.getLaneList();

        const leftMostLanes = lanes.filter(lane => lane.getLeftNeighborLanes().length === 0);
        if (leftMostLanes.length === 0) {
            console.log(`[MAP-MODEL-ROAD] ERROR: road ${this.id} has no left-most lane`);
            process.exit(-1);
        } else if (leftMostLanes.length > 1) {
            console.log(`[MAP-MODEL-ROAD] ERROR: road ${this.id} has multiple left-most lane`);
            process.exit(-1);
        }

        const leftMostLane = leftMostLanes[0];
        return [leftMostLane, ...leftMostLane.getAllRightSideLanesInArray()];
    }

    getLaneListRightToLeft() {
        return this.getLaneListLeftToRight().reverse();
    }

    getAvgLength() {
        const lanes = this.getLaneList();
        let len = 0;
        lanes.forEach(l => len += l.length / lanes.length);
        return len;
    }

    getMinAvgLaneGap() {
        const laneList = this.getLaneListLeftToRight();
        const neighborLanePairList = [];

        for (let i = 0; i < laneList.length - 1; i++) {
            const leftLane = laneList[i];
            const rightLane = laneList[i + 1];

            const halfLength = leftLane.length / 2;

            neighborLanePairList.push({
                leftLane,
                rightLane,
                avgGap: [
                    pointDist(leftLane.getFirstPoint(), rightLane.getFirstPoint()),
                    pointDist(leftLane.getLastPoint(), rightLane.getLastPoint()),
                    pointDist(leftLane.getSegmentAtOffset(halfLength)[1], rightLane.getSegmentAtOffset(halfLength)[1])
                ].average(),
            });
        }

        return neighborLanePairList.sort((a, b) => a.avgGap - b.avgGap)[0];
    }
}

module.exports = Road;