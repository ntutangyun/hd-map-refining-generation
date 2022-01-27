const GRID_START_OFFSET_X = 10000;
const GRID_START_OFFSET_Y = 10000;
const GRID_POINT_MARGIN = 100;
const MAX_LANE_COUNT_PER_ROAD = 4;
const DEFAULT_LANE_WIDTH = 3.5;
const DEFAULT_ROAD_SOCKET_X_OFFSET = 10;

function xIToX(xI) {
    return GRID_START_OFFSET_X + GRID_POINT_MARGIN * xI;
}

function yIToY(yI) {
    return GRID_START_OFFSET_Y + GRID_POINT_MARGIN * yI;
}

const DEFAULT_DIRECTIONS = ["EAST", "NORTH", "WEST", "SOUTH"];
const DEFAULT_DIRECTION_REQUIREMENT = ["IN", "OUT", "IN-OUT"];
const DEFAULT_DIRECTION_ASSIGNMENT = {
    EAST: null,
    NORTH: null,
    WEST: null,
    SOUTH: null,
};


class JunctionGridPoint {
    constructor(grid, xI, yI,
                eastRequirement = DEFAULT_DIRECTION_REQUIREMENT,
                northRequirement = DEFAULT_DIRECTION_REQUIREMENT,
                westRequirement = DEFAULT_DIRECTION_REQUIREMENT,
                southRequirement = DEFAULT_DIRECTION_REQUIREMENT
    ) {
        this.grid = grid;
        this.xI = xI;
        this.yI = yI;
        this.free = true;

        this.x = xIToX(this.xI);
        this.y = yIToY(this.yI);

        this.east = null;
        this.north = null;
        this.west = null;
        this.south = null;

        this.eastRequirement = eastRequirement;
        this.northRequirement = northRequirement;
        this.westRequirement = westRequirement;
        this.southRequirement = southRequirement;
    }

    get name() {
        return this.constructor.name;
    }

    matchRoadTopo(topoGroup) {
        const topoVector = topoGroup.roadTopoVec;
        const topoDirectionAssignment = this.getPossibleDirectionAssignments(topoVector);

        // iterate through all the possible direction assignments. and find the best match

        topoDirectionAssignment.sort((assignment1, assignment2) => {
            this.computeAssignmentScore(assignment1);
            this.computeAssignmentScore(assignment2);
        });
    }

    getPossibleDirectionAssignments(topoVector) {
        // east, north, west, south
        if (topoVector.length < 2 || topoVector > 4) {
            global.logE(this.name, "Invalid topoVector length");
            process.exit(-1);
        }

        if (topoVector.length === 2) {
            const assignmentList = [];
            const [topo1, topo2] = topoVector;

            // max rotation = direction - 1;
            for (let rotation = 0; rotation < 4; rotation++) {
                const rotatedDirections = [...DEFAULT_DIRECTIONS];
                rotatedDirections.rotate(rotation);
                const topo1Index = 0;
                const topo1Direction = rotatedDirections[topo1Index];
                for (let topo2Index = 1; topo2Index < 4; topo2Index++) {
                    const topo2Direction = rotatedDirections[topo2Index];
                    const assignment = {
                        ...DEFAULT_DIRECTION_ASSIGNMENT,
                        [topo1Direction]: topo1,
                        [topo2Direction]: topo2
                    };
                    assignmentList.push(assignment);
                }
            }
            return assignmentList;
        }

        if (topoVector.length === 3) {
            const assignmentList = [];
            const [topo1, topo2, topo3] = topoVector;
            // max rotation = direction - 1;
            for (let rotation = 0; rotation < 4; rotation++) {
                const rotatedDirections = [...DEFAULT_DIRECTIONS];
                rotatedDirections.rotate(rotation);
                const topo1Index = 0;
                const topo1Direction = rotatedDirections[topo1Index];
                for (let topo2Index = 1; topo2Index < 3; topo2Index++) {
                    const topo2Direction = rotatedDirections[topo2Index];
                    for (let topo3Index = topo2Index + 1; topo3Index < 4; topo3Index++) {
                        const topo3Direction = rotatedDirections[topo3Index];
                        const assignment = {
                            ...DEFAULT_DIRECTION_ASSIGNMENT,
                            [topo1Direction]: topo1,
                            [topo2Direction]: topo2,
                            [topo3Direction]: topo3,
                        };
                        assignmentList.push(assignment);
                    }
                }
            }
            return assignmentList;
        }

        if (topoVector.length === 4) {
            const assignmentList = [];
            const [topo1, topo2, topo3, topo4] = topoVector;

            // max rotation = direction - 1;
            for (let rotation = 0; rotation < 4; rotation++) {
                const rotatedDirections = [...DEFAULT_DIRECTIONS];
                rotatedDirections.rotate(rotation);

                const assignment = {
                    [rotatedDirections[0]]: topo1,
                    [rotatedDirections[1]]: topo2,
                    [rotatedDirections[2]]: topo3,
                    [rotatedDirections[3]]: topo4,
                };
                assignmentList.push(assignment);
            }
            return assignmentList;
        }
    }

    // assignment matching score
    computeAssignmentScore(assignment) {
        let totalScore = 0;
 
        if (this.eastRequirement.includes(assignment.EAST)) {
            totalScore += 3 - this.eastRequirement.length;
        } else {
            return -1;
        }

        if (this.eastRequirement.includes())

            }
}

// a new junction grid comes with a center free point
class JunctionGrid {
    constructor() {
        this.pointList = [];

        this.addPoint(0, 0);
    }

    get name() {
        return this.constructor.name;
    }

    addPoint(xI, yI) {
        const freePoint = new JunctionGridPoint(this, xI, yI);
        this.pointList.push(freePoint);
    }

    getFreePointList() {
        return this.pointList.filter(p => p.free);
    }

    tryAddTopoGroup(topoGroup) {
        const freePoints = this.getFreePointList();

        if (freePoints.length === 0) {
            global.logE(this.name, "There is no free points in the junction grid...");
            process.exit(-1);
            return false;
        }

        const matchedFreePoints = freePoints.filter(p => p.matchRoadTopo(topoGroup));

    }

}

module.exports = {
    JunctionGrid,
    JunctionGridPoint,
    topoVectorDirectionAssignment
};