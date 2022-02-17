const MapIDProto = require("../../protobuf_out/modules/map/proto/map_id_pb");
const OverlapProto = require("../../protobuf_out/modules/map/proto/map_overlap_pb");
const Overlap = require("./Overlap");

class SignalLaneOverlap extends Overlap {
    constructor(signal, lane) {
        super(`overlap_${signal.id}_${lane.id}`);
        this.signal = signal;
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

        const signalObject = overlap.addObject();
        signalObject.setId((new MapIDProto.Id()).setId(this.signal.id));
        signalObject.setJunctionOverlapInfo(new OverlapProto.JunctionOverlapInfo());

        return overlap;
    }
}

module.exports = SignalLaneOverlap;