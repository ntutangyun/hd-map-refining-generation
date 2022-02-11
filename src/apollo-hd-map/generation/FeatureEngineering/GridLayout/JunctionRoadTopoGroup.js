// junction topology is now represented by the sequence of in-out road types.
// e.g. [in, in, inout, out] for a four road junction
// note that all the roads are now two-way roads.
const {matchVectorRotation} = require("../../../common/arrayUtils");

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

    // // assume junction maximum road is four. all topo vectors normalize to four
    // static extractRoadTopoVector(junction) {
    //     const topoGeoList = junction.getConnectedJunctionAndRoad()
    //         .map(neighbor => {
    //             let topo;
    //             if (neighbor.incoming.hasOwnProperty(junction.id) && neighbor.outgoing.hasOwnProperty(junction.id)) {
    //                 topo = "IN-OUT";
    //             } else if (neighbor.incoming.hasOwnProperty(junction.id)) {
    //                 topo = "OUT";
    //             } else {
    //                 topo = "IN";
    //             }
    //             return {
    //                 topo,
    //                 rotation: junction.getNeighborCenterRotation(neighbor)
    //             };
    //         }).sort((nA, nB) => {
    //             return nA.rotation - nB.rotation;
    //         });
    //     if (topoGeoList.length > 4 || topoGeoList.length < 2) {
    //         global.logE("ROAD_TOPO_GROUP", `Found a junction ${junction.id} with incorrect number of neighbors (${topoGeoList.length}).`);
    //         process.exit(-1);
    //     } else if (topoGeoList.length === 4) {
    //         return topoGeoList.map(topoGeoEntry => topoGeoEntry.topo);
    //     }
    //
    //     // neighbors: 2, 3, fill in null values
    //     topoGeoList.forEach(entry => {
    //         // east
    //         const r = entry.rotation;
    //         if ((r >= -Math.PI / 4) && (r < Math.PI / 4)) {
    //             entry.direction = "east";
    //         } else if (r >= Math.PI / 4 && r < Math.PI / 4 * 3) {
    //             entry.direction = "north";
    //         } else if (r >= Math.PI / 4 * 3 || r < -Math.PI / 4 * 3) {
    //             entry.direction = "west";
    //         } else {
    //             entry.direction = "south";
    //         }
    //     });
    //
    //     const eastEntry = topoGeoList.filter(entry => entry.direction === "east");
    //     const northEntry = topoGeoList.filter(entry => entry.direction === "north");
    //     const westEntry = topoGeoList.filter(entry => entry.direction === "west");
    //     const southEntry = topoGeoList.filter(entry => entry.direction === "south");
    //
    //     if (eastEntry.length > 1 || northEntry.length > 1 || westEntry.length > 1 || southEntry.length > 1) {
    //         global.logE("ROAD_TOPO_GROUP", `found multiple neighbors in one direction ${JSON.stringify(topoGeoList)}`);
    //         process.exit(-1);
    //     }
    //     return [
    //         eastEntry.length === 1 ? eastEntry[0].topo : null,
    //         northEntry.length === 1 ? northEntry[0].topo : null,
    //         westEntry.length === 1 ? westEntry[0].topo : null,
    //         southEntry.length === 1 ? southEntry[0].topo : null,
    //     ];
    // }

}

module.exports = JunctionRoadTopoGroup;