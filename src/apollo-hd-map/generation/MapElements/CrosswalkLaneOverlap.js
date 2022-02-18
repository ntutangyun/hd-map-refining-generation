const MapIDProto = require("../../protobuf_out/modules/map/proto/map_id_pb");
const OverlapProto = require("../../protobuf_out/modules/map/proto/map_overlap_pb");
const Overlap = require("./Overlap");
const {DEFAULT_CROSSWALK_WIDTH} = require("../../common/constants");

class CrosswalkLaneOverlap extends Overlap {
    constructor(crosswalk, lane) {
        super(`overlap_${crosswalk.id}_${lane.id}`);
        this.crosswalk = crosswalk;
        this.lane = lane;
    }

    serializeToProtobuf() {
        const overlap = super.serializeToProtobuf();

        const laneObject = overlap.addObject();
        laneObject.setId((new MapIDProto.Id()).setId(this.lane.id));
        let laneOverlapInfo;

        // stop sign and junction lane overlap range: 0 - DEFAULT_CROSSWALK_WIDTH
        // stop sign and road lane tail overlap -2 - -1
        if (this.lane.junction !== null) {
            // stop sign and junction lane overlap
            laneOverlapInfo = (new OverlapProto.LaneOverlapInfo())
                .setStartS(0)
                .setEndS(DEFAULT_CROSSWALK_WIDTH)
                .setIsMerge(false);
        } else {
            // stop sign and road lane overlap
            laneOverlapInfo = (new OverlapProto.LaneOverlapInfo())
                .setStartS(this.lane.length - 2)
                .setEndS(this.lane.length - 1)
                .setIsMerge(false);
        }
        laneObject.setLaneOverlapInfo(laneOverlapInfo);

        const crosswalkObject = overlap.addObject();
        crosswalkObject.setId((new MapIDProto.Id()).setId(this.crosswalk.id));
        crosswalkObject.setCrosswalkOverlapInfo(new OverlapProto.CrosswalkOverlapInfo());

        return overlap;
    }
}

module.exports = CrosswalkLaneOverlap;