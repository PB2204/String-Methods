class Join {
    constructor(arr, separator = '') {
        if (!Array.isArray(arr)) {
            throw new Error('Input must be an array');
        }

        this.arr = arr;
        this.separator = separator;
    }

    execute() {
        return this.arr.join(this.separator);
    }
}

module.exports = Join;
