const JunctionTopoGeoCluster = require("./JunctionTopoGeoCluster");
const FREE_SPACE_START_OFFSET_X = 10000;
const FREE_SPACE_START_OFFSET_Y = 10000;
const FREE_SPACE_POINT_MARGIN = 100;

class JunctionFreeSpacePoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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

    assign(assignment) {
        this.assignment = assignment.assignment;

        // update requirement
    }

    findBestMatchToCluster(junctionCluster) {
        const assignmentList = Object.values(junctionCluster.junctionList)
            .map(junction => this.tryAssign(junction))
            .sort((a, b) => b.score - a.score);
        return assignmentList[0];
    }

    tryAssign(junction) {
        if (this.requirements.length === 0) {
            // if the point is free of requirements
            // align the junction using its original assignment
            const topoGeoInfo = JunctionTopoGeoCluster.extractJunctionTopoGeoInfo(junction);
            return {
                point: this, junction, score: 1, assignment: [...topoGeoInfo]
            };
        }

        return {
            point: this, junction, score: 1, assignment: null,
        };
    }
}

class JunctionFreeSpaceLayout {
    constructor() {
        this.pointList = [
            new JunctionFreeSpacePoint(FREE_SPACE_START_OFFSET_X, FREE_SPACE_START_OFFSET_Y)
        ];
    }

    get name() {
        return this.constructor.name;
    }

    getFreePoints() {
        return this.pointList.filter(p => p.assignment === null);
    }

    computeBestMatch(junctionCluster) {
        const freePoints = this.getFreePoints().sort((p1, p2) => {
            return p2.findBestMatchToCluster(junctionCluster).score - p1.findBestMatchToCluster(junctionCluster).score;
        });

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