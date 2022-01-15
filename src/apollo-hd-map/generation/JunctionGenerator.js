const {Point} = require("../common/ApolloHDMap/Geometry");
const RoadGenerator = require("./RoadGenerator");
const {pointDist, vector, angleBetween} = require("../common/ApolloHDMap/Geometry");
const LaneGenerator = require("./LaneGenerator");
const JunctionProto = require("../protobuf_out/modules/map/proto/map_junction_pb");
const MapIDProto = require("../protobuf_out/modules/map/proto/map_id_pb");
const MapGeoProto = require("../protobuf_out/modules/map/proto/map_geometry_pb");

class Junction {
    constructor({junctionId, center_point}) {
        this.id = junctionId;
        this.centerPoint = center_point;

        this.connectedRoadList = [];
        this.laneList = [];
        this.polygonPointList = [];
    }

    getLaneList() {
        return [...this.laneList];
    }

    connectRoad(road) {
        this.connectedRoadList.push(road);
    }

    getConnectedRoadList() {
        return [...this.connectedRoadList];
    }

    generateJunctionLanes() {
        const laneConfigs = [];

        for (let i = 0; i < this.connectedRoadList.length; i++) {
            for (let j = 0; j < this.connectedRoadList.length; j++) {
                if (j === i) {
                    continue;
                }

                const roadI = this.connectedRoadList[i];
                const roadJ = this.connectedRoadList[j];

                const roadIOutgoing = this.isRoadOutgoing(roadI);
                const roadJOutgoing = this.isRoadOutgoing(roadJ);

                let incomingLaneList, outgoingLaneList;

                // from roadI to roadJ
                if (roadIOutgoing) {
                    incomingLaneList = [...roadI.backwardLaneList].reverse();

                    if (roadJOutgoing) {
                        outgoingLaneList = [...roadJ.forwardLaneList].reverse();
                    } else {
                        outgoingLaneList = [...roadJ.backwardLaneList].reverse();
                    }
                } else {
                    incomingLaneList = [...roadI.forwardLaneList].reverse();

                    if (roadJOutgoing) {
                        outgoingLaneList = [...roadJ.forwardLaneList].reverse();
                    } else {
                        outgoingLaneList = [...roadJ.backwardLaneList].reverse();
                    }
                }

                if (incomingLaneList.length === 0 || outgoingLaneList.length === 0) {
                    continue;
                }

                incomingLaneList.forEach((inLane, inLaneIndex) => {
                    if (outgoingLaneList[inLaneIndex]) {
                        laneConfigs.push({
                            startPoint: inLane.endPoint,
                            startHeading: inLane.endHeading,
                            incomingLane: inLane,
                            endPoint: outgoingLaneList[inLaneIndex].startPoint,
                            endHeading: outgoingLaneList[inLaneIndex].startHeading,
                            outgoingLane: outgoingLaneList[inLaneIndex]
                        });
                    } else {
                        // This is probably not right for multiple lanes to drive into the same lane inside the junction.
                        // cos it might lead to collision.
                        // laneConfigs.push({
                        //     startPoint: inLane.endPoint,
                        //     startHeading: inLane.endHeading,
                        //     incomingLane: inLane,
                        //     endPoint: outgoingLaneList.last().startPoint,
                        //     endHeading: outgoingLaneList.last().startHeading,
                        //     outgoingLane: outgoingLaneList.last()
                        // });
                    }
                });
            }
        }

        laneConfigs.forEach(({startPoint, startHeading, incomingLane, endPoint, endHeading, outgoingLane}) => {
            const junctionLane = LaneGenerator.generateLane({
                startPoint, startHeading, endPoint, endHeading, id: `${incomingLane.id}__${outgoingLane.id}`,
            });
            this.laneList.push(junctionLane);
        });
    }

    generatePolygon() {
        // generate polygon in counter-clockwise order
        const polygonPointList = [];
        this.connectedRoadList.forEach(road => {
            if (this.isRoadOutgoing(road)) {
                if (road.forwardLaneList.length === 0) {
                    polygonPointList.push(road.centralCurve.controlPoints.first());
                } else {
                    polygonPointList.push(road.forwardLaneList.last().rightBoundaryCurve.controlPoints.first());
                }

                if (road.backwardLaneList.length === 0) {
                    polygonPointList.push(road.centralCurve.controlPoints.first());
                } else {
                    polygonPointList.push(road.backwardLaneList.last().rightBoundaryCurve.controlPoints.last());
                }
            } else {
                if (road.backwardLaneList.length === 0) {
                    polygonPointList.push(road.centralCurve.controlPoints.last());
                } else {
                    polygonPointList.push(road.backwardLaneList.last().rightBoundaryCurve.controlPoints.first());
                }

                if (road.forwardLaneList.length === 0) {
                    polygonPointList.push(road.centralCurve.controlPoints.last());
                } else {
                    polygonPointList.push(road.forwardLaneList.last().rightBoundaryCurve.controlPoints.last());
                }
            }
        });

        polygonPointList.sort((pa, pb) => {
            const vectorZero = vector(this.centerPoint, new Point(this.centerPoint.x + 10, this.centerPoint.y, this.centerPoint.z));
            const vectorA = vector(this.centerPoint, pa);
            const vectorB = vector(this.centerPoint, pb);

            return angleBetween(vectorZero, vectorA) - angleBetween(vectorZero, vectorB);
        });

        this.polygonPointList = polygonPointList;
    }

    isRoadOutgoing(road) {
        return (pointDist(this.centerPoint, road.startPoint) < pointDist(this.centerPoint, road.endPoint));
    }

    serializeToProtobuf() {
        const junctionProto = new JunctionProto.Junction();
        junctionProto.setId((new MapIDProto.Id()).setId(this.id));

        const junctionPolygon = new MapGeoProto.Polygon();
        this.polygonPointList.forEach(point => {
            junctionPolygon.addPoint().setX(point.x).setY(point.y).setZ(point.z);
        });
        junctionProto.setPolygon(junctionPolygon);

        this.laneList.forEach(jLane => {
            junctionProto.addOverlapId().setId(jLane.id);
        });

        return junctionProto;
    }
}

class JunctionGenerator {
    static generateJunction({junctionId, center_point, road_links}) {
        const junction = new Junction({junctionId, center_point: Point.fromXYZObj(center_point)});

        // convert road_links to actual road
        road_links.forEach(road_link => {
            const {
                roadId,
                junction_center_angle,
                junction_center_distance,
                self_rotation,
                outgoing_lane_count,
                incoming_lane_count
            } = road_link;

            const startPoint = junction.centerPoint.moveTowards(junction_center_angle, junction_center_distance);
            const startHeading = junction_center_angle + self_rotation;

            const endPoint = startPoint.moveTowards(startHeading, 20);
            const endHeading = startHeading;

            const road = RoadGenerator.generateRoad({
                roadId,
                startPoint,
                startHeading,
                endPoint,
                endHeading,
                forwardLaneCount: outgoing_lane_count,
                backwardLaneCount: incoming_lane_count
            });

            junction.connectRoad(road);
        });

        junction.generateJunctionLanes();

        junction.generatePolygon();

        return junction;
    }
}

module.exports = JunctionGenerator;