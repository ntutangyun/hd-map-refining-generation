const MapProto = require("../protobuf_out/modules/map/proto/map_pb");
const RoadGenerator = require("./RoadGenerator");
const {Point} = require("./geometryUtils");
const JunctionGenerator = require("./junction_generator");

class MapGenerator {
    constructor(config) {
        this.config = config;
        this.map = null;
    }

    generate() {
        this.map = new MapProto.Map();
        this.map.setHeader(MapProto.Header.fromObject(require(this.config.hd_map_header_path)));

        this.generateJunctions();

        // this.generateRoads();
        return this.map;
    }

    generateJunctions() {
        const junction = JunctionGenerator.generateJunction(this.config.junction_sample);

        console.log(junction);
    }

    generateRoads() {
        const roadSamples = this.config.road_samples;

        roadSamples.forEach((roadSample, roadI) => {

            const startPoint = new Point(roadSample.startPoint.x, roadSample.startPoint.y, roadSample.startPoint.z);
            const startHeading = roadSample.startHeading; // east to north in degrees

            const endPoint = new Point(roadSample.endPoint.x, roadSample.endPoint.y, roadSample.endPoint.z);
            const endHeading = roadSample.endHeading; // east to north in degrees

            const road = RoadGenerator.generateRoad({
                roadId: `road_${roadI}`, startPoint, startHeading, endPoint, endHeading
            });

            road.getLaneList().forEach(lane => {
                console.log(lane);
                this.map.addLane(lane.serializeToProtobuf(this.config.curveSampleCount));
            });

            this.map.addRoad(road.serializeToProtobuf(this.config.curveSampleCount));
        });
    }
}

module.exports = MapGenerator;