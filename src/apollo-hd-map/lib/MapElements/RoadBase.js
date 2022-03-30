const RoadProto = global.ApolloTestingLib("protobuf_out/modules/map/proto/map_road_pb");
const MapIDProto = global.ApolloTestingLib("protobuf_out/modules/map/proto/map_id_pb");

class RoadBase {
    constructor({
                    id,
                    centralCurve = null,
                    forwardLaneList = [],
                    backwardLaneList = [],
                    type = RoadProto.Road.Type.CITY_ROAD,
                    startPoint = null,
                    endPoint = null,
                    startOffsetRatio = 0.5,
                    endOffsetRatio = 0.5,
                }) {
        this.id = id;
        this.type = type;
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.centralCurve = centralCurve;
        this.forwardLaneList = forwardLaneList;
        this.backwardLaneList = backwardLaneList;
        this.startOffsetRatio = startOffsetRatio;
        this.endOffsetRatio = endOffsetRatio;
    }

    getForwardLaneList() {
        return [...this.forwardLaneList];
    }

    getBackwardLaneList() {
        return [...this.backwardLaneList];
    }

    getLaneList() {
        return [...this.forwardLaneList, ...this.backwardLaneList];
    }

    serializeToProtobuf(curveSampleCount) {
        const roadProto = new RoadProto.Road();
        roadProto.setType(this.type);
        roadProto.setId((new MapIDProto.Id()).setId(this.id));

        // add section
        const section = roadProto.addSection();

        // section id:
        section.setId((new MapIDProto.Id()).setId("1"));

        // section lane id:
        [...this.forwardLaneList, ...this.backwardLaneList].forEach(lane => {
            section.addLaneId().setId(lane.id);
        });

        // section boundary
        const boundary = new RoadProto.RoadBoundary();
        section.setBoundary(boundary);

        const outer_polygon = new RoadProto.BoundaryPolygon();
        boundary.setOuterPolygon(outer_polygon);

        if (this.forwardLaneList.length > 0) {
            outer_polygon.addEdge()
                .setType(RoadProto.BoundaryEdge.Type.RIGHT_BOUNDARY)
                .setCurve(this.forwardLaneList.last().rightBoundaryCurve.serializeToProtobuf(curveSampleCount));
            outer_polygon.addEdge()
                .setType(RoadProto.BoundaryEdge.Type.LEFT_BOUNDARY)
                .setCurve(this.forwardLaneList.first().leftBoundaryCurve.serializeToProtobuf(curveSampleCount));
        }

        if (this.backwardLaneList.length > 0) {
            outer_polygon.addEdge()
                .setType(RoadProto.BoundaryEdge.Type.LEFT_BOUNDARY)
                .setCurve(this.backwardLaneList.first().leftBoundaryCurve.serializeToProtobuf(curveSampleCount));
            outer_polygon.addEdge()
                .setType(RoadProto.BoundaryEdge.Type.RIGHT_BOUNDARY)
                .setCurve(this.backwardLaneList.last().rightBoundaryCurve.serializeToProtobuf(curveSampleCount));
        }

        return roadProto;
    }
}

module.exports = RoadBase;