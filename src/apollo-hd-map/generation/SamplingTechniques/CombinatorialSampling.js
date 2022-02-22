const {getRandomInRange, degreeNormalize} = require("../../common/mathUtils");

function combinatorialSampling({roadFeatures, geoFeatures, controlFeatures, auxiliaryFeatures}) {
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
                                rotation: getRandomInRange(geoFeatures.NORTH.min, geoFeatures.NORTH.max) + 90,
                            },
                            {   // west
                                topo: "IN-OUT",
                                rotation: degreeNormalize(getRandomInRange(geoFeatures.WEST.min, geoFeatures.WEST.max) + 180),
                            },
                        ],
                        hasCrosswalk: auxFeature === "crosswalk",
                        hasSignal: controlFeature === "signal",
                        hasStopSign: controlFeature === "stop",
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
                                rotation: degreeNormalize(getRandomInRange(geoFeatures.NORTH.min, geoFeatures.NORTH.max) + 90),
                            },
                            {   // west
                                topo: "IN-OUT",
                                rotation: degreeNormalize(getRandomInRange(geoFeatures.WEST.min, geoFeatures.WEST.max) + 180),
                            },
                            {   // south
                                topo: "IN-OUT",
                                rotation: degreeNormalize(getRandomInRange(geoFeatures.SOUTH.min, geoFeatures.SOUTH.max) - 90),
                            },
                        ],
                        hasCrosswalk: auxFeature === "crosswalk",
                        hasSignal: controlFeature === "signal",
                        hasStopSign: controlFeature === "stop",
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

