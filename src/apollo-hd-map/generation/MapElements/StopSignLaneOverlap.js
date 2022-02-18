const MapIDProto = require("../../protobuf_out/modules/map/proto/map_id_pb");
const OverlapProto = require("../../protobuf_out/modules/map/proto/map_overlap_pb");
const Overlap = require("./Overlap");

class StopSignLaneOverlap extends Overlap {
    constructor(stopSign, lane) {
        super(`overlap_${stopSign.id}_${lane.id}`);
        this.stopSign = stopSign;
        this.lane = lane;
    }

    serializeToProtobuf() {
        const overlap = super.serializeToProtobuf();

        const laneObject = overlap.addObject();
        laneObject.setId((new MapIDProto.Id()).setId(this.lane.id));
        let laneOverlapInfo;

        // stop sign and junction lane overlap range: 0 - 0.7
        // stop sign and road lane tail overlap -2 - -1
        if (this.lane.junction !== null) {
            // stop sign and junction lane overlap
            laneOverlapInfo = (new OverlapProto.LaneOverlapInfo())
                .setStartS(0)
                .setEndS(0.7)
                .setIsMerge(false);
        } else {
            // stop sign and road lane overlap
            laneOverlapInfo = (new OverlapProto.LaneOverlapInfo())
                .setStartS(this.lane.length - 2)
                .setEndS(this.lane.length - 1)
                .setIsMerge(false);
        }
        laneObject.setLaneOverlapInfo(laneOverlapInfo);

        const stopSignObject = overlap.addObject();
        stopSignObject.setId((new MapIDProto.Id()).setId(this.stopSign.id));
        stopSignObject.setStopSignOverlapInfo(new OverlapProto.StopSignOverlapInfo());

        return overlap;
    }
}

module.exports = StopSignLaneOverlap;