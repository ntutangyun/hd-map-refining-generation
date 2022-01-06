const {BezierCurve} = require("./geometryUtils");
const LaneProto = require("../protobuf_out/modules/map/proto/map_lane_pb");
const MapIDProto = require("../protobuf_out/modules/map/proto/map_id_pb");
const {pointDist} = require("../common/ApolloHDMap/Geometry");


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
                }) {
        this.id = id;
        this.laneWidth = laneWidth;
        this.isForward = isForward;
        this.centralCurve = centralCurve;
        this.leftBoundaryCurve = leftBoundaryCurve;
        this.rightBoundaryCurve = rightBoundaryCurve;
        this.leftBoundaryType = leftBoundaryType;
        this.rightBoundaryType = rightBoundaryType;
        this.speedLimit = speedLimit;
        this.type = type;
        this.turn = turn;
    }

    serializeToProtobuf() {
        const lane = new LaneProto.Lane();
        lane.setId((new MapIDProto.Id().setId(this.id)));
        lane.setSpeedLimit(this.speedLimit);
        lane.setType(this.type);
        lane.setTurn(this.turn);
        lane.setDirection(this.isForward ? LaneProto.Lane.LaneDirection.FORWARD : LaneProto.Lane.LaneDirection.BACKWARD);

        lane.setCentralCurve(this.centralCurve.serializeToProtobuf());

        const leftLaneBoundaryType = new LaneProto.LaneBoundaryType().setS(0);
        leftLaneBoundaryType.addTypes(this.leftBoundaryType);
        const leftBoundary = new LaneProto.LaneBoundary()
            .setCurve(this.leftBoundaryCurve.serializeToProtobuf())
            .setLength(this.leftBoundaryCurve.approximateLength());
        leftBoundary.addBoundaryType(leftLaneBoundaryType);
        lane.setLeftBoundary(leftBoundary);

        const rightLaneBoundaryType = new LaneProto.LaneBoundaryType().setS(0);
        rightLaneBoundaryType.addTypes(this.rightBoundaryType);
        const rightBoundary = new LaneProto.LaneBoundary()
            .setCurve(this.rightBoundaryCurve.serializeToProtobuf())
            .setLength(this.rightBoundaryCurve.approximateLength());
        rightBoundary.addBoundaryType(rightLaneBoundaryType);
        lane.setRightBoundary(rightBoundary);

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
                            laneWidth,
                            curveSampleCount = 11,
                            isForward = undefined,
                            speedLimit = 10,
                        }) {

        const centralCurve = BezierCurve.buildBezierCurve({startPoint, startHeading, endPoint, endHeading});

        // build left and right boundaries
        const leftBoundaryStartPoint = startPoint.moveTowards(startHeading + Math.PI / 2, laneWidth / 2);
        const leftBoundaryEndPoint = endPoint.moveTowards(endHeading + Math.PI / 2, laneWidth / 2);
        const leftBoundaryCurve = BezierCurve.buildBezierCurve(
            {
                startPoint: leftBoundaryStartPoint,
                startHeading,
                endPoint: leftBoundaryEndPoint,
                endHeading
            }
        );
        const rightBoundaryStartPoint = startPoint.moveTowards(startHeading - Math.PI / 2, laneWidth / 2);
        const rightBoundaryEndPoint = endPoint.moveTowards(endHeading - Math.PI / 2, laneWidth / 2);
        const rightBoundaryCurve = BezierCurve.buildBezierCurve(
            {
                startPoint: rightBoundaryStartPoint,
                startHeading,
                endPoint: rightBoundaryEndPoint,
                endHeading
            }
        );

        return new Lane({
            id,
            laneWidth,
            isForward,
            speedLimit,
            centralCurve,
            leftBoundaryCurve,
            rightBoundaryCurve
        });
    }
}

module.exports = LaneGenerator;