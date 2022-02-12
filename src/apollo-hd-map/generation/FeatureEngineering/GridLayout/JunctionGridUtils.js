const {MAP_START_OFFSET_X, JUNCTION_GRID_WIDTH, MAP_START_OFFSET_Y} = require("../../../common/constants");
const {degreeNormalize} = require("../../../common/mathUtils");

function xIToX(xI) {
    return MAP_START_OFFSET_X + JUNCTION_GRID_WIDTH * xI;
}

function yIToY(yI) {
    return MAP_START_OFFSET_Y + JUNCTION_GRID_WIDTH * yI;
}

const DEFAULT_DIRECTIONS = ["EAST", "NORTH", "WEST", "SOUTH"];
const DEFAULT_DIRECTION_REQUIREMENT = ["IN", "OUT", "IN-OUT", null];
const DEFAULT_DIRECTION_ASSIGNMENT = {
    EAST: null, NORTH: null, WEST: null, SOUTH: null,
};

const TOPO_MISMATCH_PENALTY = -20;

function getDirectionAngle(direction) {
    switch (direction) {
        case "EAST": {
            return 0;
        }
        case "NORTH": {
            return 90;
        }
        case "WEST": {
            return 180;
        }
        case "SOUTH": {
            return -90;
        }
        default: {
            global.logE("JunctionGridPoint", `Direction is invalid: ${direction}`);
            process.exit(-1);
        }
    }
}

function getDirectionOppositeAngle(direction) {
    switch (direction) {
        case "EAST": {
            return 180;
        }
        case "NORTH": {
            return -90;
        }
        case "WEST": {
            return 0;
        }
        case "SOUTH": {
            return 90;
        }
        default: {
            global.logE("JunctionGridPoint", `Direction is invalid: ${direction}`);
            process.exit(-1);
        }
    }
}

function getOppositeDirection(direction) {
    switch (direction) {
        case "EAST": {
            return "WEST";
        }
        case "NORTH": {
            return "SOUTH";
        }
        case "WEST": {
            return "EAST";
        }
        case "SOUTH": {
            return "NORTH";
        }
        default: {
            global.logE("JunctionGridPoint", `Direction is invalid: ${direction}`);
            process.exit(-1);
        }
    }
}

function computeOppositeTopoRequirement(directionTopo) {
    switch (directionTopo) {
        case "IN": {
            return ["OUT"];
        }
        case "OUT": {
            return ["IN"];
        }
        case "IN-OUT": {
            return ["IN-OUT"];
        }
        case null: {
            return [null];
        }
        default: {
            return [...DEFAULT_DIRECTION_REQUIREMENT];
        }
    }
}

// note that first param is direction instead of opposite direction
function computeOppositeDegreeOptimal(direction, degree) {
    switch (direction) {
        case "EAST": {
            return degreeNormalize(180 - degree);
        }
        case "NORTH": {
            return -degree;
        }
        case "WEST": {
            return degreeNormalize(180 - degree);
        }
        case "SOUTH": {
            return -degree;
        }
        default: {
            global.logE("JunctionGridPoint", `Direction is invalid: ${direction}`);
            process.exit(-1);
        }
    }
}

module.exports = {
    getOppositeDirection,
    getDirectionAngle,
    getDirectionOppositeAngle,
    computeOppositeTopoRequirement,
    computeOppositeDegreeOptimal,
    xIToX,
    yIToY,
    DEFAULT_DIRECTIONS,
    DEFAULT_DIRECTION_ASSIGNMENT,
    DEFAULT_DIRECTION_REQUIREMENT,
    TOPO_MISMATCH_PENALTY
};