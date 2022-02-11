const {matchVectorRotation} = require("../../../common/arrayUtils");

class JunctionTopoGeoCluster {
    constructor(firstJunction) {
        this.junctionList = {[firstJunction.id]: firstJunction};
        this.topoGeoVector = JSON.parse(JSON.stringify(firstJunction.topoGeoVector));
    }

    tryAdd(junction) {
        if (this.junctionList.hasOwnProperty(junction.id)) {
            return true;
        }
        const topoGeoVectorCopy = JSON.parse(JSON.stringify(junction.topoGeoVector));
        if (matchVectorRotation(this.topoGeoVector.map(e => e ? e.topo : null), topoGeoVectorCopy.map(e => e ? e.topo : null))) {
            this.junctionList[junction.id] = junction;
            return true;
        }

        return false;
    }

    // static extractJunctionTopoGeoInfo(junction) {
    //     const neighborList = junction.getConnectedJunctionAndRoad().sort((neighborA, neighborB) => {
    //         return junction.getNeighborCenterRotation(neighborA) - junction.getNeighborCenterRotation(neighborB);
    //     });
    //
    //     return neighborList.map(neighbor => {
    //         const rotation = junction.getNeighborCenterRotation(neighbor);
    //         let topo;
    //         if (neighbor.incoming.hasOwnProperty(junction.id) && neighbor.outgoing.hasOwnProperty(junction.id)) {
    //             topo = "IN-OUT";
    //         } else if (neighbor.incoming.hasOwnProperty(junction.id)) {
    //             topo = "OUT";
    //         } else {
    //             topo = "IN";
    //         }
    //         return {topo, rotation};
    //     });
    // }
}

module.exports = JunctionTopoGeoCluster;