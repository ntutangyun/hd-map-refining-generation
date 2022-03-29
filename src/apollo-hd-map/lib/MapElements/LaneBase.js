const LaneProto = global.ApolloTestingLib("protobuf_out/modules/map/proto/map_lane_pb");

const WIDTH_SAMPLE_COUNT = 3;

// lane boundary ====
// for road lanes:
// road boundary type: curb
// forward backward boundary type: double yellow
// same direction lane boundary type: dotted white

// for junctions lanes:
// things is a bit complicated... set to unknown for now...

class LaneBase {
    constructor({
                    id,
                    laneWidth,
                    isForward,
                    speedLimit,
                    centralCurve,
                    leftBoundaryCurve,
                    rightBoundaryCurve,
                    leftBoundaryType = LaneProto.LaneBoundaryType.Type.UNKNOWN,
                    rightBoundaryType = LaneProto.LaneBoundaryType.Type.UNKNOWN,
                    type = LaneProto.Lane.LaneType.CITY_DRIVING,
                    turn = LaneProto.Lane.LaneTurn.NO_TURN,
                    startPoint,
                    endPoint,
                }) {
        this.id = id;
        this.laneWidth = laneWidth;
        this.isForward = isForward;
        this.centralCurve = centralCurve;
        this.length = this.centralCurve.approximateLength();

        this.leftBoundaryCurve = leftBoundaryCurve;
        this.rightBoundaryCurve = rightBoundaryCurve;
        this.leftBoundaryType = leftBoundaryType;
        this.rightBoundaryType = rightBoundaryType;
        this.speedLimit = speedLimit;
        this.type = type;
        this.turn = turn;
        this.startPoint = startPoint;
        this.endPoint = endPoint;

        this.overlapList = [];

        this.outgoingList = [];
        this.incomingList = [];

        this.leftNeighborForwardList = [];
        this.rightNeighborForwardList = [];

        this.leftSampleList = [];
        this.rightSampleList = [];
        this.leftRoadSampleList = [];
        this.rightRoadSampleList = [];

        this.junction = null;
        this.road = null;
        this.junctionRoad = null;
    }


    getOverlapList() {
        return [...this.overlapList];
    }

    getIncomingList() {
        return [...this.incomingList];
    }

    getOutgoingList() {
        return [...this.outgoingList];
    }

    getOutgoingLaneList() {
        return [...this.outgoingList];
    }

    // assume the lane has constant lane width along s axis for now
    // for road width sampling, forward lanes and backward lanes are the same
    // as there is one set of road boundary for each forward list and backward list respectively
    sampleWidth(leftLaneCount, rightLaneCount) {
        const sWindow = this.length / (WIDTH_SAMPLE_COUNT - 1);
        const halfWidth = this.laneWidth / 2;

        for (let i = 0; i < WIDTH_SAMPLE_COUNT; i++) {
            const s = sWindow * i;
            this.leftSampleList.push({
                s, width: halfWidth
            });
            this.rightSampleList.push({
                s, width: halfWidth
            });
            this.leftRoadSampleList.push({
                s, width: leftLaneCount * this.laneWidth + halfWidth,
            });
            this.rightRoadSampleList.push({
                s, width: rightLaneCount * this.laneWidth + halfWidth
            });
        }
    }

    serializeToProtobuf(curveSampleCount) {
        const lane = new LaneProto.Lane();
        lane.setId((new MapIDProto.Id().setId(this.id)));
        lane.setLength(this.length);
        lane.setSpeedLimit(this.speedLimit);
        lane.setType(this.type);
        lane.setTurn(this.turn);

        // direction defaults to forward
        lane.setDirection(LaneProto.Lane.LaneDirection.FORWARD);

        lane.setCentralCurve(this.centralCurve.serializeToProtobuf(curveSampleCount));

        const leftLaneBoundaryType = new LaneProto.LaneBoundaryType().setS(0);
        leftLaneBoundaryType.addTypes(this.leftBoundaryType);
        const leftBoundary = new LaneProto.LaneBoundary()
            .setCurve(this.leftBoundaryCurve.serializeToProtobuf(curveSampleCount))
            .setLength(this.leftBoundaryCurve.approximateLength());
        leftBoundary.addBoundaryType(leftLaneBoundaryType);
        lane.setLeftBoundary(leftBoundary);

        const rightLaneBoundaryType = new LaneProto.LaneBoundaryType().setS(0);
        rightLaneBoundaryType.addTypes(this.rightBoundaryType);
        const rightBoundary = new LaneProto.LaneBoundary()
            .setCurve(this.rightBoundaryCurve.serializeToProtobuf(curveSampleCount))
            .setLength(this.rightBoundaryCurve.approximateLength());
        rightBoundary.addBoundaryType(rightLaneBoundaryType);
        lane.setRightBoundary(rightBoundary);

        this.overlapList.forEach(overlap => {
            lane.addOverlapId().setId(overlap.id);
        });

        this.incomingList.forEach(inLane => {
            lane.addPredecessorId().setId(inLane.id);
        });

        this.outgoingList.forEach(outLane => {
            lane.addSuccessorId().setId(outLane.id);
        });

        this.leftNeighborForwardList.forEach(leftNeighborLane => {
            lane.addLeftNeighborForwardLaneId().setId(leftNeighborLane.id);
        });

        this.rightNeighborForwardList.forEach(rightNeighborLane => {
            lane.addRightNeighborForwardLaneId().setId(rightNeighborLane.id);
        });

        this.leftSampleList.forEach(sample => {
            lane.addLeftSample().setS(sample.s).setWidth(sample.width);
        });

        this.rightSampleList.forEach(sample => {
            lane.addRightSample().setS(sample.s).setWidth(sample.width);
        });

        this.leftRoadSampleList.forEach(sample => {
            lane.addLeftRoadSample().setS(sample.s).setWidth(sample.width);
        });

        this.rightRoadSampleList.forEach(sample => {
            lane.addRightRoadSample().setS(sample.s).setWidth(sample.width);
        });

        return lane;
    }
}

module.exports = LaneBase;