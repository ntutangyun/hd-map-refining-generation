process.on("SIGINT", () => {
    console.log("[PROCESS] Terminating ...");
    process.exit(0);
});