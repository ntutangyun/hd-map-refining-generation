const {vector, Point, angleBetween, pointDist} = require("../../common/ApolloHDMap/Geometry");
const LaneProto = require("../../protobuf_out/modules/map/proto/map_lane_pb");
const LaneGenerator = require("../Generators/LaneGenerator");
const RoadGenerator = require("../Generators/RoadGenerator");
const OverlapGenerator = require("../Generators/OverlapGenerator");
const JunctionProto = require("../../protobuf_out/modules/map/proto/map_junction_pb");
const MapIDProto = require("../../protobuf_out/modules/map/proto/map_id_pb");
const MapGeoProto = require("../../protobuf_out/modules/map/proto/map_geometry_pb");
const {getTurnDirection} = require("../FeatureEngineering/GridLayout/JunctionGridUtils");

class Junction {
    constructor({junction_id, center_point}) {
        this.id = junction_id;
        this.centerPoint = center_point;

        this.connectedRoadList = {
            EAST: null, NORTH: null, WEST: null, SOUTH: null
        };
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

    connectRoad(road, direction) {
        if (!this.getConnectedRoadList().find(r => r.id === road.id)) {
            this.connectedRoadList[direction] = road;
        } else {
            global.logE(this.name, `road ${road.id} is already connected to junction ${this.id}`);
            process.exit(-1);
        }
    }

    getConnectedRoadList() {
        return Object.values(this.connectedRoadList).filter(r => r !== null);
    }

    generateJunctionLanes(roadList = this.connectedRoadList) {
        const laneConfigs = [];

        for (const [inDirection, inRoad] of Object.entries(roadList)) {
            for (const [outDirection, outRoad] of Object.entries(roadList)) {
                if (inDirection === outDirection) {
                    continue;
                }

                if (inRoad === null || outRoad === null) {
                    continue;
                }

                // from inRoad to outRoad
                const inRoadOutgoing = this.isRoadOutgoing(inRoad);
                const outRoadOutgoing = this.isRoadOutgoing(outRoad);

                // find out what turn is this.
                const turn = getTurnDirection(inDirection, outDirection);

                let incomingLaneList, outgoingLaneList;

                // from inRoad to outRoad
                // match from road central curve if left turn or no turn
                if (inRoadOutgoing) {
                    incomingLaneList = [...inRoad.backwardLaneList];
                    if (outRoadOutgoing) {
                        outgoingLaneList = [...outRoad.forwardLaneList];
                    } else {
                        outgoingLaneList = [...outRoad.backwardLaneList];
                    }
                } else {
                    incomingLaneList = [...inRoad.forwardLaneList];

                    if (outRoadOutgoing) {
                        outgoingLaneList = [...outRoad.forwardLaneList];
                    } else {
                        outgoingLaneList = [...outRoad.backwardLaneList];
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
        this.getConnectedRoadList().forEach(road => {
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