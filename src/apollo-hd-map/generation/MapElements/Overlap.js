const OverlapProto = require("../../protobuf_out/modules/map/proto/map_overlap_pb");
const MapIDProto = require("../../protobuf_out/modules/map/proto/map_id_pb");

class Overlap {
    constructor(id) {
        this.id = id;
    }

    serializeToProtobuf() {
        const overlapProto = new OverlapProto.Overlap();
        overlapProto.setId((new MapIDProto.Id()).setId(this.id));
        return overlapProto;
    }
}

module.exports = Overlap;