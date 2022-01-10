const config = {
    hd_map_header_path: "./hd_map_header.json",
    road_samples: [
        {
            startPoint: {
                x: 0,    // east,
                y: 0,    // north
                z: 0        // altitude
            },
            startHeading: 0, // east to north in degrees
            endPoint: {
                x: 50,
                y: 0,
                z: 0
            },
            endHeading: 0
        },
        {
            startPoint: {
                x: 100,    // east,
                y: 100,    // north
                z: 0        // altitude
            },
            startHeading: Math.PI / 2, // east to north in degrees
            endPoint: {
                x: 120,
                y: 100,
                z: 0
            },
            endHeading: -Math.PI / 2
        },
        {
            startPoint: {
                x: 200,    // east,
                y: 100,    // north
                z: 0        // altitude
            },
            startHeading: Math.PI / 2, // east to north in degrees
            endPoint: {
                x: 350,
                y: 100,
                z: 0
            },
            endHeading: -Math.PI / 2
        },
        {
            startPoint: {
                x: 100,    // east,
                y: 0,    // north
                z: 0     // altitude
            },
            startHeading: 0, // east to north in degrees
            endPoint: {
                x: 150,
                y: 0,
                z: 0
            },
            endHeading: Math.PI / 4
        },
        {
            startPoint: {
                x: 200,    // east,
                y: 0,    // north
                z: 0     // altitude
            },
            startHeading: 0, // east to north in degrees
            endPoint: {
                x: 250,
                y: 50,
                z: 0
            },
            endHeading: 0
        },
        {
            startPoint: {
                x: 300,    // east,
                y: 0,    // north
                z: 0     // altitude
            },
            startHeading: 0, // east to north in degrees
            endPoint: {
                x: 350,
                y: 50,
                z: 0
            },
            endHeading: Math.PI / 4
        },
        {
            startPoint: {
                x: 400,    // east,
                y: 0,    // north
                z: 0     // altitude
            },
            startHeading: 0, // east to north in degrees
            endPoint: {
                x: 450,
                y: 50,
                z: 0
            },
            endHeading: Math.PI / 2
        },
        {
            startPoint: {
                x: 0,    // east,
                y: -100,    // north
                z: 0        // altitude
            },
            startHeading: 0, // east to north in degrees
            endPoint: {
                x: 50,
                y: -100,
                z: 0
            },
            endHeading: Math.PI / 2
        },
        {
            startPoint: {
                x: 100,    // east,
                y: -100,    // north
                z: 0        // altitude
            },
            startHeading: 0, // east to north in degrees
            endPoint: {
                x: 125,
                y: -125,
                z: 0
            },
            endHeading: -Math.PI / 2
        },
        {
            startPoint: {
                x: 125,    // east,
                y: -125,    // north
                z: 0        // altitude
            },
            startHeading: -Math.PI / 2, // east to north in degrees
            endPoint: {
                x: 150,
                y: -125,
                z: 0
            },
            endHeading: Math.PI / 2
        },
        {
            startPoint: {
                x: 150,    // east,
                y: -125,    // north
                z: 0        // altitude
            },
            startHeading: Math.PI / 2, // east to north in degrees
            endPoint: {
                x: 150,
                y: -100,
                z: 0
            },
            endHeading: Math.PI / 2
        },
        {
            startPoint: {
                x: 200,    // east,
                y: -100,    // north
                z: 0        // altitude
            },
            startHeading: 0, // east to north in degrees
            endPoint: {
                x: 225,
                y: -75,
                z: 0
            },
            endHeading: Math.PI / 2
        },
        {
            startPoint: {
                x: 225,    // east,
                y: -75,    // north
                z: 0        // altitude
            },
            startHeading: Math.PI / 2, // east to north in degrees
            endPoint: {
                x: 250,
                y: -50,
                z: 0
            },
            endHeading: 0
        },
    ],
    curveSampleCount: 100
};