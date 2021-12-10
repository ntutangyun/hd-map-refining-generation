global.state = {
    dreamview: {
        modules: "OFF",     // OFF, ON, RESETTING, SETTING
        connected: false    // restartModule on connect, exit on close
    },
    rcRecorder: {
        connected: false,   // restartBridge on connect, exit on close
    },
    cyberBridge: {
        connected: false    // auto reconnect
    },
    simulator: {
        connected: false,    // auto reconnect
        currentScene: null
    },
    runner: {
        bridgeReaderAdded: false    // rcRecorder -> cyberBridge connected -> add reader
    },
    engine: {
        ga: null,           // "IDLE", "RUNNING", "COMPLETED"
        generation: null,   // "IDLE", "RUNNING",
        manual: null
    }
};