class Partition {
    constructor(str, separator) {
        if (typeof str !== 'string' || typeof separator !== 'string') {
            throw new Error('Inputs must be strings');
        }

        this.str = str;
        this.separator = separator;
    }

    execute() {
        const index = this.str.indexOf(this.separator);
        if (index === -1) {
            return [this.str, '', ''];
        }

        return [
            this.str.substring(0, index),
            this.separator,
            this.str.substring(index + this.separator.length)
        ];
    }
}

module.exports = Partition;
