class FixedLengthArray extends Array {
    constructor(len) {
        super();
        this.fixedLength = len;
    }

    push(el) {
        super.push(el);
        if (this.length > this.fixedLength) {
            this.shift();
        }
    }
}

function rotateArray(arr, n) {
    let res = [...arr];
    let len = arr.length >>> 0, // convert to uint
        count = n >> 0; // convert to int

    // convert n to value in range [0, len)
    count = ((count % len) + len) % len;
    Array.prototype.push.apply(res, Array.prototype.splice.call(res, 0, count));
    return res;
}

function matchVectorRotation(vec1, vec2) {
    if (vec1.length !== vec2.length) {
        return false;
    }

    let matched = false;
    for (let i = 0; i < vec1.length; i++) {
        let rotatedVec = rotateArray(vec2, i);
        let rotMatched = true;
        for (let j = 0; j < vec1.length; j++) {
            if (vec1[j] !== rotatedVec[j]) {
                rotMatched = false;
                break;
            }
        }
        if (rotMatched) {
            matched = true;
            break;
        }
    }

    return matched;
}

module.exports = {
    FixedLengthArray,
    rotateArray,
    matchVectorRotation
};