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
const DEFAULT_DIRECTION_REQUIREMENT = ["IN", "OUT", "IN-OUT", null];
const DEFAULT_DIRECTION_ASSIGNMENT = {
    EAST: null, NORTH: null, WEST: null, SOUTH: null,
};

class JunctionGridPoint {
    static formatGridPointId(xI, yI) {
        return `grid-point-(${xI},${yI})`;
    }

    static getOppositeDirection(direction) {
        switch (direction) {
            case "east": {
                return "west";
            }
            case "north": {
                return "south";
            }
            case "west": {
                return "east";
            }
            case "south": {
                return "north";
            }
            default: {
                global.logE("JunctionGridPoint", `Direction is invalid: ${direction}`);
                process.exit(-1);
            }
        }
    }

    constructor(grid, xI, yI, eastRequirement = DEFAULT_DIRECTION_REQUIREMENT, northRequirement = DEFAULT_DIRECTION_REQUIREMENT, westRequirement = DEFAULT_DIRECTION_REQUIREMENT, southRequirement = DEFAULT_DIRECTION_REQUIREMENT) {
        this.id = JunctionGridPoint.formatGridPointId(xI, yI);
        this.grid = grid;
        this.xI = xI;
        this.yI = yI;

        this.x = xIToX(this.xI);
        this.y = yIToY(this.yI);

        this.topoGroup = null;

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

    getOppositeGridPoint(direction) {
        let xI = this.xI, yI = this.yI;
        switch (direction) {
            case "east": {
                xI++;
                break;
            }
            case "north": {
                yI++;
                break;
            }
            case "west": {
                xI--;
                break;
            }
            case "south": {
                yI--;
                break;
            }
        }

        const pointId = JunctionGridPoint.formatGridPointId(xI, yI);
        return this.grid.getPointByID(pointId);
    }

    formatJunctionId() {
        return `J_(${this.xI},${this.yI})`;
    }

    // find best matching score
    computeBestAssignment(topoGroup) {
        const topoVector = topoGroup.roadTopoVec;
        const topoDirectionAssignment = this.getPossibleDirectionAssignments(topoVector);

        // iterate through all the possible direction assignments. and find the best match
        topoDirectionAssignment.sort((a1, a2) => {
            return a2.score - a1.score;
        });

        return topoDirectionAssignment[0];
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
                        ...DEFAULT_DIRECTION_ASSIGNMENT, [topo1Direction]: topo1, [topo2Direction]: topo2
                    };
                    this.computeAssignmentScore(assignment);
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
                        this.computeAssignmentScore(assignment);
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
                this.computeAssignmentScore(assignment);
                assignmentList.push(assignment);
            }
            return assignmentList;
        }
    }

    // assignment matching score
    // assume IN-OUT can only match IN-OUT for now
    // if any direction no match, return -1
    computeAssignmentScore(assignment) {
        assignment.score = 0;

        if (!this.eastRequirement.includes(assignment.EAST) || !this.northRequirement.includes(assignment.NORTH) || !this.westRequirement.includes(assignment.WEST) || !this.southRequirement.includes(assignment.SOUTH)) {
            assignment.score = -1;
            return;
        }

        // assume assignment east is "IN"
        // eastRequirement = ["IN", 'OUT', 'IN-OUT', null] = 1 point
        // eastRequirement = ["IN", 'IN-OUT', null] = 2 point
        // eastRequirement = ["IN", null] = 3 point
        // eastRequirement = ["IN"] = 4 point
        // when matched, the more specific requirement is, the higher score it gets.
        assignment.score += 5 - this.eastRequirement.length;
        assignment.score += 5 - this.northRequirement.length;
        assignment.score += 5 - this.southRequirement.length;
        assignment.score += 5 - this.westRequirement.length;
    }

    computeOppositeRequirement(directionTopo) {
        switch (directionTopo) {
            case "IN": {
                return ["OUT"];
            }
            case "OUT": {
                return ["IN"];
            }
            case "IN-OUT": {
                return ["IN-OUT"];
            }
            default: {
                return [...DEFAULT_DIRECTION_REQUIREMENT];
            }
        }
    }

    assignTopoGroup(topoGroup, assignment) {
        this.topoGroup = topoGroup;

        this.east = assignment.EAST;
        this.north = assignment.NORTH;
        this.west = assignment.WEST;
        this.south = assignment.SOUTH;

        // extend the grid
        {
            // east direction
            const xI = this.xI + 1;
            const yI = this.yI;
            let point = this.grid.getPointByID(JunctionGridPoint.formatGridPointId(xI, yI));
            if (!point) {
                point = this.grid.addPoint(xI, yI);
            }
            if (!point.topoGroup) {
                // free point, add proper assignment
                point.westRequirement = this.computeOppositeRequirement(this.east);
            } else {
                // do nothing as it's already assigned a topo group.
            }
        }

        {
            // north direction
            const xI = this.xI;
            const yI = this.yI + 1;
            let point = this.grid.getPointByID(JunctionGridPoint.formatGridPointId(xI, yI));
            if (!point) {
                point = this.grid.addPoint(xI, yI);
            }
            if (!point.topoGroup) {
                // free point, add proper assignment
                point.southRequirement = this.computeOppositeRequirement(this.north);
            } else {
                // do nothing as it's already assigned a topo group.
            }
        }

        {
            // west direction
            const xI = this.xI - 1;
            const yI = this.yI;
            let point = this.grid.getPointByID(JunctionGridPoint.formatGridPointId(xI, yI));
            if (!point) {
                point = this.grid.addPoint(xI, yI);
            }
            if (!point.topoGroup) {
                // free point, add proper assignment
                point.eastRequirement = this.computeOppositeRequirement(this.west);
            } else {
                // do nothing as it's already assigned a topo group.
            }
        }

        {
            // south direction
            const xI = this.xI;
            const yI = this.yI - 1;
            let point = this.grid.getPointByID(JunctionGridPoint.formatGridPointId(xI, yI));
            if (!point) {
                point = this.grid.addPoint(xI, yI);
            }
            if (!point.topoGroup) {
                // free point, add proper assignment
                point.northRequirement = this.computeOppositeRequirement(this.south);
            } else {
                // do nothing as it's already assigned a topo group.
            }
        }
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

    getPointByID(id) {
        return this.pointList.find(p => p.id === id);
    }

    addPoint(xI, yI) {
        if (this.getPointByID(JunctionGridPoint.formatGridPointId(xI, yI))) {
            global.logI(this.name, `point at ${xI}, ${yI} already exists`);
            return;
        }
        const freePoint = new JunctionGridPoint(this, xI, yI);
        this.pointList.push(freePoint);
        return freePoint;
    }

    getFreePointList() {
        return this.pointList.filter(p => p.topoGroup === null);
    }

    // tryAddTopoGroup(topoGroup) {
    //     const freePoints = this.getFreePointList();
    //
    //     if (freePoints.length === 0) {
    //         global.logE(this.name, "There is no free points in the junction grid...");
    //         process.exit(-1);
    //         return false;
    //     }
    //
    //     const pointMatches = freePoints.map(point => ({
    //         point, assignment: point.computeBestAssignment(topoGroup)
    //     })).sort((m1, m2) => {
    //         return m2.assignment.score - m1.assignment.score;
    //     });
    //
    //     if (pointMatches[0].score < 0) {
    //         // Cannot find a free point to match the current topo-group.
    //         return false;
    //     }
    // }

    // find best match between free points and the topoGroup.
    computeBestMatch(topoGroup) {
        const freePoints = this.getFreePointList();

        if (freePoints.length === 0) {
            global.logE(this.name, "There is no free points in the junction grid...");
            process.exit(-1);
            return false;
        }

        const pointMatches = freePoints.map(point => ({
            point, assignment: point.computeBestAssignment(topoGroup)
        })).sort((m1, m2) => {
            return m2.assignment.score - m1.assignment.score;
        });

        return pointMatches[0];
    }
}

module.exports = {
    JunctionGrid, JunctionGridPoint, DEFAULT_DIRECTIONS
};