class RightPartition {
    constructor(str, separator) {
        if (typeof str !== 'string' || typeof separator !== 'string') {
            throw new Error('Invalid input. Both input and separator must be strings.');
        }

        this.str = str;
        this.separator = separator;
    }

    execute() {
        const index = this.str.lastIndexOf(this.separator);
        if (index === -1) {
            return [this.str, '', ''];
        }

        const left = this.str.slice(0, index);
        const sep = this.str.slice(index, index + this.separator.length);
        const right = this.str.slice(index + this.separator.length);

        return [left, sep, right];
    }
}

module.exports = RightPartition;
