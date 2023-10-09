class IsAlpha {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        this.str = str;
    }

    execute() {
        return /^[a-zA-Z]+$/.test(this.str);
    }
}

module.exports = IsAlpha;
