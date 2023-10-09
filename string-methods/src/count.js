class Count {
    constructor(inputString) {
        this.inputString = inputString;
    }

    count(substring) {
        if (!substring) {
            return 0;
        }

        let count = 0;
        let currentIndex = 0;

        while (true) {
            const foundIndex = this.inputString.indexOf(substring, currentIndex);
            if (foundIndex === -1) {
                break;
            }
            count++;
            currentIndex = foundIndex + 1;
        }

        return count;
    }
}

module.exports = Count;
