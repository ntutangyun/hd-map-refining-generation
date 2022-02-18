const MapIDProto = require("../../protobuf_out/modules/map/proto/map_id_pb");
const OverlapProto = require("../../protobuf_out/modules/map/proto/map_overlap_pb");
const Overlap = require("./Overlap");

class StopSignJunctionOverlap extends Overlap {
    constructor(stopSign, junction) {
        super(`overlap_${stopSign.id}_${junction.id}`);
        this.stopSign = stopSign;
        this.junction = junction;
    }

    serializeToProtobuf() {
        const overlap = super.serializeToProtobuf();

        const stopSignObject = overlap.addObject();
        stopSignObject.setId((new MapIDProto.Id()).setId(this.stopSign.id));
        stopSignObject.setStopSignOverlapInfo(new OverlapProto.StopSignOverlapInfo());

        const junctionObject = overlap.addObject();
        junctionObject.setId((new MapIDProto.Id()).setId(this.junction.id));
        junctionObject.setJunctionOverlapInfo(new OverlapProto.JunctionOverlapInfo());

        return overlap;
    }
}

module.exports = StopSignJunctionOverlap;