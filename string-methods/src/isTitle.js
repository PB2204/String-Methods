class IsTitle {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        this.str = str;
    }

    execute() {
        const words = this.str.split(' ');
        for (const word of words) {
            if (word === '') continue; // Skip empty words
            if (word[0] !== word[0].toUpperCase()) {
                return false;
            }
        }
        return true;
    }
}

module.exports = IsTitle;
