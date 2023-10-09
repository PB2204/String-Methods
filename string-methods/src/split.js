class Split {
    constructor(str, delimiter) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string.');
        }

        this.str = str;
        this.delimiter = delimiter;
    }

    execute() {
        return this.str.split(this.delimiter);
    }
}

module.exports = Split;
