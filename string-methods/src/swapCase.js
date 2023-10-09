class SwapCase {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string.');
        }

        this.str = str;
    }

    execute() {
        return this.str.replace(/[a-zA-Z]/g, (match) => {
            return match.toLowerCase() === match ? match.toUpperCase() : match.toLowerCase();
        });
    }
}

module.exports = SwapCase;
