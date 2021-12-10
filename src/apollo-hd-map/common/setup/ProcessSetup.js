process.on("SIGINT", () => {
    global.logI("PROCESS", "[PROCESS] Terminating ...");
    process.exit(0);
});