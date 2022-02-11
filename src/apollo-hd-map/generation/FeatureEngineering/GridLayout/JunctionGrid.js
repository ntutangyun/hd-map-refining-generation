const {degreeToRad} = require("../../../common/mathUtils");
const {MAP_START_OFFSET_X, JUNCTION_GRID_WIDTH, MAP_START_OFFSET_Y} = require("../../../common/constants");
const JunctionTopoGeoCluster = require("./JunctionTopoGeoCluster");
const {angleNormalize} = require("../../../common/ApolloHDMap/Geometry");

function xIToX(xI) {
    return MAP_START_OFFSET_X + JUNCTION_GRID_WIDTH * xI;
}

function yIToY(yI) {
    return MAP_START_OFFSET_Y + JUNCTION_GRID_WIDTH * yI;
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

    static getDirectionAngle(direction) {
        switch (direction) {
            case "EAST": {
                return 0;
            }
            case "NORTH": {
                return degreeToRad(90);
            }
            case "WEST": {
                return degreeToRad(180);
            }
            case "SOUTH": {
                return degreeToRad(-90);
            }
            default: {
                global.logE("JunctionGridPoint", `Direction is invalid: ${direction}`);
                process.exit(-1);
            }
        }
    }

    static getDirectionOppositeAngle(direction) {
        switch (direction) {
            case "EAST": {
                return degreeToRad(180);
            }
            case "NORTH": {
                return degreeToRad(-90);
            }
            case "WEST": {
                return degreeToRad(0);
            }
            case "SOUTH": {
                return degreeToRad(90);
            }
            default: {
                global.logE("JunctionGridPoint", `Direction is invalid: ${direction}`);
                process.exit(-1);
            }
        }
    }

    static getOppositeDirection(direction) {
        switch (direction) {
            case "EAST": {
                return "WEST";
            }
            case "NORTH": {
                return "SOUTH";
            }
            case "WEST": {
                return "EAST";
            }
            case "SOUTH": {
                return "NORTH";
            }
            default: {
                global.logE("JunctionGridPoint", `Direction is invalid: ${direction}`);
                process.exit(-1);
            }
        }
    }

    constructor(grid, xI, yI,
                eastTopoRequirement = DEFAULT_DIRECTION_REQUIREMENT,
                northTopoRequirement = DEFAULT_DIRECTION_REQUIREMENT,
                westTopoRequirement = DEFAULT_DIRECTION_REQUIREMENT,
                southTopoRequirement = DEFAULT_DIRECTION_REQUIREMENT,
                eastAngleOptimal = 0,
                northAngleOptimal = degreeToRad(90),
                westAngleOptimal = degreeToRad(-180),
                southAngleOptimal = degreeToRad(-90)
    ) {
        this.id = JunctionGridPoint.formatGridPointId(xI, yI);
        this.grid = grid;
        this.xI = xI;
        this.yI = yI;

        this.x = xIToX(this.xI);
        this.y = yIToY(this.yI);

        this.junctionCluster = null;

        this.EAST = null;
        this.NORTH = null;
        this.WEST = null;
        this.SOUTH = null;

        this.eastTopoRequirement = eastTopoRequirement;
        this.northTopoRequirement = northTopoRequirement;
        this.westTopoRequirement = westTopoRequirement;
        this.southTopoRequirement = southTopoRequirement;

        this.eastAngleOptimal = eastAngleOptimal;
        this.northAngleOptimal = northAngleOptimal;
        this.westAngleOptimal = westAngleOptimal;
        this.southAngleOptimal = southAngleOptimal;

        this.roadAssignment = {
            EAST: null, NORTH: null, WEST: null, SOUTH: null,
        };
    }

    get name() {
        return this.constructor.name;
    }

    assignRoad(direction, road) {
        this.roadAssignment[direction] = road;
    }

    getOppositeGridPoint(direction) {
        let xI = this.xI, yI = this.yI;
        switch (direction) {
            case "EAST": {
                xI++;
                break;
            }
            case "NORTH": {
                yI++;
                break;
            }
            case "WEST": {
                xI--;
                break;
            }
            case "SOUTH": {
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

    computeBestJunctionAssignment(junction) {
        const assignmentList = [];
        // const [topo1, topo2, topo3, topo4] = topoVector;

        const topoGeoInfo = JunctionTopoGeoCluster.extractJunctionTopoGeoInfo(junction);

        // max rotation = direction - 1;
        for (let rotation = 0; rotation < 4; rotation++) {
            const rotatedDirections = [...DEFAULT_DIRECTIONS];
            rotatedDirections.rotate(rotation);

            const assignment = {
                [rotatedDirections[0]]: {
                    topo: topoGeoInfo[0].topo,
                    rotation: angleNormalize(topoGeoInfo[0].rotation + rotation * Math.PI / 4)
                },
                [rotatedDirections[1]]: {
                    topo: topoGeoInfo[1].topo,
                    rotation: angleNormalize(topoGeoInfo[1].rotation + rotation * Math.PI / 4)
                },
                [rotatedDirections[2]]: {
                    topo: topoGeoInfo[2].topo,
                    rotation: angleNormalize(topoGeoInfo[2].rotation + rotation * Math.PI / 4)
                },
                [rotatedDirections[3]]: {
                    topo: topoGeoInfo[3].topo,
                    rotation: angleNormalize(topoGeoInfo[3].rotation + rotation * Math.PI / 4)
                },
            };
            this.computeAssignmentScore(assignment);
            assignmentList.push(assignment);
        }
        return assignmentList;
    }

    // find best matching score
    computeBestClusterAssignment(junctionCluster) {
        // const topoVector = junctionCluster.roadTopoVec;
        // global.logI(this.name, topoVector.toString());

        const junctionAssignmentList = Object.values(junctionCluster.junctionList)
            .map(junction => this.computeBestJunctionAssignment(junction)).sort((a, b) => {
                return b.score - a.score;
            });

        return null;
        //
        // // const junctionList = junctionCluster.
        // const topoDirectionAssignment = this.getPossibleDirectionAssignments(topoVector);
        // // iterate through all the possible direction assignments. and find the best match
        // topoDirectionAssignment.sort((a1, a2) => {
        //     return a2.score - a1.score;
        // });

        // return topoDirectionAssignment[0];
    }

    // getPossibleDirectionAssignments(topoVector) {
    //     // east, north, west, south
    //     if (topoVector.length < 2 || topoVector > 4) {
    //         global.logE(this.name, "Invalid topoVector length");
    //         process.exit(-1);
    //     }
    //
    //     if (topoVector.length === 2) {
    //         const assignmentList = [];
    //         const [topo1, topo2] = topoVector;
    //
    //         // max rotation = direction - 1;
    //         for (let rotation = 0; rotation < 4; rotation++) {
    //             const rotatedDirections = [...DEFAULT_DIRECTIONS];
    //             rotatedDirections.rotate(rotation);
    //             const topo1Index = 0;
    //             const topo1Direction = rotatedDirections[topo1Index];
    //             for (let topo2Index = 1; topo2Index < 4; topo2Index++) {
    //                 const topo2Direction = rotatedDirections[topo2Index];
    //                 const assignment = {
    //                     ...DEFAULT_DIRECTION_ASSIGNMENT, [topo1Direction]: topo1, [topo2Direction]: topo2
    //                 };
    //                 this.computeAssignmentScore(assignment);
    //                 assignmentList.push(assignment);
    //             }
    //         }
    //         return assignmentList;
    //     }
    //
    //     if (topoVector.length === 3) {
    //         const assignmentList = [];
    //         const [topo1, topo2, topo3] = topoVector;
    //         // max rotation = direction - 1;
    //         for (let rotation = 0; rotation < 4; rotation++) {
    //             const rotatedDirections = [...DEFAULT_DIRECTIONS];
    //             rotatedDirections.rotate(rotation);
    //             const topo1Index = 0;
    //             const topo1Direction = rotatedDirections[topo1Index];
    //             for (let topo2Index = 1; topo2Index < 3; topo2Index++) {
    //                 const topo2Direction = rotatedDirections[topo2Index];
    //                 for (let topo3Index = topo2Index + 1; topo3Index < 4; topo3Index++) {
    //                     const topo3Direction = rotatedDirections[topo3Index];
    //                     const assignment = {
    //                         ...DEFAULT_DIRECTION_ASSIGNMENT,
    //                         [topo1Direction]: topo1,
    //                         [topo2Direction]: topo2,
    //                         [topo3Direction]: topo3,
    //                     };
    //                     this.computeAssignmentScore(assignment);
    //                     assignmentList.push(assignment);
    //                 }
    //             }
    //         }
    //         return assignmentList;
    //     }
    //
    //     if (topoVector.length === 4) {
    //
    //     }
    // }

    // assignment matching score
    // assume IN-OUT can only match IN-OUT for now
    // if any direction no match, return -1
    computeAssignmentScore(assignment) {
        assignment.score = 0;

        // match topo first
        if (!this.eastTopoRequirement.includes(assignment.EAST.topo) ||
            !this.northTopoRequirement.includes(assignment.NORTH.topo) ||
            !this.westTopoRequirement.includes(assignment.WEST.topo) ||
            !this.southTopoRequirement.includes(assignment.SOUTH.topo)) {
            assignment.score = -10;
            return;
        }

        // assume assignment east is "IN"
        // eastTopoRequirement = ["IN", 'OUT', 'IN-OUT', null] = 1 point
        // eastTopoRequirement = ["IN", 'IN-OUT', null] = 2 point
        // eastTopoRequirement = ["IN", null] = 3 point
        // eastTopoRequirement = ["IN"] = 4 point
        // when matched, the more specific requirement is, the higher score it gets.
        assignment.score += 5 - this.eastTopoRequirement.length;
        assignment.score += 5 - this.northTopoRequirement.length;
        assignment.score += 5 - this.southTopoRequirement.length;
        assignment.score += 5 - this.westTopoRequirement.length;

        // if necessary, calculate the angle match

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
            case null: {
                return [null];
            }
            default: {
                return [...DEFAULT_DIRECTION_REQUIREMENT];
            }
        }
    }

    assignJunctionCluster(junctionCluster, assignment) {
        this.junctionCluster = junctionCluster;

        this.EAST = assignment.EAST;
        this.NORTH = assignment.NORTH;
        this.WEST = assignment.WEST;
        this.SOUTH = assignment.SOUTH;

        // extend the grid
        {
            // east direction
            const xI = this.xI + 1;
            const yI = this.yI;
            let point = this.grid.getPointByID(JunctionGridPoint.formatGridPointId(xI, yI));
            if (!point) {
                point = this.grid.addPoint(xI, yI);
            }
            if (!point.junctionCluster) {
                // free point, add proper assignment
                point.westTopoRequirement = this.computeOppositeRequirement(this.EAST);
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
            if (!point.junctionCluster) {
                // free point, add proper assignment
                point.southTopoRequirement = this.computeOppositeRequirement(this.NORTH);
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
            if (!point.junctionCluster) {
                // free point, add proper assignment
                point.eastTopoRequirement = this.computeOppositeRequirement(this.WEST);
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
            if (!point.junctionCluster) {
                // free point, add proper assignment
                point.northTopoRequirement = this.computeOppositeRequirement(this.SOUTH);
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
        return this.pointList.filter(p => p.junctionCluster === null);
    }

    // find best match between free points and the junctionCluster.
    computeBestMatch(junctionCluster) {
        const freePoints = this.getFreePointList();

        if (freePoints.length === 0) {
            global.logE(this.name, "There is no free points in the junction grid...");
            process.exit(-1);
            return false;
        }

        const pointMatches = freePoints.map(point => ({
            point, assignment: point.computeBestClusterAssignment(junctionCluster)
        })).sort((m1, m2) => {
            return m2.assignment.score - m1.assignment.score;
        });

        return pointMatches[0];
    }
}

module.exports = {
    JunctionGrid, JunctionGridPoint, DEFAULT_DIRECTIONS
};