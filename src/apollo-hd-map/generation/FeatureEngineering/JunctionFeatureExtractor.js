const {vectorHeading, vector} = require("../../common/ApolloHDMap/Geometry");
const {matchVectorRotation} = require("../../common/arrayUtils");

// junction topology is now represented by the sequence of in-out road types.
// e.g. [in, in, inout, out] for a four road junction
// note that all the roads are now two-way roads.
class JunctionRoadTopoGroup {
    constructor(firstJunction) {
        this.junctionList = {[firstJunction.id]: firstJunction};
        this.roadTopoVec = JunctionRoadTopoGroup.extractRoadTopoVector(firstJunction);
    }

    tryAdd(junction) {
        if (this.junctionList.hasOwnProperty(junction.id)) {
            return true;
        }

        const roadTopoVector = JunctionRoadTopoGroup.extractRoadTopoVector(junction);

        if (matchVectorRotation(this.roadTopoVec, roadTopoVector)) {
            this.junctionList[junction.id] = junction;
            return true;
        }

        return false;
    }

    static extractRoadTopoVector(junction) {
        const roadList = junction.getRoadList().sort((roadA, roadB) => {
            const junctionCenter = junction.getPolygonCenter();

            const roadAOutgoing = junction.isRoadOutgoing(roadA);
            const roadBOutgoing = junction.isRoadOutgoing(roadB);

            const roadACurvePoint = roadAOutgoing ? roadA.startPoint : roadA.endPoint;
            const roadBCurvePoint = roadBOutgoing ? roadB.startPoint : roadB.endPoint;

            const roadARotation = vectorHeading(vector(junctionCenter, roadACurvePoint));
            const roadBRotation = vectorHeading(vector(junctionCenter, roadBCurvePoint));

            return roadARotation - roadBRotation;
        });

        return roadList.map(road => {
            if (road.incoming.hasOwnProperty(junction.id) && road.outgoing.hasOwnProperty(junction.id)) {
                return "IN-OUT";
            }

            if (road.incoming.hasOwnProperty(junction.id)) {
                return "OUT";
            }

            return "IN";
        });
    }
}

class JunctionFeatureExtractor {
    static computeRoadTopoGroups(graph) {
        const roadTopoGroupList = [];
        const junctionList = graph.getJunctionList();
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

}

module.exports = JunctionFeatureExtractor;