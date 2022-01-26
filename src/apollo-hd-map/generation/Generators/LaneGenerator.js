const {BezierCurve} = require("../../common/ApolloHDMap/Geometry");
const LaneProto = require("../../protobuf_out/modules/map/proto/map_lane_pb");
const MapIDProto = require("../../protobuf_out/modules/map/proto/map_id_pb");

const WIDTH_SAMPLE_COUNT = 3;

// lane boundary ====
// for road lanes:
// road boundary type: curb
// forward backward boundary type: double yellow
// same direction lane boundary type: dotted white

// for junctions lanes:
// things is a bit complicated... set to unknown for now...
class Lane {
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
                    startHeading,
                    endPoint,
                    endHeading,
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
        this.startHeading = startHeading;
        this.endPoint = endPoint;
        this.endHeading = endHeading;

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

class LaneGenerator {
    static generateLane({
                            startPoint,
                            startHeading,
                            endPoint,
                            endHeading,
                            id,
                            laneWidth = 3.5,
                            isForward = undefined,
                            speedLimit = 10,
                            turn = undefined
                        }) {

        const centralCurve = BezierCurve.buildBezierCurve({startPoint, startHeading, endPoint, endHeading});

        // build left and right boundaries
        const leftBoundaryStartPoint = startPoint.moveTowards(startHeading + Math.PI / 2, laneWidth / 2);
        const leftBoundaryEndPoint = endPoint.moveTowards(endHeading + Math.PI / 2, laneWidth / 2);
        const leftBoundaryCurve = BezierCurve.buildBezierCurve({
            startPoint: leftBoundaryStartPoint, startHeading, endPoint: leftBoundaryEndPoint, endHeading
        });
        const rightBoundaryStartPoint = startPoint.moveTowards(startHeading - Math.PI / 2, laneWidth / 2);
        const rightBoundaryEndPoint = endPoint.moveTowards(endHeading - Math.PI / 2, laneWidth / 2);
        const rightBoundaryCurve = BezierCurve.buildBezierCurve({
            startPoint: rightBoundaryStartPoint, startHeading, endPoint: rightBoundaryEndPoint, endHeading
        });

        return new Lane({
            id,
            laneWidth,
            isForward,
            speedLimit,
            centralCurve,
            leftBoundaryCurve,
            rightBoundaryCurve,
            startPoint,
            startHeading,
            endPoint,
            endHeading,
            turn
        });
    }
}

module.exports = LaneGenerator;