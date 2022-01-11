function degreeToRad(degree) {
    return degree / 180 * Math.PI;
}

module.exports = [
    {
        junctionId: "J_38",
        center_point: {
            x: 0,
            y: 0,
            z: 0
        },
        road_links: [
            {
                roadId: "R_0",
                junction_center_angle: degreeToRad(30),
                junction_center_distance: 15,
                self_rotation: degreeToRad(-30),   // anti-clockwise in radian
                outgoing_lane_count: 4,
                incoming_lane_count: 0
            },
            {
                roadId: "R_1",
                junction_center_angle: degreeToRad(60),
                junction_center_distance: 15,
                self_rotation: degreeToRad(30),   // clockwise in radian
                outgoing_lane_count: 0,
                incoming_lane_count: 4
            },
            {
                roadId: "R_2",
                junction_center_angle: degreeToRad(150),
                junction_center_distance: 15,
                self_rotation: degreeToRad(30),   // clockwise in radian
                outgoing_lane_count: 0,
                incoming_lane_count: 4
            },
            {
                roadId: "R_3",
                junction_center_angle: degreeToRad(-120),
                junction_center_distance: 15,
                self_rotation: degreeToRad(30),   // clockwise in radian
                outgoing_lane_count: 0,
                incoming_lane_count: 4
            },
        ]
    },
    {
        junctionId: "J_50",
        center_point: {
            x: 75,
            y: 0,
            z: 0
        },
        road_links: [
            {
                roadId: "R_4",
                junction_center_angle: degreeToRad(30),
                junction_center_distance: 15,
                self_rotation: degreeToRad(-30),   // anti-clockwise in radian
                outgoing_lane_count: 4,
                incoming_lane_count: 0
            },
            {
                roadId: "R_5",
                junction_center_angle: degreeToRad(120),
                junction_center_distance: 15,
                self_rotation: degreeToRad(-30),   // clockwise in radian
                outgoing_lane_count: 4,
                incoming_lane_count: 0
            },
            {
                roadId: "R_6",
                junction_center_angle: degreeToRad(150),
                junction_center_distance: 15,
                self_rotation: degreeToRad(30),   // clockwise in radian
                outgoing_lane_count: 0,
                incoming_lane_count: 4
            },
            {
                roadId: "R_7",
                junction_center_angle: degreeToRad(-120),
                junction_center_distance: 15,
                self_rotation: degreeToRad(30),   // clockwise in radian
                outgoing_lane_count: 0,
                incoming_lane_count: 4
            },
        ]
    },
    {
        junctionId: "J_43",
        center_point: {
            x: 150,
            y: 0,
            z: 0
        },
        road_links: [
            {
                roadId: "R_8",
                junction_center_angle: degreeToRad(-30),
                junction_center_distance: 15,
                self_rotation: degreeToRad(10),   // anti-clockwise in radian
                outgoing_lane_count: 0,
                incoming_lane_count: 4
            },
            {
                roadId: "R_9",
                junction_center_angle: degreeToRad(-170),
                junction_center_distance: 15,
                self_rotation: degreeToRad(-20),   // clockwise in radian
                outgoing_lane_count: 3,
                incoming_lane_count: 0
            },
            {
                roadId: "R_10",
                junction_center_angle: degreeToRad(-90),
                junction_center_distance: 15,
                self_rotation: degreeToRad(10),   // clockwise in radian
                outgoing_lane_count: 2,
                incoming_lane_count: 2
            },
        ]
    },
    {
        junctionId: "J_85",
        center_point: {
            x: 225,
            y: 0,
            z: 0
        },
        road_links: [
            {
                roadId: "R_11",
                junction_center_angle: degreeToRad(0),
                junction_center_distance: 15,
                self_rotation: degreeToRad(0),   // anti-clockwise in radian
                outgoing_lane_count: 2,
                incoming_lane_count: 2
            },
            {
                roadId: "R_12",
                junction_center_angle: degreeToRad(90),
                junction_center_distance: 15,
                self_rotation: degreeToRad(0),   // clockwise in radian
                outgoing_lane_count: 2,
                incoming_lane_count: 2
            },
            {
                roadId: "R_13",
                junction_center_angle: degreeToRad(180),
                junction_center_distance: 15,
                self_rotation: degreeToRad(0),   // clockwise in radian
                outgoing_lane_count: 2,
                incoming_lane_count: 2
            },
            {
                roadId: "R_14",
                junction_center_angle: degreeToRad(-90),
                junction_center_distance: 15,
                self_rotation: degreeToRad(0),   // clockwise in radian
                outgoing_lane_count: 2,
                incoming_lane_count: 2
            },
        ]
    },
    {
        junctionId: "J_76",
        center_point: {
            x: 0,
            y: -75,
            z: 0
        },
        road_links: [
            {
                roadId: "R_15",
                junction_center_angle: degreeToRad(30),
                junction_center_distance: 15,
                self_rotation: degreeToRad(-30),   // anti-clockwise in radian
                outgoing_lane_count: 4,
                incoming_lane_count: 0
            },
            {
                roadId: "R_16",
                junction_center_angle: degreeToRad(150),
                junction_center_distance: 15,
                self_rotation: degreeToRad(30),   // clockwise in radian
                outgoing_lane_count: 0,
                incoming_lane_count: 4
            },
            {
                roadId: "R_17",
                junction_center_angle: degreeToRad(-90),
                junction_center_distance: 15,
                self_rotation: degreeToRad(0),   // clockwise in radian
                outgoing_lane_count: 2,
                incoming_lane_count: 2
            },
        ]
    },
];