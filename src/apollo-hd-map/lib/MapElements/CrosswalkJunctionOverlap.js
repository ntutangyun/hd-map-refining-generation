const MapIDProto = global.ApolloTestingLib("protobuf_out/modules/map/proto/map_id_pb");
const OverlapProto = global.ApolloTestingLib("protobuf_out/modules/map/proto/map_overlap_pb");
const Overlap = require("./Overlap");

class CrosswalkJunctionOverlap extends Overlap {
    constructor(crosswalk, junction) {
        super(`overlap_${crosswalk.id}_${junction.id}`);
        this.crosswalk = crosswalk;
        this.junction = junction;
    }

    serializeToProtobuf() {
        const overlap = super.serializeToProtobuf();

        const crosswalkObject = overlap.addObject();
        crosswalkObject.setId((new MapIDProto.Id()).setId(this.crosswalk.id));
        crosswalkObject.setCrosswalkOverlapInfo(new OverlapProto.CrosswalkOverlapInfo());

        const junctionObject = overlap.addObject();
        junctionObject.setId((new MapIDProto.Id()).setId(this.junction.id));
        junctionObject.setJunctionOverlapInfo(new OverlapProto.JunctionOverlapInfo());

        return overlap;
    }
}

module.exports = CrosswalkJunctionOverlap;