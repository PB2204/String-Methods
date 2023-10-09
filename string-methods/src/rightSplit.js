class RightSplit {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Invalid input. Input must be a string.');
        }

        this.str = str;
    }

    split(separator, maxSplit = -1) {
        if (typeof separator !== 'string') {
            throw new Error('Invalid input. Separator must be a string.');
        }

        const result = [];
        let lastIndex = this.str.length;
        let count = 0;

        while (maxSplit === -1 || count < maxSplit) {
            const index = this.str.lastIndexOf(separator, lastIndex - 1);
            if (index === -1) {
                break;
            }

            const right = this.str.slice(index + separator.length, lastIndex);
            result.unshift(right);

            lastIndex = index;
            count += 1;

            if (index === 0) {
                break;
            }
        }

        const left = this.str.slice(0, lastIndex);
        result.unshift(left);

        return result;
    }
}

module.exports = RightSplit;
