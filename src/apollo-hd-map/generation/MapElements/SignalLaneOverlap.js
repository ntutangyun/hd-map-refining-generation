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
        let laneOverlapInfo;

        // signal and junction lane overlap range: 0 - 1
        // signal and road lane tail overlap -2.5 - -1
        if (this.lane.junction !== null) {
            // signal and junction lane overlap
            laneOverlapInfo = (new OverlapProto.LaneOverlapInfo())
                .setStartS(0)
                .setEndS(1)
                .setIsMerge(false);
        } else {
            // signal and road lane overlap
            laneOverlapInfo = (new OverlapProto.LaneOverlapInfo())
                .setStartS(this.lane.length - 2.5)
                .setEndS(this.lane.length - 1)
                .setIsMerge(false);
        }
        laneObject.setLaneOverlapInfo(laneOverlapInfo);

        const signalObject = overlap.addObject();
        signalObject.setId((new MapIDProto.Id()).setId(this.signal.id));
        signalObject.setSignalOverlapInfo(new OverlapProto.SignalOverlapInfo());

        return overlap;
    }
}

module.exports = SignalLaneOverlap;