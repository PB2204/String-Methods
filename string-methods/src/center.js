class Center {
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
        const leftPadding = Math.floor(paddingLength / 2);
        const rightPadding = Math.ceil(paddingLength / 2);

        const paddedString = this.fillchar.repeat(leftPadding) + this.str + this.fillchar.repeat(rightPadding);
        return paddedString;
    }
}

module.exports = Center;
