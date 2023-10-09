class Format {
    constructor(formatString, ...args) {
        if (typeof formatString !== 'string') {
            throw new Error('Format string must be a string');
        }

        this.formatString = formatString;
        this.args = args;
    }

    execute() {
        return this.formatString.replace(/{(\d+)}/g, (match, index) => {
            const argIndex = parseInt(index, 10);
            if (argIndex >= 0 && argIndex < this.args.length) {
                return this.args[argIndex];
            }
            return match; // Return unchanged if argIndex is out of bounds
        });
    }
}

module.exports = Format;
