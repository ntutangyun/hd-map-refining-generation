const LaneBase = require("./LaneBase");

class Lane extends LaneBase {
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
                    startHeading,
                    endPoint,
                    endHeading,
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
        this.startHeading = startHeading;
        this.endHeading = endHeading;
    }
}

module.exports = Lane;