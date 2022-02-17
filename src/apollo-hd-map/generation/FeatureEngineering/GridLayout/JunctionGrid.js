const {bound, degreeNormalize, degreeToRad} = require("../../../common/mathUtils");
const {
    DEFAULT_DIRECTION_REQUIREMENT,
    xIToX,
    yIToY,
    DEFAULT_DIRECTIONS,
    TOPO_MISMATCH_PENALTY, computeOppositeTopoRequirement, computeOppositeDegreeOptimal
} = require("./JunctionGridUtils");

class JunctionGridPoint {
    static formatGridPointId(xI, yI) {
        return `grid-point-(${xI},${yI})`;
    }

    constructor(grid, xI, yI,
                eastTopoRequirement = DEFAULT_DIRECTION_REQUIREMENT,
                northTopoRequirement = DEFAULT_DIRECTION_REQUIREMENT,
                westTopoRequirement = DEFAULT_DIRECTION_REQUIREMENT,
                southTopoRequirement = DEFAULT_DIRECTION_REQUIREMENT,
                eastDegreeOptimal = 0,
                northDegreeOptimal = 90,
                westDegreeOptimal = -180,
                southDegreeOptimal = -90
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

        this.eastDegreeOptimal = eastDegreeOptimal;
        this.northDegreeOptimal = northDegreeOptimal;
        this.westDegreeOptimal = westDegreeOptimal;
        this.southDegreeOptimal = southDegreeOptimal;

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

    validateAssignment(assignment) {
        let error = false;
        if (assignment.EAST.topo) {
            if (assignment.EAST.rotation < -45 || assignment.EAST.rotation >= 45) {
                global.logE(this.name, "east error");
                error = true;
            }
        }

        if (assignment.NORTH.topo) {
            if (assignment.NORTH.rotation < 45 || assignment.NORTH.rotation >= 135) {
                global.logE(this.name, "north error");
                error = true;
            }
        }

        if (assignment.WEST.topo) {
            if (assignment.WEST.rotation > 0 && assignment.WEST.rotation < 135) {
                global.logE(this.name, "west error");
                error = true;
            } else if (assignment.WEST.rotation < 0 && assignment.WEST.rotation >= -135) {
                global.logE(this.name, "west error");
                error = true;
            }
        }

        if (assignment.SOUTH.topo) {
            if (assignment.SOUTH.rotation < -135 || assignment.SOUTH.rotation >= -45) {
                global.logE(this.name, "south error");
                error = true;
            }
        }

        if (error) {
            assignment.junction = assignment.junction.id;
            global.logE(this.name, `assignment validation failed. ${JSON.stringify(assignment)}`);
            process.exit(-1);
        }
    }

    formatJunctionId() {
        return `J_${this.xI}_${this.yI}`;
    }

    computeBestJunctionAssignment(junction) {
        const assignmentList = [];
        const topoGeoInfo = JSON.parse(JSON.stringify(junction.topoGeoVector));

        // max rotation = direction - 1;
        for (let rotation = 0; rotation < 4; rotation++) {
            const rotatedDirections = [...DEFAULT_DIRECTIONS];
            rotatedDirections.rotate(rotation);
            const assignment = {
                [rotatedDirections[0]]: {
                    topo: topoGeoInfo[0].topo,
                    rotation: degreeNormalize(topoGeoInfo[0].rotation + rotation * 90)
                },
                [rotatedDirections[1]]: {
                    topo: topoGeoInfo[1] ? topoGeoInfo[1].topo : null,
                    rotation: topoGeoInfo[1] ? degreeNormalize(topoGeoInfo[1].rotation + rotation * 90) : null,
                },
                [rotatedDirections[2]]: {
                    topo: topoGeoInfo[2] ? topoGeoInfo[2].topo : null,
                    rotation: topoGeoInfo[2] ? degreeNormalize(topoGeoInfo[2].rotation + rotation * 90) : null,
                },
                [rotatedDirections[3]]: {
                    topo: topoGeoInfo[3] ? topoGeoInfo[3].topo : null,
                    rotation: topoGeoInfo[3] ? degreeNormalize(topoGeoInfo[3].rotation + rotation * 90) : null
                },
                junction,
            };
            this.validateAssignment(assignment);

            this.computeAssignmentScore(assignment);

            this.validateAssignment(assignment);

            assignmentList.push(assignment);
        }

        assignmentList.sort((a, b) => b.score - a.score);

        return assignmentList[0];
    }

    // find best matching score of each junction in the cluster
    computeBestClusterAssignment(junctionCluster) {
        const junctionAssignmentList = Object.values(junctionCluster.junctionList)
            .map(junction => this.computeBestJunctionAssignment(junction))
            .sort((a, b) => {
                return b.score - a.score;
            });

        return junctionAssignmentList[0];
    }

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
            assignment.score = TOPO_MISMATCH_PENALTY;
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

        // calculate the angle match
        // rotate the junction according to the angle optimal so that the sum of the error is minimum.
        let deltaMin = Number.NEGATIVE_INFINITY, deltaMax = Number.POSITIVE_INFINITY;
        let angleDiff = [];

        if (assignment.EAST.topo) {
            deltaMin = Math.max(deltaMin, degreeNormalize(-45 - assignment.EAST.rotation));
            deltaMax = Math.min(deltaMax, degreeNormalize(45 - assignment.EAST.rotation));
            angleDiff.push(degreeNormalize(this.eastDegreeOptimal - assignment.EAST.rotation));
        }

        if (assignment.NORTH.topo) {
            deltaMin = Math.max(deltaMin, degreeNormalize(45 - assignment.NORTH.rotation));
            deltaMax = Math.min(deltaMax, degreeNormalize(135 - assignment.NORTH.rotation));
            angleDiff.push(degreeNormalize(this.northDegreeOptimal - assignment.NORTH.rotation));
        }

        if (assignment.WEST.topo) {
            deltaMin = Math.max(deltaMin, degreeNormalize(135 - assignment.WEST.rotation));
            deltaMax = Math.min(deltaMax, degreeNormalize(-135 - assignment.WEST.rotation));
            angleDiff.push(degreeNormalize(this.westDegreeOptimal - assignment.WEST.rotation));
        }

        if (assignment.SOUTH.topo) {
            deltaMin = Math.max(deltaMin, degreeNormalize(-135 - assignment.SOUTH.rotation));
            deltaMax = Math.min(deltaMax, degreeNormalize(-45 - assignment.SOUTH.rotation));
            angleDiff.push(degreeNormalize(this.southDegreeOptimal - assignment.SOUTH.rotation));
        }

        // shrink the bound further so that the road does not fall on the separation line
        deltaMin *= 0.9;
        deltaMax *= 0.9;
        const degreeNorm = bound(angleDiff.average(), deltaMin, deltaMax);

        angleDiff = [];

        if (assignment.EAST.topo) {
            assignment.EAST.rotation = degreeNormalize(degreeNorm + assignment.EAST.rotation);
            angleDiff.push(Math.abs(degreeNormalize(this.eastDegreeOptimal - assignment.EAST.rotation)));
        }

        if (assignment.NORTH.topo) {
            assignment.NORTH.rotation = degreeNormalize(degreeNorm + assignment.NORTH.rotation);
            angleDiff.push(Math.abs(degreeNormalize(this.northDegreeOptimal - assignment.NORTH.rotation)));
        }

        if (assignment.WEST.topo) {
            assignment.WEST.rotation = degreeNormalize(degreeNorm + assignment.WEST.rotation);
            angleDiff.push(Math.abs(degreeNormalize(this.westDegreeOptimal - assignment.WEST.rotation)));
        }

        if (assignment.SOUTH.topo) {
            assignment.SOUTH.rotation = degreeNormalize(degreeNorm + assignment.SOUTH.rotation);
            angleDiff.push(Math.abs(degreeNormalize(this.southDegreeOptimal - assignment.SOUTH.rotation)));
        }

        // console.log(assignment, angleDiff);

        // match the topo error scale
        // use average instead of sum so that two legged junctions will have no precedence over four legged junctions.
        assignment.score -= degreeToRad(angleDiff.average());
    }

    assignJunctionCluster(junctionCluster, assignment) {
        this.junctionCluster = junctionCluster;

        this.EAST = assignment.EAST;
        this.NORTH = assignment.NORTH;
        this.WEST = assignment.WEST;
        this.SOUTH = assignment.SOUTH;

        // extend the grid
        if (this.EAST) {
            // east direction
            const xI = this.xI + 1;
            const yI = this.yI;
            let point = this.grid.getPointByID(JunctionGridPoint.formatGridPointId(xI, yI));
            if (!point) {
                point = this.grid.addPoint(xI, yI);
            }
            if (!point.junctionCluster) {
                // free point, add proper assignment
                point.westTopoRequirement = computeOppositeTopoRequirement(this.EAST.topo);
                point.westDegreeOptimal = computeOppositeDegreeOptimal("EAST", this.EAST.rotation);
            } else {
                // do nothing as it's already assigned a topo group.
            }
        }

        if (this.NORTH) {
            // north direction
            const xI = this.xI;
            const yI = this.yI + 1;
            let point = this.grid.getPointByID(JunctionGridPoint.formatGridPointId(xI, yI));
            if (!point) {
                point = this.grid.addPoint(xI, yI);
            }
            if (!point.junctionCluster) {
                // free point, add proper assignment
                point.southTopoRequirement = computeOppositeTopoRequirement(this.NORTH.topo);
                point.southDegreeOptimal = computeOppositeDegreeOptimal("NORTH", this.NORTH.rotation);
            } else {
                // do nothing as it's already assigned a topo group.
            }
        }

        if (this.WEST) {
            // west direction
            const xI = this.xI - 1;
            const yI = this.yI;
            let point = this.grid.getPointByID(JunctionGridPoint.formatGridPointId(xI, yI));
            if (!point) {
                point = this.grid.addPoint(xI, yI);
            }
            if (!point.junctionCluster) {
                // free point, add proper assignment
                point.eastTopoRequirement = computeOppositeTopoRequirement(this.WEST.topo);
                point.eastDegreeOptimal = computeOppositeDegreeOptimal("WEST", this.WEST.rotation);
            } else {
                // do nothing as it's already assigned a topo group.
            }
        }

        if (this.SOUTH) {
            // south direction
            const xI = this.xI;
            const yI = this.yI - 1;
            let point = this.grid.getPointByID(JunctionGridPoint.formatGridPointId(xI, yI));
            if (!point) {
                point = this.grid.addPoint(xI, yI);
            }
            if (!point.junctionCluster) {
                // free point, add proper assignment
                point.northTopoRequirement = computeOppositeTopoRequirement(this.SOUTH.topo);
                point.northDegreeOptimal = computeOppositeDegreeOptimal("SOUTH", this.EAST.rotation);
            } else {
                // do nothing as it's already assigned a topo group.
            }
        }
        console.log(this.grid);
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
    // generate assignment and compute match score
    computeBestMatch(junctionCluster) {
        const freePoints = this.getFreePointList();

        if (freePoints.length === 0) {
            global.logE(this.name, "There is no free points in the junction grid...");
            process.exit(-1);
            return false;
        }

        const pointMatches = freePoints.map(point => ({
            point, assignment: point.computeBestClusterAssignment(junctionCluster),
        })).sort((m1, m2) => {
            return m2.assignment.score - m1.assignment.score;
        });

        return pointMatches[0];
    }
}

module.exports = {
    JunctionGrid,
    JunctionGridPoint,
};