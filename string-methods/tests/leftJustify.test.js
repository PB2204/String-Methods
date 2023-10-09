const LeftJustify = require('../src/leftJustify');

describe('LeftJustify', () => {
    it('should left-justify a string with a default fill character', () => {
        const str = 'Hello';
        const width = 10;
        const leftJustifyInstance = new LeftJustify(str, width);
        expect(leftJustifyInstance.execute()).toBe('Hello     ');
    });

    it('should left-justify a string with a specified fill character', () => {
        const str = 'Center';
        const width = 12;
        const fillchar = '-';
        const leftJustifyInstance = new LeftJustify(str, width, fillchar);
        expect(leftJustifyInstance.execute()).toBe('Center------');
    });

    it('should not pad if the width is less than the string length', () => {
        const str = 'Short';
        const width = 4;
        const leftJustifyInstance = new LeftJustify(str, width);
        expect(leftJustifyInstance.execute()).toBe('Short');
    });

    it('should handle non-string inputs', () => {
        expect(() => new LeftJustify(123, 8)).toThrowError('Input must be a string');
    });
});
