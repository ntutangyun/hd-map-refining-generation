const MapProto = require("../protobuf_out/modules/map/proto/map_pb");
const JunctionGenerator = require("./JunctionGenerator");

class MapGenerator {
    constructor(config) {
        this.config = config;
        this.map = null;
    }

    generate() {
        this.map = new MapProto.Map();
        this.map.setHeader(MapProto.Header.fromObject(require(this.config.hd_map_header_path)));

        this.generateJunctions();

        return this.map;
    }

    generateJunctions() {
        this.config.junction_samples.forEach(junctionSample => {
            const junction = JunctionGenerator.generateJunction(junctionSample);

            junction.getLaneList().forEach(lane => {
                this.map.addLane(lane.serializeToProtobuf(this.config.curveSampleCount));
            });

            junction.getConnectedRoadList().forEach(road => {
                road.getLaneList().forEach(lane => {
                    // console.log(lane);
                    this.map.addLane(lane.serializeToProtobuf(this.config.curveSampleCount));
                });

                this.map.addRoad(road.serializeToProtobuf(this.config.curveSampleCount));
            });

            this.map.addJunction(junction.serializeToProtobuf(this.config.curveSampleCount));
        });
    }
}

module.exports = MapGenerator;