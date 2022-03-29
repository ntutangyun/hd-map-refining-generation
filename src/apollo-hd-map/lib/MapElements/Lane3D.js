const LaneBase = require("./LaneBase");

class Lane3D extends LaneBase {
    constructor({
                    id,
                    laneWidth,
                    isForward,
                    speedLimit,
                    centralCurve,
                    leftBoundaryCurve,
                    rightBoundaryCurve,
                    leftBoundaryType,
                    rightBoundaryType,
                    type,
                    turn,
                    startPoint,
                    startHeadingVector,
                    endPoint,
                    endHeadingVector,
                }) {
        super({
            id,
            laneWidth,
            isForward,
            speedLimit,
            centralCurve,
            leftBoundaryCurve,
            rightBoundaryCurve,
            leftBoundaryType,
            rightBoundaryType,
            type,
            turn,
            startPoint,
            endPoint,
        });
        this.startHeadingVector = startHeadingVector;
        this.endHeadingVector = endHeadingVector;
    }
}

module.exports = Lane3D;