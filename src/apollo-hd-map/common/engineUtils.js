const fs = require("fs");

function loadRecords() {
    try {
        if (fs.existsSync(global.recordPath)) {
            global.records = require(global.recordPath);
        }
    } catch (e) {
        console.error(e);
        process.exit(0);
    }
}

function saveRecords() {
    try {
        fs.writeFileSync(global.recordPath, JSON.stringify(global.records));
    } catch (e) {
        console.log(e);
        process.exit(0);
    }
}

module.exports = {
    loadRecords,
    saveRecords
};