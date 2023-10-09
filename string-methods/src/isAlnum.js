class IsAlnum {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        this.str = str;
    }

    execute() {
        return /^[a-zA-Z0-9]+$/.test(this.str);
    }
}

module.exports = IsAlnum;
