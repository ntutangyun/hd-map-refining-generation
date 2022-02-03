const {Point} = require("../../common/ApolloHDMap/Geometry");
const RoadGenerator = require("./RoadGenerator");
const Junction = require("../MapElements/Junction");


class JunctionGenerator {
    static generateJunction({junction_id, center_point, road_sockets}) {
        const junction = new Junction({junction_id, center_point: Point.fromXYZObj(center_point)});

        // convert road_links to actual road
        road_sockets.forEach(({
                                  road_id,
                                  junction_center_angle,
                                  junction_center_distance,
                                  self_rotation,
                                  outgoing_lane_count,
                                  incoming_lane_count
                              }) => {

            const startPoint = junction.centerPoint.moveTowards(junction_center_angle, junction_center_distance);
            const startHeading = junction_center_angle + self_rotation;

            const endPoint = startPoint.moveTowards(startHeading, 20);
            const endHeading = startHeading;

            const road = RoadGenerator.generateRoad({
                road_id,
                startPoint,
                startHeading,
                endPoint,
                endHeading,
                forwardLaneCount: outgoing_lane_count,
                backwardLaneCount: incoming_lane_count
            });

            junction.connectRoad(road);
        });

        junction.generateJunctionLanes();

        junction.generatePolygon();

        junction.generateLaneOverlap();

        return junction;
    }
}

module.exports = JunctionGenerator;