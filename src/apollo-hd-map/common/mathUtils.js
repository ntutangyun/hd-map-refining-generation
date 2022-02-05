// reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function getRandomInRange(min, max) {
    return min + (max - min) * Math.random();
}

// reference:
// https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
// range from -3 to 3
function gaussianSample() {
    let rand = 0;

    for (let i = 0; i < 6; i += 1) {
        rand += 6 * Math.random() - 3;
    }

    return rand / 6;
}

// box-muller
function normalSample(mean, delta) {
    let u1 = Math.random();
    let u2 = Math.random();

    return delta * Math.cos(2 * Math.PI * u1) * Math.sqrt(-2 * Math.log(u2)) + mean;
}

function gaussianRandom(min, max) {
    // return gaussianSample() * (max - min);
    return normalSample(0, 1) * (max - min);
}


function bound(val, min, max) {
    if (val < min) {
        return min;
    } else if (val > max) {
        return max;
    }

    return val;
}

function square(v) {
    return Math.pow(v, 2);
}

function cube(v) {
    return Math.pow(v, 3);
}

function degreeToRad(degree) {
    return degree / 180 * Math.PI;
}

function radToDegree(rad) {
    return rad / Math.PI * 180;
}

function getHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
}

module.exports = {
    bound,
    getRandomIntInclusive,
    getRandomInRange,
    gaussianSample,
    gaussianRandom,
    normalSample,
    square,
    cube,
    degreeToRad,
    radToDegree,
    getHypotenuse
};

