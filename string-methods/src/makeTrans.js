class MakeTrans {
    constructor(str, fromChars, toChars) {
        if (typeof str !== 'string' || typeof fromChars !== 'string' || typeof toChars !== 'string') {
            throw new Error('Inputs must be strings');
        }

        this.str = str;
        this.fromChars = fromChars;
        this.toChars = toChars;
    }

    execute() {
        let result = '';
        for (let i = 0; i < this.str.length; i++) {
            const char = this.str[i];
            const index = this.fromChars.indexOf(char);
            if (index !== -1) {
                result += this.toChars[index];
            } else {
                result += char; // Append the character as is if not found in fromChars
            }
        }
        return result;
    }
}

module.exports = MakeTrans;
