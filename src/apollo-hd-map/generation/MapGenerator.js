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

    // generateRoads() {
    //     const roadSamples = this.config.road_samples;
    //
    //     roadSamples.forEach((roadSample, roadI) => {
    //
    //         const startPoint = new Point(roadSample.startPoint.x, roadSample.startPoint.y, roadSample.startPoint.z);
    //         const startHeading = roadSample.startHeading; // east to north in degrees
    //
    //         const endPoint = new Point(roadSample.endPoint.x, roadSample.endPoint.y, roadSample.endPoint.z);
    //         const endHeading = roadSample.endHeading; // east to north in degrees
    //
    //         const road = RoadGenerator.generateRoad({
    //             roadId: `road_${roadI}`, startPoint, startHeading, endPoint, endHeading
    //         });
    //
    //         road.getLaneList().forEach(lane => {
    //             console.log(lane);
    //             this.map.addLane(lane.serializeToProtobuf(this.config.curveSampleCount));
    //         });
    //
    //         this.map.addRoad(road.serializeToProtobuf(this.config.curveSampleCount));
    //     });
    // }
}

module.exports = MapGenerator;