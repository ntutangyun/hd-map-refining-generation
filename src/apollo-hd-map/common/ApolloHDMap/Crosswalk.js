const {getPolygonPointsSegmentList, checkLineSegmentIntersect} = require("./Geometry");

class Crosswalk {
    constructor(graph) {
        this.id = null;
        this.graph = graph;
        this.laneList = {};
        this.pointList = [];
    }

    init(crossWalkData) {
        if (crossWalkData.id) {
            this.id = crossWalkData.id.id;
        } else {
            this.id = `CW_${this.graph.getCrosswalkList().length}`;
        }
        this.pointList = crossWalkData.polygon.pointList;
        crossWalkData.overlapIdList.forEach(o => {

            const overlap = this.graph.graphData.overlapList.find(overlap => overlap.id.id === o.id);
            if (!overlap) {
                global.logE("StopSign", "Cannot find the overlap");
                process.exit(-1);
            }
            const laneObject = overlap.objectList.find(object => object.id.id.startsWith("lane"));
            if (!laneObject) {
                global.logE("StopSign", "Cannot find the lane object");
                process.exit(-1);
            }
            const lane = this.graph.getLaneById(laneObject.id.id);
            if (lane === null) {
                return;
            }

            this.laneList[lane.id] = lane;
            // need additional processing for junction lanes.
            lane.addCrosswalk(this);
        });
        return this;
    }

    getPointList() {
        return this.pointList;
    }

    fixLaneOverlaps() {
        this.graph.getLaneList().forEach(lane => {
            const laneSegList = lane.getLaneSegmentList();
            const cwSegList = getPolygonPointsSegmentList(this.pointList);

            let intersect = false;
            for (let i = 0; i < laneSegList.length; i++) {
                for (let j = 0; j < cwSegList.length; j++) {
                    if (checkLineSegmentIntersect(laneSegList[i], cwSegList[j])) {
                        intersect = true;
                        break;
                    }
                }
            }

            if (intersect && !this.laneList.hasOwnProperty(lane.id)) {
                this.laneList[lane.id] = lane;
                lane.addCrosswalk(this);
            }
        });
    }
}

module.exports = Crosswalk;