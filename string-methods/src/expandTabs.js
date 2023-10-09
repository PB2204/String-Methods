class ExpandTabs {
    constructor(str, tabWidth = 4) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        this.str = str;
        this.tabWidth = tabWidth;
    }

    execute() {
        const tabRegExp = new RegExp(`\\t`, 'g');
        return this.str.replace(tabRegExp, ' '.repeat(this.tabWidth));
    }
}

module.exports = ExpandTabs;
