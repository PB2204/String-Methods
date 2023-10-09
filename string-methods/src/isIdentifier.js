class IsIdentifier {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        this.str = str;
    }

    execute() {
        // Regular expression for validating identifiers
        const identifierRegex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
        return identifierRegex.test(this.str);
    }
}

module.exports = IsIdentifier;
