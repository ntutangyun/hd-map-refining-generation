const RoadGenerator = require("./road_generator");
const {Header} = require("../protobuf_out/modules/map/proto/map_pb");
const {MapPoint} = require("./gridUtils");

const config = {
    hd_map_header: Header.fromObject(require("./hd_map_header.json"))
};

console.log(config);

const startPoint = new MapPoint(1000, 1000, 0);
const startHeading = 0; // east to north in degrees

const endPoint = new MapPoint(1500, 1000, 0);
const endHeading = 0;

const road = RoadGenerator.generate({id: "road_1", startPoint, startHeading, endPoint, endHeading});
console.log(road);


