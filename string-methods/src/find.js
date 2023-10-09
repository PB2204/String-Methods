class Find {
    constructor(str, substring) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        this.str = str;
        this.substring = substring;
    }

    execute() {
        return this.str.indexOf(this.substring);
    }
}

module.exports = Find;