class IsDecimal {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        this.str = str;
    }

    execute() {
        return /^\d+$/.test(this.str);
    }
}

module.exports = IsDecimal;
