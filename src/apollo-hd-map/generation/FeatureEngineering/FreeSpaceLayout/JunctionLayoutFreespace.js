const JunctionTopoGeoCluster = require("../GridLayout/JunctionTopoGeoCluster");
const {Point, angleNormalize} = require("../../../common/ApolloHDMap/Geometry");
const FREE_SPACE_START_OFFSET_X = 10000;
const FREE_SPACE_START_OFFSET_Y = 10000;
const FREE_SPACE_POINT_MARGIN = 100;

class JunctionFreeSpacePoint extends Point {
    constructor(layout, x, y, z = 0) {
        super(x, y, z);
        this.layout = layout;
        this.assignment = null;

        // requirement is a list of typo-geometry pairs
        // [
        //      ["IN", 0],
        //      ["OUT", 90],
        //      ["IN-OUT", 180],
        //      ["IN-OUT", -90]
        // ]
        this.requirements = [];
    }

    get name() {
        return this.constructor.name;
    }

    computeOppositeRequirement(directionTopo) {
        switch (directionTopo) {
            case "IN": {
                return "OUT";
            }
            case "OUT": {
                return "IN";
            }
            case "IN-OUT": {
                return "IN-OUT";
            }
            default: {
                global.logE(this.name, `Direction topo ${directionTopo} is incorrect.`);
            }
        }
    }

    assign(assignment) {
        this.assignment = assignment.assignment;

        // add new points
        this.assignment.forEach((topoAssignment) => {
            const newPointLocation = this.moveTowards(topoAssignment.rotation, FREE_SPACE_POINT_MARGIN);
            const newFreePoint = new JunctionFreeSpacePoint(this.layout, newPointLocation.x, newPointLocation.y, newPointLocation.z);
            newFreePoint.requirements.push({
                topo: this.computeOppositeRequirement(topoAssignment.topo),
                rotation: angleNormalize(topoAssignment.rotation + Math.PI),
                oppositePoint: this,
            });
            this.layout.addPoint(newFreePoint);
            topoAssignment.oppositePoint = newFreePoint;
        });
    }

    findBestMatchToCluster(junctionCluster) {
        const assignmentList = Object.values(junctionCluster.junctionList)
            .map(junction => this.tryAssign(junction))
            .filter(assignment => assignment !== null)
            .sort((a, b) => b.score - a.score);

        if (assignmentList.length > 0) {
            return assignmentList[0];
        }
        return null;
    }

    // default score is zero, mismatch will minus points.
    tryAssign(junction) {
        const topoGeoInfo = JunctionTopoGeoCluster.extractJunctionTopoGeoInfo(junction);
        if (this.requirements.length === 0) {
            // if the point is free of requirements
            // align the junction using its original assignment
            return {
                point: this, junction, score: 0, assignment: [...topoGeoInfo]
            };
        } else if (this.requirements.length === 1) {
            const requirement = this.requirements[0];
            // topo: this.computeOppositeRequirement(topoAssignment.topo),
            // rotation: angleNormalize(topoAssignment.rotation + Math.PI),
            // oppositePoint: this
            const requiredTopo = requirement.topo;

            const matchTopoRotationCount = topoGeoInfo.findIndex(topoGeo => topoGeo.topo === requiredTopo);
            if (matchTopoRotationCount < 0) {
                global.logI(this.name, `cannot find any match on the topo ${requiredTopo} in cluster junction: ${JSON.stringify(topoGeoInfo)}`);
                return null;
            }
            topoGeoInfo.rotate(matchTopoRotationCount);
            const normalizeAngle = requirement.rotation - topoGeoInfo[0].rotation;
            topoGeoInfo.forEach(topoGeo => {
                topoGeo.rotation = angleNormalize(normalizeAngle + topoGeo.rotation);
            });
            return {
                point: this, junction, score: 0, assignment: [...topoGeoInfo]
            };
        }

        // requirements length > 1
        console.log("this should not happen");
        global.logE(this.name, "this should not happen.");
        process.exit(-1);
    }
}

class JunctionFreeSpaceLayout {
    constructor() {
        this.pointList = [
            new JunctionFreeSpacePoint(this, FREE_SPACE_START_OFFSET_X, FREE_SPACE_START_OFFSET_Y)
        ];
    }

    get name() {
        return this.constructor.name;
    }

    addPoint(newFreePoint) {
        this.pointList.push(newFreePoint);

        // todo: merge point?
    }

    getFreePoints() {
        return this.pointList.filter(p => p.assignment === null);
    }

    computeBestMatch(junctionCluster) {
        const freePoints = this.getFreePoints().filter(p => p.findBestMatchToCluster(junctionCluster))
            .sort((p1, p2) => {
                console.log(p1.findBestMatchToCluster(junctionCluster));
                console.log(p2.findBestMatchToCluster(junctionCluster));
                return p2.findBestMatchToCluster(junctionCluster).score - p1.findBestMatchToCluster(junctionCluster).score;
            });
        if (freePoints.length === 0) {
            console.log("test");
        }
        const freePointWithBestMatch = freePoints.shift();

        const bestMatch = freePointWithBestMatch.findBestMatchToCluster(junctionCluster);

        if (bestMatch.score < 0) {
            global.logE(this.name, "cannot find any best match ...");
            process.exit(-1);
        }
        return bestMatch;
    }
}

// sample one junction from each cluster first
function buildFreeSpaceLayout(junctionClusters) {
    const freeSpaceLayout = new JunctionFreeSpaceLayout();

    const clusters = [...junctionClusters];

    while (clusters.length > 0) {
        clusters.sort((c1, c2) => {
            return freeSpaceLayout.computeBestMatch(c2).score - freeSpaceLayout.computeBestMatch(c1).score;
        });

        const junctionCluster = clusters.shift();
        const assignment = freeSpaceLayout.computeBestMatch(junctionCluster);

        if (assignment.score < 0) {
            global.logE("BUILD_FREE_SPACE_LAYOUT", "Cannot find a match for current cluster. Please try run again.");
            process.exit(-1);
        }

        assignment.point.assign(assignment);
    }

    return freeSpaceLayout;
}


module.exports = {
    buildFreeSpaceLayout,
};