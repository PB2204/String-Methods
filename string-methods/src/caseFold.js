class caseFolder {
    constructor(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }
        this.str = str;
    }

    caseFold() {
        return this.str.toLocaleLowerCase();
    }
}

module.exports = caseFolder;
