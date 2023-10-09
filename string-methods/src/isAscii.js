class IsAscii {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        this.str = str;
    }

    execute() {
        return /^[\x00-\x7F]*$/.test(this.str);
    }
}

module.exports = IsAscii;
