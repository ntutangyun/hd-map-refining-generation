const {angleNormalize, vector, Point, angleBetween, pointDist} = require("../../common/ApolloHDMap/Geometry");
const LaneProto = require("../../protobuf_out/modules/map/proto/map_lane_pb");
const LaneGenerator = require("../Generators/LaneGenerator");
const RoadGenerator = require("../Generators/RoadGenerator");
const OverlapGenerator = require("../Generators/OverlapGenerator");
const JunctionProto = require("../../protobuf_out/modules/map/proto/map_junction_pb");
const MapIDProto = require("../../protobuf_out/modules/map/proto/map_id_pb");
const MapGeoProto = require("../../protobuf_out/modules/map/proto/map_geometry_pb");

class Junction {
    constructor({junction_id, center_point}) {
        this.id = junction_id;
        this.centerPoint = center_point;

        this.connectedRoadList = [];
        this.laneList = [];
        this.laneRoadList = [];
        this.polygonPointList = [];
        this.overlapList = [];

        this.signalList = [];
        this.stopSignList = [];
        this.crosswalkList = [];
    }

    get name() {
        return this.constructor.name;
    }

    getLaneList() {
        return [...this.laneList];
    }

    getOverlapList() {
        return [...this.overlapList];
    }

    getSignalList() {
        return [...this.signalList];
    }

    getStopSignList() {
        return [...this.stopSignList];
    }

    getCrosswalkList() {
        return [...this.crosswalkList];
    }

    connectRoad(road) {
        if (!this.connectedRoadList.find(r => r.id === road.id)) {
            this.connectedRoadList.push(road);
        } else {
            global.logI(this.name, `road ${road.id} is already connected to junction ${this.id}`);
        }
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

                // from road I to road J
                const roadI = this.connectedRoadList[i];
                const roadJ = this.connectedRoadList[j];

                const roadIOutgoing = this.isRoadOutgoing(roadI);
                const roadJOutgoing = this.isRoadOutgoing(roadJ);

                // find out what turn is this.
                // assume the turning direction threshold is 45 degrees.

                const roadIHeading = roadIOutgoing ? roadI.startHeading - Math.PI : roadI.endHeading;
                const roadJHeading = roadJOutgoing ? roadJ.startHeading : roadJ.endHeading + Math.PI;

                const turnAngle = angleNormalize(roadJHeading - roadIHeading);

                // Currently, does not support U-turn here.
                // If no turn or left turn, match from the road central curve
                // if right turn, match from the right most lane
                let turn;
                if (turnAngle < (-Math.PI / 4)) {
                    turn = LaneProto.Lane.LaneTurn.RIGHT_TURN;
                } else if (turnAngle > (Math.PI * 4)) {
                    turn = LaneProto.Lane.LaneTurn.LEFT_TURN;
                } else {
                    turn = LaneProto.Lane.LaneTurn.NO_TURN;
                }

                let incomingLaneList, outgoingLaneList;

                // from roadI to roadJ
                // match from road central curve if left turn or no turn
                if (roadIOutgoing) {
                    incomingLaneList = [...roadI.backwardLaneList];
                    if (roadJOutgoing) {
                        outgoingLaneList = [...roadJ.forwardLaneList];
                    } else {
                        outgoingLaneList = [...roadJ.backwardLaneList];
                    }
                } else {
                    incomingLaneList = [...roadI.forwardLaneList];

                    if (roadJOutgoing) {
                        outgoingLaneList = [...roadJ.forwardLaneList];
                    } else {
                        outgoingLaneList = [...roadJ.backwardLaneList];
                    }
                }
                if (incomingLaneList.length === 0 || outgoingLaneList.length === 0) {
                    continue;
                }

                // if turn right, match from right most lane
                if (turn === LaneProto.Lane.LaneTurn.RIGHT_TURN) {
                    incomingLaneList.reverse();
                    outgoingLaneList.reverse();
                }

                incomingLaneList.forEach((inLane, inLaneIndex) => {
                    if (outgoingLaneList[inLaneIndex]) {
                        laneConfigs.push({
                            startPoint: inLane.endPoint,
                            startHeading: inLane.endHeading,
                            incomingLane: inLane,
                            endPoint: outgoingLaneList[inLaneIndex].startPoint,
                            endHeading: outgoingLaneList[inLaneIndex].startHeading,
                            outgoingLane: outgoingLaneList[inLaneIndex],
                            turn: turn,
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

        laneConfigs.forEach(({startPoint, startHeading, incomingLane, endPoint, endHeading, outgoingLane, turn}) => {
            const junctionLane = LaneGenerator.generateLane({
                startPoint, startHeading, endPoint, endHeading, id: global.getNewLaneId(), turn, isJunctionLane: true
            });

            junctionLane.incomingList.push(incomingLane);
            incomingLane.outgoingList.push(junctionLane);

            junctionLane.outgoingList.push(outgoingLane);
            outgoingLane.incomingList.push(junctionLane);

            // generate individual road per junction lane
            const junctionLaneRoad = RoadGenerator.generateJunctionLaneRoad(junctionLane);
            junctionLane.junctionRoad = junctionLaneRoad;
            this.laneRoadList.push(junctionLaneRoad);

            // perform width sampling at proper context
            junctionLane.sampleWidth(0, 0);

            junctionLane.junction = this;
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

    generateLaneOverlap() {
        this.getLaneList().forEach(lane => {
            const junctionLaneOverlap = OverlapGenerator.generateJunctionLaneOverlap(this, lane);
            this.overlapList.push(junctionLaneOverlap);
            lane.overlapList.push(junctionLaneOverlap);
        });
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

        this.overlapList.forEach(overlap => {
            junctionProto.addOverlapId().setId(overlap.id);
        });

        return junctionProto;
    }
}

module.exports = Junction;