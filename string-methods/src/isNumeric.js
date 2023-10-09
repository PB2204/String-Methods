class IsNumeric {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        this.str = str;
    }

    execute() {
        return !isNaN(this.str) && !isNaN(parseFloat(this.str));
    }
}

module.exports = IsNumeric;
