class JunctionLanePair {
    constructor(junction, jLane, intersectLane, intersectKey) {
        this.id = null;
        this.junction = junction;
        this.egoJLane = jLane;
        this.intersectVector = jLane.intersectVector;

        this.obsJLane = intersectLane;
        this.intersectKey = intersectKey;

        // testing
        this.egoStartLane = null;
        this.egoEndLane = null;
        this.obsStartLane = null;
    }

    init() {
        this.id = `J-LANE-PAIR--${this.junction.id}--${this.egoJLane.id}--${this.obsJLane.id}`;

        // select longest incoming lane
        let inLanes = this.egoJLane.getIncomingLaneList();
        inLanes.sort((a, b) => b.length - a.length);
        this.egoStartLane = inLanes[0];

        // select longest outgoing lane
        let outLanes = this.egoJLane.getOutgoingLaneList();
        outLanes.sort((a, b) => b.length - a.length);
        this.egoEndLane = outLanes[0];

        inLanes = this.obsJLane.getIncomingLaneList();
        inLanes.sort((a, b) => b.length - a.length);
        this.obsStartLane = inLanes[0];

        return this;
    }
}

module.exports = JunctionLanePair;