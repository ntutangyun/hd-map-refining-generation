const JunctionRoadTopoGroup = require("./GridLayout/JunctionRoadTopoGroup");
const JunctionTopoGeoCluster = require("./GridLayout/JunctionTopoGeoCluster");
const {degreeNormalize} = require("../../common/mathUtils");

const mapJunctionBlacklist = {
    "go_mentum": ["J_0", "J_1", "J_7", "J_20", "J_29"], "shalun": ["J_8"]
};


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

function getInitialRotationFeature(numberOfRoad) {
    const rotFeature = [];
    for (let i = 0; i < numberOfRoad; i++) {
        rotFeature.push({min: 0, max: 0});
    }
    return rotFeature;
}

function extractMapFeature(graph) {
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
    const rotFeature = {};
    const controlFeatures = new Set();
    const auxiliaryFeatures = new Set();

    const junctionList = graph.getJunctionList()
        .filter(junction => junction.getConnectedJunctionAndRoad().length <= 4)
        .filter(junction => {
            return !(mapJunctionBlacklist.hasOwnProperty(graph.graphName) && mapJunctionBlacklist[graph.graphName].includes(junction.id));
        });
    junctionList.forEach(j => j.computeTopoGeoVector());

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

        if (!rotFeature.hasOwnProperty(neighborCount)) {
            rotFeature[neighborCount] = getInitialRotationFeature(neighborCount);
        }

        const roadRotationList = [];

        // geometry features -- records the difference.
        // east
        if (junction.topoGeoVector[0]) {
            geoFeatures.EAST.min = Math.min(geoFeatures.EAST.min, junction.topoGeoVector[0].rotation);
            geoFeatures.EAST.max = Math.max(geoFeatures.EAST.max, junction.topoGeoVector[0].rotation);
            roadRotationList.push(junction.topoGeoVector[0].rotation);
        }
        // north
        if (junction.topoGeoVector[1]) {
            const normalizedDiffDegree = degreeNormalize(junction.topoGeoVector[1].rotation - 90);
            geoFeatures.NORTH.min = Math.min(geoFeatures.NORTH.min, normalizedDiffDegree);
            geoFeatures.NORTH.max = Math.max(geoFeatures.NORTH.max, normalizedDiffDegree);
            roadRotationList.push(normalizedDiffDegree);
        }
        // west
        if (junction.topoGeoVector[2]) {
            const normalizedDiffDegree = degreeNormalize(junction.topoGeoVector[2].rotation - 180);
            geoFeatures.WEST.min = Math.min(geoFeatures.WEST.min, normalizedDiffDegree);
            geoFeatures.WEST.max = Math.max(geoFeatures.WEST.max, normalizedDiffDegree);
            roadRotationList.push(normalizedDiffDegree);
        }
        // south
        if (junction.topoGeoVector[3]) {
            const normalizedDiffDegree = degreeNormalize(junction.topoGeoVector[3].rotation + 90);
            geoFeatures.SOUTH.min = Math.min(geoFeatures.SOUTH.min, normalizedDiffDegree);
            geoFeatures.SOUTH.max = Math.max(geoFeatures.SOUTH.max, normalizedDiffDegree);
            roadRotationList.push(normalizedDiffDegree);
        }

        for (let i = 0; i < roadRotationList.length; i++) {
            rotFeature[neighborCount][i].min = Math.min(rotFeature[neighborCount][i].min, roadRotationList[i]);
            rotFeature[neighborCount][i].max = Math.max(rotFeature[neighborCount][i].max, roadRotationList[i]);
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
        roadFeatures, geoFeatures, controlFeatures, auxiliaryFeatures, rotFeature
    };
}

function mergeMapFeature(rootFeature, featureToMerge) {
    const {roadFeatures, geoFeatures, controlFeatures, auxiliaryFeatures, rotFeature} = featureToMerge;

    // merge road features
    Array.from(roadFeatures).forEach(roadFeature => {
        rootFeature.roadFeatures.add(roadFeature);
    });

    // merge control features
    Array.from(controlFeatures).forEach(controlFeature => {
        rootFeature.controlFeatures.add(controlFeature);
    });

    // merge aux features
    Array.from(auxiliaryFeatures).forEach(auxFeature => {
        rootFeature.auxiliaryFeatures.add(auxFeature);
    });

    // merge geo features
    rootFeature.geoFeatures.EAST.min = Math.min(geoFeatures.EAST.min, rootFeature.geoFeatures.EAST.min);
    rootFeature.geoFeatures.EAST.max = Math.max(geoFeatures.EAST.max, rootFeature.geoFeatures.EAST.max);

    rootFeature.geoFeatures.NORTH.min = Math.min(geoFeatures.NORTH.min, rootFeature.geoFeatures.NORTH.min);
    rootFeature.geoFeatures.NORTH.max = Math.max(geoFeatures.NORTH.max, rootFeature.geoFeatures.NORTH.max);

    rootFeature.geoFeatures.WEST.min = Math.min(geoFeatures.WEST.min, rootFeature.geoFeatures.WEST.min);
    rootFeature.geoFeatures.WEST.max = Math.max(geoFeatures.WEST.max, rootFeature.geoFeatures.WEST.max);

    rootFeature.geoFeatures.SOUTH.min = Math.min(geoFeatures.SOUTH.min, rootFeature.geoFeatures.SOUTH.min);
    rootFeature.geoFeatures.SOUTH.max = Math.max(geoFeatures.SOUTH.max, rootFeature.geoFeatures.SOUTH.max);

    // merge rotation feature
    Object.entries(rotFeature).forEach(([nRoad, rotArray]) => {
        if (!rootFeature.rotFeature.hasOwnProperty(nRoad)) {
            rootFeature.rotFeature[nRoad] = JSON.parse(JSON.stringify(rotArray));
        } else {
            for (let i = 0; i < +nRoad; i++) {
                rootFeature.rotFeature[nRoad][i].min = Math.min(rootFeature.rotFeature[nRoad][i].min, rotFeature[nRoad][i].min);
                rootFeature.rotFeature[nRoad][i].max = Math.max(rootFeature.rotFeature[nRoad][i].max, rotFeature[nRoad][i].max);
            }
        }
    });
}


module.exports = {
    junctionTopoGeoClustering, computeRoadTopoGroups, extractMapFeature, mergeMapFeature
};