const {degreeNormalize, getRandomInRange, bound} = require("../../common/mathUtils");

function combinatorialSampling({roadFeatures, geoFeatures, controlFeatures, auxiliaryFeatures}) {

    let configCount = 0;

    const junctionConfigs = [];
    roadFeatures.forEach(roadFeature => {
        controlFeatures.forEach(controlFeature => {
            auxiliaryFeatures.forEach(auxFeature => {

                let junctionConfig;

                if (roadFeature === "three") {
                    junctionConfig = {
                        topoGeoVector: [
                            {   // east
                                topo: "IN-OUT",
                                rotation: 0,
                            },
                            {   // north
                                topo: "IN-OUT",
                                rotation: degreeNormalize(bound(getRandomInRange(geoFeatures.NORTH.min, geoFeatures.NORTH.max), -15, 15) + 90),
                            },
                            {   // west
                                topo: "IN-OUT",
                                rotation: degreeNormalize(bound(getRandomInRange(geoFeatures.WEST.min, geoFeatures.WEST.max), -15, 15) + 180),
                            },
                        ],
                        hasCrosswalk: auxFeature === "crosswalk",
                        hasSignal: controlFeature === "signal",
                        hasStopSign: controlFeature === "stop",
                        id: `junction_config_${configCount++}`
                    };
                } else {
                    junctionConfig = {
                        topoGeoVector: [
                            {   // east
                                topo: "IN-OUT",
                                rotation: 0,
                            },
                            {   // north
                                topo: "IN-OUT",
                                rotation: degreeNormalize(bound(getRandomInRange(geoFeatures.NORTH.min, geoFeatures.NORTH.max), -15, 15) + 90),
                            },
                            {   // west
                                topo: "IN-OUT",
                                rotation: degreeNormalize(bound(getRandomInRange(geoFeatures.WEST.min, geoFeatures.WEST.max), -15, 15) + 180),
                            },
                            {   // south
                                topo: "IN-OUT",
                                rotation: degreeNormalize(bound(getRandomInRange(geoFeatures.SOUTH.min, geoFeatures.SOUTH.max), -15, 15) - 90),
                            },
                        ],
                        hasCrosswalk: auxFeature === "crosswalk",
                        hasSignal: controlFeature === "signal",
                        hasStopSign: controlFeature === "stop",
                        id: `junction_config_${configCount++}`
                    };
                }

                junctionConfigs.push(junctionConfig);
            });
        });
    });

    return junctionConfigs;
}

module.exports = {
    combinatorialSampling
};

