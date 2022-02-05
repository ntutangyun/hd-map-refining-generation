const MapIDProto = require("../../protobuf_out/modules/map/proto/map_id_pb");
const OverlapProto = require("../../protobuf_out/modules/map/proto/map_overlap_pb");
const Overlap = require("./Overlap");

class JunctionLaneOverlap extends Overlap {
    constructor(junction, lane) {
        super(`overlap_${junction.id}_${lane.id}`);
        this.junction = junction;
        this.lane = lane;
    }

    serializeToProtobuf() {
        const overlap = super.serializeToProtobuf();

        const laneObject = overlap.addObject();
        laneObject.setId((new MapIDProto.Id()).setId(this.lane.id));
        const laneOverlapInfo = (new OverlapProto.LaneOverlapInfo())
            .setStartS(0)
            .setEndS(this.lane.centralCurve.approximateLength())
            .setIsMerge(false);
        laneObject.setLaneOverlapInfo(laneOverlapInfo);

        const junctionObject = overlap.addObject();
        junctionObject.setId((new MapIDProto.Id()).setId(this.junction.id));
        junctionObject.setJunctionOverlapInfo(new OverlapProto.JunctionOverlapInfo());

        return overlap;
    }
}

module.exports = JunctionLaneOverlap;