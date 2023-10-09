class Upper {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string.');
        }

        this.str = str;
    }

    execute() {
        return this.str.toUpperCase();
    }
}

module.exports = Upper;
