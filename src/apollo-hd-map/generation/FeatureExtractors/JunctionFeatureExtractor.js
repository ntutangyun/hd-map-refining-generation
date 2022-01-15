// junction topology is now represented by the sequence of in-out road types.
// e.g. [in, in, inout, out] for a four road junction
// note that all the roads are now two-way roads.

const {angleNormalize, vectorHeading, vector} = require("../../common/ApolloHDMap/Geometry");

class JunctionRoadTopoGroup {
    constructor(firstJunction) {
        this.junctionList = [firstJunction];
        this.roadTopo = JunctionRoadTopoGroup.extractRoadTopology(firstJunction);
    }

    tryAdd(junction) {
        const roadTopology = JunctionRoadTopoGroup.extractRoadTopology(junction);
        console.log(roadTopology);
        return false;
    }

    static extractRoadTopology(junction) {
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
        console.log(roadList);

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
    constructor(graph) {
        this.graph = graph;
        this.roadTopoGroupList = [];
    }

    computeRoadTopoGroups() {
        console.log(this.graph);

        this.roadTopoGroupList = [];
        const junctionList = this.graph.getJunctionList();
        junctionList.forEach(junction => {
            let junctionAdded = false;
            for (const roadTopoGroup of this.roadTopoGroupList) {
                if (roadTopoGroup.tryAdd(junction)) {
                    junctionAdded = true;
                    break;
                }
            }
            if (!junctionAdded) {
                this.roadTopoGroupList.push(new JunctionRoadTopoGroup(junction));
            }
        });
    }
}

module.exports = JunctionFeatureExtractor;