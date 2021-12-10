// TYPES
module.exports.TYPE_UNKNOWN = 0;
module.exports.TYPE_UNKNOWN_MOVABLE = 1;
module.exports.TYPE_UNKNOWN_UNMOVABLE = 2;
module.exports.TYPE_PEDESTRIAN = 3;  // Pedestrian, usually determined by moving behavior.
module.exports.TYPE_BICYCLE = 4;     // bike, motor bike
module.exports.TYPE_VEHICLE = 5;     // Passenger car or truck.

// SUBTYPES
module.exports.ST_UNKNOWN = 0;
module.exports.ST_UNKNOWN_MOVABLE = 1;
module.exports.ST_UNKNOWN_UNMOVABLE = 2;
module.exports.ST_CAR = 3;
module.exports.ST_VAN = 4;
module.exports.ST_TRUCK = 5;
module.exports.ST_BUS = 6;
module.exports.ST_CYCLIST = 7;
module.exports.ST_MOTORCYCLIST = 8;
module.exports.ST_TRICYCLIST = 9;
module.exports.ST_PEDESTRIAN = 10;
module.exports.ST_TRAFFICCONE = 11;

module.exports.parseObsType = function (typeID) {
    switch (typeID) {
        case 0: {
            return "TYPE_UNKNOWN";
        }
        case 1: {
            return "TYPE_UNKNOWN_MOVABLE";
        }
        case 2: {
            return "TYPE_UNKNOWN_UNMOVABLE";
        }
        case 3: {
            return "TYPE_PEDESTRIAN";
        }
        case 4: {
            return "TYPE_BICYCLE";
        }
        case 5: {
            return "TYPE_VEHICLE";
        }
        default: {
            return typeID;
        }
    }
};

module.exports.parseObsSubType = function (subTypeId) {
    switch (subTypeId) {
        case 0: {
            return "ST_UNKNOWN";
        }
        case 1: {
            return "ST_UNKNOWN_MOVABLE";
        }
        case 2: {
            return "ST_UNKNOWN_UNMOVABLE";
        }
        case 3: {
            return "ST_CAR";
        }
        case 4: {
            return "ST_VAN";
        }
        case 5: {
            return "ST_TRUCK";
        }
        case 6: {
            return "ST_BUS";
        }
        case 7: {
            return "ST_CYCLIST";
        }
        case 8: {
            return "ST_MOTORCYCLIST";
        }
        case 9: {
            return "ST_TRICYCLIST";
        }
        case 10: {
            return "ST_PEDESTRIAN";
        }
        case 11: {
            return "ST_TRAFFICCONE";
        }
        default: {
            return subTypeId;
        }
    }
};