const fs = require("fs");
const path = require("path");

let config = require("../lib/global.config.json");
global.ApolloTestingLib = (localPath) => require(path.join(config.ApolloTestingLibPath, localPath));
global.ApolloTestingLib("common/setup");

const MapGeneratorManual = require("../lib/Generators/MapGeneratorManual");
config = {
    ...config,
    hd_map_header: global.ApolloTestingLib("common/hd_map_header.json"),
    curveSampleCount: 20,
    mergeRoadBetweenJunctions: true,
    manual: {
        junctionList: [
            {
                id: "J_0", center: {
                    x: 500, y: 500
                }, roadList: {
                    "EAST": {
                        topo: "IN-OUT", rotation: 0,
                    }, "NORTH": {
                        topo: "IN-OUT", rotation: 90,
                    }, // "WEST": {
                    //     topo: "IN-OUT",
                    //     rotation: 180,
                    // },
                    // "SOUTH": {
                    //     topo: "IN-OUT",
                    //     rotation: -90,
                    // },
                }, signal: false, stopSign: false, crosswalk: true, neighbor: {
                    "EAST": "J_1", "NORTH": "J_4", "WEST": null, "SOUTH": null,
                }
            }, {
                id: "J_1", center: {
                    x: 1000, y: 500
                }, roadList: {
                    "EAST": {
                        topo: "IN-OUT", rotation: 0,
                    }, "NORTH": {
                        topo: "IN-OUT", rotation: 90,
                    }, "WEST": {
                        topo: "IN-OUT", rotation: 180,
                    }, // "SOUTH": {
                    //     topo: "IN-OUT",
                    //     rotation: -90,
                    // },
                }, signal: false, stopSign: true, crosswalk: true, neighbor: {
                    "EAST": "J_2", "NORTH": "J_5", "WEST": "J_0", "SOUTH": null,
                }
            }, {
                id: "J_2", center: {
                    x: 1500, y: 500
                }, roadList: {
                    "EAST": {
                        topo: "IN-OUT", rotation: 0,
                    }, "NORTH": {
                        topo: "IN-OUT", rotation: 90,
                    }, "WEST": {
                        topo: "IN-OUT", rotation: 180,
                    }, // "SOUTH": {
                    //     topo: "IN-OUT",
                    //     rotation: -90,
                    // },
                }, signal: false, stopSign: true, crosswalk: true, neighbor: {
                    "EAST": "J_3", "NORTH": "J_6", "WEST": "J_1", "SOUTH": null,
                }
            }, {
                id: "J_3", center: {
                    x: 2000, y: 500
                }, roadList: {
                    // "EAST": {
                    //     topo: "IN-OUT",
                    //     rotation: 0,
                    // },
                    "NORTH": {
                        topo: "IN-OUT", rotation: 90,
                    }, "WEST": {
                        topo: "IN-OUT", rotation: 180,
                    }, // "SOUTH": {
                    //     topo: "IN-OUT",
                    //     rotation: -90,
                    // },
                }, signal: false, stopSign: false, crosswalk: true, neighbor: {
                    "EAST": null, "NORTH": "J_7", "WEST": "J_2", "SOUTH": null,
                }
            }, {
                id: "J_4", center: {
                    x: 500, y: 1000
                }, roadList: {
                    "EAST": {
                        topo: "IN-OUT", rotation: 0,
                    }, "NORTH": {
                        topo: "IN-OUT", rotation: 90,
                    }, // "WEST": {
                    //     topo: "IN-OUT",
                    //     rotation: 180,
                    // },
                    "SOUTH": {
                        topo: "IN-OUT", rotation: -90,
                    },
                }, signal: false, stopSign: true, crosswalk: true,
                neighbor: {
                    "EAST": "J_5", "NORTH": "J_8", "WEST": null, "SOUTH": "J_0",
                }
            }, {
                id: "J_5", center: {
                    x: 1000, y: 1000
                }, roadList: {
                    "EAST": {
                        topo: "IN-OUT", rotation: 0,
                    }, "NORTH": {
                        topo: "IN-OUT", rotation: 90,
                    }, "WEST": {
                        topo: "IN-OUT", rotation: 180,
                    }, "SOUTH": {
                        topo: "IN-OUT", rotation: -90,
                    },
                }, signal: false, stopSign: true, crosswalk: true,
                neighbor: {
                    "EAST": "J_6", "NORTH": "J_9", "WEST": "J_4", "SOUTH": "J_1",
                }
            }, {
                id: "J_6", center: {
                    x: 1500, y: 1000
                }, roadList: {
                    "EAST": {
                        topo: "IN-OUT", rotation: 0,
                    }, "NORTH": {
                        topo: "IN-OUT", rotation: 90,
                    }, "WEST": {
                        topo: "IN-OUT", rotation: 180,
                    }, "SOUTH": {
                        topo: "IN-OUT", rotation: -90,
                    },
                }, signal: true, stopSign: false, crosswalk: true,
                neighbor: {
                    "EAST": "J_7", "NORTH": "J_10", "WEST": "J_5", "SOUTH": "J_2",
                }
            }, {
                id: "J_7", center: {
                    x: 2000, y: 1000
                }, roadList: {
                    // "EAST": {
                    //     topo: "IN-OUT",
                    //     rotation: 0,
                    // },
                    "NORTH": {
                        topo: "IN-OUT", rotation: 90,
                    }, "WEST": {
                        topo: "IN-OUT", rotation: 180,
                    }, "SOUTH": {
                        topo: "IN-OUT", rotation: -90,
                    },
                }, signal: false, stopSign: true, crosswalk: true, neighbor: {
                    "EAST": null, "NORTH": "J_11", "WEST": "J_6", "SOUTH": "J_3",
                }
            }, {
                id: "J_8", center: {
                    x: 500, y: 1500
                }, roadList: {
                    "EAST": {
                        topo: "IN-OUT", rotation: 0,
                    }, // "NORTH": {
                    //     topo: "IN-OUT",
                    //     rotation: 90,
                    // },
                    // "WEST": {
                    //     topo: "IN-OUT",
                    //     rotation: 180,
                    // },
                    "SOUTH": {
                        topo: "IN-OUT", rotation: -90,
                    },
                }, signal: false, stopSign: false, crosswalk: true,
                neighbor: {
                    "EAST": "J_9", "NORTH": null, "WEST": null, "SOUTH": "J_4",
                }
            }, {
                id: "J_9", center: {
                    x: 1000, y: 1500
                }, roadList: {
                    "EAST": {
                        topo: "IN-OUT", rotation: 0,
                    }, // "NORTH": {
                    //     topo: "IN-OUT",
                    //     rotation: 90,
                    // },
                    "WEST": {
                        topo: "IN-OUT", rotation: 180,
                    }, "SOUTH": {
                        topo: "IN-OUT", rotation: -90,
                    },
                }, signal: true, stopSign: false, crosswalk: true, neighbor: {
                    "EAST": "J_10", "NORTH": null, "WEST": "J_8", "SOUTH": "J_5",
                }
            }, {
                id: "J_10", center: {
                    x: 1500, y: 1500
                }, roadList: {
                    "EAST": {
                        topo: "IN-OUT", rotation: 0,
                    }, // "NORTH": {
                    //     topo: "IN-OUT",
                    //     rotation: 90,
                    // },
                    "WEST": {
                        topo: "IN-OUT", rotation: 180,
                    }, "SOUTH": {
                        topo: "IN-OUT", rotation: -90,
                    },
                }, signal: false, stopSign: true, crosswalk: true,
                neighbor: {
                    "EAST": "J_11", "NORTH": null, "WEST": "J_9", "SOUTH": "J_6",
                }
            }, {
                id: "J_11", center: {
                    x: 2000, y: 1500
                }, roadList: {
                    // "EAST": {
                    //     topo: "IN-OUT",
                    //     rotation: 0,
                    // },
                    // "NORTH": {
                    //     topo: "IN-OUT",
                    //     rotation: 90,
                    // },
                    "WEST": {
                        topo: "IN-OUT", rotation: 180,
                    }, "SOUTH": {
                        topo: "IN-OUT", rotation: -90,
                    },
                }, signal: false, stopSign: false, crosswalk: true,
                neighbor: {
                    "EAST": null, "NORTH": null, "WEST": "J_10", "SOUTH": "J_7",
                }
            },
        ], roadList: []
    }
};
const mapGenerator = new MapGeneratorManual(config);

const map = mapGenerator.generate();

fs.writeFileSync("./base_map.bin", map.serializeBinary());
fs.writeFileSync("./base_map.json", JSON.stringify(map.toObject()));
fs.writeFileSync("./sim_map.bin", map.serializeBinary());
