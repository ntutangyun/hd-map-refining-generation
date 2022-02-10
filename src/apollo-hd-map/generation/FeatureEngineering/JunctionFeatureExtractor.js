const JunctionRoadTopoGroup = require("./JunctionRoadTopoGroup");
const JunctionTopoGeoCluster = require("./JunctionTopoGeoCluster");

class JunctionFeatureExtractor {
    static computeRoadTopoGroups(graph) {
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

    static junctionTopoGeoClustering(graph) {
        const junctionList = graph.getJunctionList();

        const junctionListWithTopoGeoInfo = graph.getJunctionList().map(junction => {
            const feature = JunctionTopoGeoCluster.extractJunctionTopoGeoInfo(junction);
            return {
                junction, feature
            };
        });

        return junctionList;
    }
}

module.exports = JunctionFeatureExtractor;