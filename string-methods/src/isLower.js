class IsLower {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        this.str = str;
    }

    execute() {
        return this.str === this.str.toLowerCase();
    }
}

module.exports = IsLower;
