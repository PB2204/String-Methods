class LeftStrip {
    constructor(str, characters = ' ') {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        this.str = str;
        this.characters = characters;
    }

    execute() {
        let startIndex = 0;

        while (startIndex < this.str.length && this.characters.includes(this.str[startIndex])) {
            startIndex++;
        }

        return this.str.substring(startIndex);
    }
}

module.exports = LeftStrip;
