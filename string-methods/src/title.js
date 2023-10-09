class Title {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string.');
        }

        this.str = str;
    }

    execute() {
        return this.str.replace(/\b\w/g, (match) => {
            return match.toUpperCase();
        });
    }
}

module.exports = Title;
