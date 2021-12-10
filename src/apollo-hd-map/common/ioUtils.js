const fs = require("fs");

function mkdir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {recursive: true});
    }
}

function writeFile(path, data) {
    try {
        fs.writeFileSync(path, JSON.stringify(data));
    } catch (err) {
        console.log(err);
        return false;
    }
    return true;
}

module.exports = {
    mkdir,
    writeFile
};