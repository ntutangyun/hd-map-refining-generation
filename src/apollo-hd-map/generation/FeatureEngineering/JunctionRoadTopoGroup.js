// junction topology is now represented by the sequence of in-out road types.
// e.g. [in, in, inout, out] for a four road junction
// note that all the roads are now two-way roads.
const {matchVectorRotation} = require("../../common/arrayUtils");
const TwoWayRoad = require("../../common/ApolloHDMap/TwoWayRoad");
const {vectorHeading, vector} = require("../../common/ApolloHDMap/Geometry");

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
            const junctionCenter = junction.getPolygonCenter();

            let neighborARotation, neighborBRotation;

            if (neighborA instanceof TwoWayRoad) {
                const neighborAOutgoing = junction.isRoadOutgoing(neighborA);
                const neighborACurvePoint = neighborAOutgoing ? neighborA.startPoint : neighborA.endPoint;
                neighborARotation = vectorHeading(vector(junctionCenter, neighborACurvePoint));
            } else {
                const neighborACenter = neighborA.getPolygonCenter();
                neighborARotation = vectorHeading(vector(junctionCenter, neighborACenter));
            }

            if (neighborB instanceof TwoWayRoad) {
                const neighborBOutgoing = junction.isRoadOutgoing(neighborB);
                const neighborBCurvePoint = neighborBOutgoing ? neighborB.startPoint : neighborB.endPoint;
                neighborBRotation = vectorHeading(vector(junctionCenter, neighborBCurvePoint));
            } else {
                const neighborBCenter = neighborB.getPolygonCenter();
                neighborBRotation = vectorHeading(vector(junctionCenter, neighborBCenter));
            }

            return neighborARotation - neighborBRotation;
        });

        return neighborList.map(road => {
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

module.exports = JunctionRoadTopoGroup;