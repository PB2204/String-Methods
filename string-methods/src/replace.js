class Replace {
    constructor(str, search, replacement) {
        if (typeof str !== 'string' || typeof search !== 'string' || typeof replacement !== 'string') {
            throw new Error('Inputs must be strings');
        }

        this.str = str;
        this.search = search;
        this.replacement = replacement;
    }

    execute() {
        return this.str.replace(new RegExp(this.search, 'g'), this.replacement);
    }
}

module.exports = Replace;
