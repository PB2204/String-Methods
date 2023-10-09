class capitalize {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }
        this.str = str;
    }

    execute() {
        if (this.str.length === 0) {
            return this.str;
        }
        const firstChar = this.str.charAt(0).toUpperCase();
        const restChars = this.str.slice(1).toLowerCase();
        return firstChar + restChars;
    }
}

module.exports = capitalize;