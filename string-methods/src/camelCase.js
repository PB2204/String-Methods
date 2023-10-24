class CamelCase {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }
        this.str = str;
    }

    execute() {
        return this.str
            .trim()
            .split(/[\W_]+/)
            .map((word, index) => {
                if (index === 0) {
                    return word.toLowerCase();
                }
                return (
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                );
            })
            .join('');
    }
}

module.exports = CamelCase;
