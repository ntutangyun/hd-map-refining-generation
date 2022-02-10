// junction topology is now represented by the sequence of in-out road types.
// e.g. [in, in, inout, out] for a four road junction
// note that all the roads are now two-way roads.
const {matchVectorRotation} = require("../../common/arrayUtils");

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
        const neighborList = junction.getConnectedJunctionAndRoad().sort((neighborA, neighborB) => {
            return junction.getNeighborCenterRotation(neighborA) - junction.getNeighborCenterRotation(neighborB);
        });

        return neighborList.map(neighbor => {
            if (neighbor.incoming.hasOwnProperty(junction.id) && neighbor.outgoing.hasOwnProperty(junction.id)) {
                return "IN-OUT";
            }

            if (neighbor.incoming.hasOwnProperty(junction.id)) {
                return "OUT";
            }

            return "IN";
        });
    }
}

module.exports = JunctionRoadTopoGroup;