// Initializing Array Utility methods
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
};

Array.prototype.shuffleInPlace = function () {
    for (let i = this.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [this[i], this[j]] = [this[j], this[i]];
    }
};

Array.prototype.shuffle = function () {
    const arr = [...this];
    arr.shuffleInPlace();
    return arr;
};

Array.prototype.last = function () {
    return this[this.length - 1];
};

Array.prototype.first = function () {
    return this[0];
};

Array.prototype.randomWithProbability = function (attr) {
    const distribution = this.map(el => el[attr]);

    let sum = 0;
    distribution.forEach(fit => sum += fit);

    let pick = Math.random() * sum;

    // console.log(`[ARRAY] sum = ${sum}`);
    // console.log(`[ARRAY] pick = ${pick}`);

    for (let i = 0; i < distribution.length; i++) {
        pick -= distribution[i];
        if (pick <= 0) {
            return this[i];
        }
    }

    return null;
};

Array.prototype.max = function () {
    return Math.max(...this);
};

Array.prototype.min = function () {
    return Math.min(...this);
};

Array.prototype.average = function () {
    return this.reduce((a, b) => a + b, 0) / this.length;
};

Array.prototype.rotate = function (n) {
    let len = this.length >>> 0, // convert to uint
        count = n >> 0; // convert to int

    // convert n to value in range [0, len)
    count = ((count % len) + len) % len;
    Array.prototype.push.apply(this, Array.prototype.splice.call(this, 0, count));
};

// reference:
// https://gist.github.com/axelpale/3118596
Array.prototype.kComb = function (k) {
    if (k > this.length || k <= 0) {
        return [];
    }

    if (k === this.length) {
        return [[...this]];
    }

    let combs = [];

    if (k === 1) {
        for (let i = 0; i < this.length; i++) {
            combs.push([this[i]]);
        }
        return combs;
    }

    for (let i = 0; i < this.length - k + 1; i++) {
        // head is a list that includes only our current element.
        let head = this.slice(i, i + 1);
        // We take smaller combinations from the subsequent elements
        let tailCombs = Array.prototype.kComb.call(this.slice(i + 1), k - 1);
        // For each (k-1)-combination we join it with the current
        // and store it to the arr of k-combinations.
        tailCombs.forEach(tailComb => {
            combs.push(head.concat(tailComb));
        });
    }
    return combs;
};

Array.prototype.std = function () {
    const avg = this.average();
    return Math.sqrt(this.map(v => Math.pow(v - avg, 2)).average());
};

Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
};

Array.prototype.movingAvg = function (windowSize) {
    if (this.length <= windowSize) {
        return [this.average()];
    }

    const res = [];
    for (let i = 0; i < (this.length - windowSize + 1); i++) {
        res.push(this.slice(i, i + windowSize).average());
    }
    return res;
};