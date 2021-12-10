const {Header} = require("../../../docs/tools/protobuf_out/modules/common/proto/header_pb");
const {PointENU} = require("../../../docs/tools/protobuf_out/modules/common/proto/geometry_pb");
const {RoutingRequest, LaneWaypoint} = require("../../../docs/tools/protobuf_out/modules/routing/proto/routing_pb");

function getFirstLaneIDFromRouteMessage(msg) {
    return msg["roadList"][0]["passageList"][0]["segmentList"][0]["id"];
}

function extractLaneIDsFromRoute(route) {
    if (route["status"]["errorCode"] !== 0) {
        return null;
    }

    const laneIds = [];

    route["roadList"].forEach(road => {
        road["passageList"].forEach(passage => {
            passage["segmentList"].forEach(laneSeg => {
                laneIds.push(laneSeg.id);
            });
        });
    });

    return laneIds;
}

function buildRoutingRequest(seq, startLane, endLane, endLaneOffset = 20) {
    const request = new RoutingRequest();

    const header = new Header();
    header.setTimestampSec(Date.now() / 1000);
    header.setModuleName("dreamview");
    header.setSequenceNum(seq);
    request.setHeader(header);

    let startPoint = startLane.getFirstPoint();
    let startS = 0;

    const startLaneWP = new LaneWaypoint();
    startLaneWP.setId(startLane.id);
    startLaneWP.setS(startS);
    const startPos = new PointENU();
    startPos.setX(startPoint.x);
    startPos.setY(startPoint.y);
    startLaneWP.setPose(startPos);

    request.addWaypoint(startLaneWP);

    // if (global.egoEndLane.length >= 20) {
    //     global.destination = global.egoEndLane.getSegmentAtOffset(20)[1];
    // } else {
    //     global.destination = global.egoEndLane.getLastPoint();
    // }

    let endPoint;
    let endS;
    if (endLane.length >= endLaneOffset) {
        endPoint = endLane.getSegmentAtOffset(endLaneOffset)[1];
        endS = endLaneOffset;
    } else {
        endPoint = endLane.getLastPoint();
        endS = endLane.length;
    }

    const endLaneWP = new LaneWaypoint();
    endLaneWP.setId(endLane.id);
    endLaneWP.setS(endS);
    const endPos = new PointENU();
    endPos.setX(endPoint.x);
    endPos.setY(endPoint.y);
    endLaneWP.setPose(endPos);

    request.addWaypoint(endLaneWP);

    return request;
}

module.exports = {
    getFirstLaneIDFromRouteMessage,
    extractLaneIDsFromRoute,
    buildRoutingRequest
};