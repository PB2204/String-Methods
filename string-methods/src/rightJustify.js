class RightJustify {
    constructor(str, width, fillChar = ' ') {
        if (typeof str !== 'string' || typeof width !== 'number' || typeof fillChar !== 'string') {
            throw new Error('Invalid input. String, width, and fillChar must be provided.');
        }

        this.str = str;
        this.width = width;
        this.fillChar = fillChar;
    }

    execute() {
        if (this.width <= this.str.length) {
            return this.str;
        }

        const padding = this.fillChar.repeat(this.width - this.str.length);
        return padding + this.str;
    }
}

module.exports = RightJustify;
