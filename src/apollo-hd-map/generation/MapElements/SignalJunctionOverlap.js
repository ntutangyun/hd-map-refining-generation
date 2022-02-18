const MapIDProto = require("../../protobuf_out/modules/map/proto/map_id_pb");
const OverlapProto = require("../../protobuf_out/modules/map/proto/map_overlap_pb");
const Overlap = require("./Overlap");

class SignalJunctionOverlap extends Overlap {
    constructor(signal, junction) {
        super(`overlap_${signal.id}_${junction.id}`);
        this.signal = signal;
        this.junction = junction;
    }

    serializeToProtobuf() {
        const overlap = super.serializeToProtobuf();

        const signalObject = overlap.addObject();
        signalObject.setId((new MapIDProto.Id()).setId(this.signal.id));
        signalObject.setSignalOverlapInfo(new OverlapProto.SignalOverlapInfo());

        const junctionObject = overlap.addObject();
        junctionObject.setId((new MapIDProto.Id()).setId(this.junction.id));
        junctionObject.setJunctionOverlapInfo(new OverlapProto.JunctionOverlapInfo());

        return overlap;
    }
}

module.exports = SignalJunctionOverlap;