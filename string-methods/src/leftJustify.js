class LeftJustify {
    constructor(str, width, fillchar = ' ') {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        this.str = str;
        this.width = width;
        this.fillchar = fillchar;
    }

    execute() {
        if (this.width <= this.str.length) {
            return this.str;
        }

        const paddingLength = this.width - this.str.length;
        const rightPadding = this.fillchar.repeat(paddingLength);
        return this.str + rightPadding;
    }
}

module.exports = LeftJustify;
