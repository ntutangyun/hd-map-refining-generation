const JunctionRoadTopoGroup = require("./GridLayout/JunctionRoadTopoGroup");
const JunctionTopoGeoCluster = require("./GridLayout/JunctionTopoGeoCluster");
const {degreeNormalize} = require("../../common/mathUtils");


function computeRoadTopoGroups(graph) {
    const roadTopoGroupList = [];
    // currently, only support junctions with four connected roads.
    // for the shalun map, the mega-junction with 8 connected roads can be modified to 4-road junctions.
    const junctionList = graph.getJunctionList().filter(junction => junction.getConnectedJunctionAndRoad().length <= 4);

    junctionList.forEach(junction => {
        let junctionAdded = false;
        for (const roadTopoGroup of roadTopoGroupList) {
            if (roadTopoGroup.tryAdd(junction)) {
                junctionAdded = true;
                break;
            }
        }
        if (!junctionAdded) {
            roadTopoGroupList.push(new JunctionRoadTopoGroup(junction));
        }
    });

    return roadTopoGroupList;
}

function junctionTopoGeoClustering(graph) {
    const junctionTopoGeoClusters = [];

    const junctionList = graph.getJunctionList().filter(junction => junction.getConnectedJunctionAndRoad().length <= 4);
    junctionList.forEach(j => j.computeTopoGeoVector());

    junctionList.forEach(junction => {
        let junctionAdded = false;
        for (const cluster of junctionTopoGeoClusters) {
            if (cluster.tryAdd(junction)) {
                junctionAdded = true;
                break;
            }
        }
        if (!junctionAdded) {
            junctionTopoGeoClusters.push(new JunctionTopoGeoCluster(junction));
        }
    });

    return junctionTopoGeoClusters;
}

function junctionFeatureMergeExtraction(graph) {
    const roadFeatures = new Set();
    const geoFeatures = {
        EAST: {
            min: 0, max: 0
        }, NORTH: {
            min: 0, max: 0
        }, WEST: {
            min: 0, max: 0
        }, SOUTH: {
            min: 0, max: 0
        }
    };
    const controlFeatures = new Set();
    const auxiliaryFeatures = new Set();

    const junctionList = graph.getJunctionList().filter(junction => junction.getConnectedJunctionAndRoad().length <= 4);
    junctionList.forEach(j => j.computeTopoGeoVector());

    console.log(junctionList);

    junctionList.forEach(junction => {
        const neighborCount = junction.getConnectedJunctionAndRoad().length;
        // ignore junctions other than T-junction or four-legged intersections.
        if (neighborCount < 3 || neighborCount > 4) {
            return;
        }

        // road features
        if (neighborCount === 3) {
            roadFeatures.add("three");
        } else if (neighborCount === 4) {
            roadFeatures.add("four");
        }

        // geometry features -- records the difference.
        // east
        if (junction.topoGeoVector[0]) {
            geoFeatures.EAST.min = Math.min(geoFeatures.EAST.min, junction.topoGeoVector[0].rotation);
            geoFeatures.EAST.max = Math.max(geoFeatures.EAST.max, junction.topoGeoVector[0].rotation);
        }
        // north
        if (junction.topoGeoVector[1]) {
            const normalizedDiffDegree = degreeNormalize(junction.topoGeoVector[1].rotation - 90);
            geoFeatures.NORTH.min = Math.min(geoFeatures.NORTH.min, normalizedDiffDegree);
            geoFeatures.NORTH.max = Math.max(geoFeatures.NORTH.max, normalizedDiffDegree);
        }
        // west
        if (junction.topoGeoVector[2]) {
            const normalizedDiffDegree = degreeNormalize(junction.topoGeoVector[2].rotation - 180);
            geoFeatures.WEST.min = Math.min(geoFeatures.WEST.min, normalizedDiffDegree);
            geoFeatures.WEST.max = Math.max(geoFeatures.WEST.max, normalizedDiffDegree);
        }

        // south
        if (junction.topoGeoVector[3]) {
            const normalizedDiffDegree = degreeNormalize(junction.topoGeoVector[3].rotation + 90);
            geoFeatures.SOUTH.min = Math.min(geoFeatures.SOUTH.min, normalizedDiffDegree);
            geoFeatures.SOUTH.max = Math.max(geoFeatures.SOUTH.max, normalizedDiffDegree);
        }

        if (junction.getSignalList().length > 0) {
            controlFeatures.add("signal");
        } else if (junction.getStopSignList().length > 0) {
            controlFeatures.add("stop");
        } else {
            controlFeatures.add("bare");
        }

        if (junction.getCrosswalkList().length > 0) {
            auxiliaryFeatures.add("crosswalk");
        } else {
            auxiliaryFeatures.add("null");
        }
    });

    return {
        roadFeatures, geoFeatures, controlFeatures, auxiliaryFeatures
    };
}


module.exports = {
    junctionTopoGeoClustering, computeRoadTopoGroups, junctionFeatureMergeExtraction
};