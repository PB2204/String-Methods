class ZeroFill {
    constructor(number, width) {
        if (typeof number !== 'number' || typeof width !== 'number') {
            throw new Error('Both inputs must be numbers.');
        }

        this.number = number;
        this.width = width;
    }

    execute() {
        return this.number.toString().padStart(this.width, '0');
    }
}

module.exports = ZeroFill;
