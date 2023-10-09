class Encode {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        this.str = str;
    }

    execute() {
        let encodedStr = '';
        for (let i = 0; i < this.str.length; i++) {
            const charCode = this.str.charCodeAt(i);
            encodedStr += charCode.toString(16).toUpperCase();
        }

        return encodedStr;
    }
}

module.exports = Encode;
