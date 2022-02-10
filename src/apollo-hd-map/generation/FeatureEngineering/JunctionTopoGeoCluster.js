class JunctionTopoGeoCluster {
    constructor(graph) {
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