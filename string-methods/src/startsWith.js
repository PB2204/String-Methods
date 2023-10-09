class StartsWith {
    constructor(str, prefix) {
        if (typeof str !== 'string' || typeof prefix !== 'string') {
            throw new Error('Input must be strings.');
        }

        this.str = str;
        this.prefix = prefix;
    }

    execute() {
        return this.str.startsWith(this.prefix);
    }
}

module.exports = StartsWith;
