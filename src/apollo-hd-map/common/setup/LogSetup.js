require("colors");

global.logI = (name, content) => console.log(`[INFO] [${name}]: ${content}`.green);
global.logW = (name, content) => console.log(`[WARN] [${name}]: ${content}`.yellow);
global.logE = (name, content) => console.log(`[ERR-] [${name}]: ${content}`.red);