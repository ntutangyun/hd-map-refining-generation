const StopSignProto = require("../../protobuf_out/modules/map/proto/map_stop_sign_pb");
const MapIDProto = require("../../protobuf_out/modules/map/proto/map_id_pb");
const OverlapGenerator = require("../Generators/OverlapGenerator");

// stop sign has no position. it is located by default at the end of the stop line.
class StopSign {
    constructor({
                    id,
                    type = StopSignProto.StopSign.StopType.UNKNOWN,
                    laneList = null,
                    junction = null,
                    stopLine = null
                }) {
        this.id = id;
        this.type = type;
        this.junction = junction;
        this.laneList = laneList;
        this.overlapList = [];
        this.stopLine = stopLine;

        this.computeOverlap();
    }

    getOverlapList() {
        return [...this.overlapList];
    }

    computeOverlap() {
        // overlap with lanes
        this.laneList.forEach(lane => {
            const overlap = OverlapGenerator.generateStopSignLaneOverlap(this, lane);
            lane.overlapList.push(overlap);
            this.overlapList.push(overlap);
        });

        // overlap with junction
        const jOverlap = OverlapGenerator.generateStopSignJunctionOverlap(this, this.junction);
        this.junction.overlapList.push(jOverlap);
        this.overlapList.push(jOverlap);
    }

    serializeToProtobuf() {
        const stopSign = new StopSignProto.StopSign();
        stopSign.setId((new MapIDProto.Id()).setId(this.id));
        stopSign.setType(this.type);

        // section boundary
        const stopLine = this.stopLine.serializeToProtobuf(3);
        stopSign.addStopLine(stopLine);

        this.overlapList.forEach(overlap => {
            stopSign.addOverlapId().setId(overlap.id);
        });

        return stopSign;
    }
}

module.exports = StopSign;