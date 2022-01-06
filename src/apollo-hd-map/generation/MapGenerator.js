const MapProto = require("../../../protobuf_out/modules/map/proto/map_pb");
const RoadGenerator = require("./RoadGenerator");
const {Point} = require("./geometryUtils");

class MapGenerator {
    constructor(config) {
        this.config = config;
        this.laneList = [];
        this.map = null;
    }

    generate() {
        this.map = new MapProto.Map();
        this.map.setHeader(MapProto.Header.fromObject(require(this.config.hd_map_header_path)));

        this.generateRoads();

        return this.map;
    }

    generateRoads() {
        this.roadList = [];
        const roadSample = this.config.road_sample;

        const startPoint = new Point(roadSample.startPoint.x, roadSample.startPoint.y, roadSample.startPoint.z);
        const startHeading = roadSample.startHeading; // east to north in degrees

        const endPoint = new Point(roadSample.endPoint.x, roadSample.endPoint.y, roadSample.endPoint.z);
        const endHeading = roadSample.endHeading; // east to north in degrees

        const road = RoadGenerator.generate({
                roadId: "road_1",
                startPoint,
                startHeading,
                endPoint,
                endHeading
            }
        );

        this.map.addRoad(road.serializeToProtobuf());
    }
}

module.exports = MapGenerator;