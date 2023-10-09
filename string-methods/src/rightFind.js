class RightFind {
    constructor(str, substring) {
        if (typeof str !== 'string' || typeof substring !== 'string') {
            throw new Error('Input must be a string');
        }

        this.str = str;
        this.substring = substring;
    }

    execute() {
        const lastIndex = this.str.lastIndexOf(this.substring);
        return lastIndex === -1 ? null : lastIndex;
    }
}

module.exports = RightFind;
