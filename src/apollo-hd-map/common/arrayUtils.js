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

module.exports = {
    FixedLengthArray
};