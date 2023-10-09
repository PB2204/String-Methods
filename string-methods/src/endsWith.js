class EndsWith {
    constructor(str, searchString, position = undefined) {
        if (typeof str !== 'string' || typeof searchString !== 'string') {
            throw new Error('Input must be strings');
        }

        this.str = str;
        this.searchString = searchString;
        this.position = position;
    }

    execute() {
        if (typeof this.position !== 'undefined') {
            if (this.position < 0) {
                return false;
            }
            const startPos = Math.min(this.position, this.str.length - this.searchString.length);
            return this.str.slice(startPos).endsWith(this.searchString);
        } else {
            return this.str.endsWith(this.searchString);
        }
    }
}

module.exports = EndsWith;
