const {matchVectorRotation} = require("../../common/arrayUtils");
const JunctionRoadTopoGroup = require("./JunctionRoadTopoGroup");

class JunctionTopoGeoCluster {
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

    static extractJunctionTopoGeoInfo(junction) {
        const neighborList = junction.getConnectedJunctionAndRoad().sort((neighborA, neighborB) => {
            return junction.getNeighborCenterRotation(neighborA) - junction.getNeighborCenterRotation(neighborB);
        });

        return neighborList.map(neighbor => {
            const rotation = junction.getNeighborCenterRotation(neighbor);
            let topo;
            if (neighbor.incoming.hasOwnProperty(junction.id) && neighbor.outgoing.hasOwnProperty(junction.id)) {
                topo = "IN-OUT";
            } else if (neighbor.incoming.hasOwnProperty(junction.id)) {
                topo = "OUT";
            } else {
                topo = "IN";
            }
            return {topo, rotation};
        });
    }
}

module.exports = JunctionTopoGeoCluster;