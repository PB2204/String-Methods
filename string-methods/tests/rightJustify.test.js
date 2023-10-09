const RightJustify = require('../src/rightJustify');

describe('RightJustify', () => {
    it('should right justify a string with spaces', () => {
        const str = 'Hello';
        const width = 10;
        const rightJustifyInstance = new RightJustify(str, width);
        expect(rightJustifyInstance.execute()).toBe('     Hello');
    });

    it('should right justify a string with custom fill character', () => {
        const str = '123';
        const width = 5;
        const fillChar = '0';
        const rightJustifyInstance = new RightJustify(str, width, fillChar);
        expect(rightJustifyInstance.execute()).toBe('00123');
    });

    it('should not modify the string if width is less than or equal to its length', () => {
        const str = 'Hello';
        const width = 3;
        const rightJustifyInstance = new RightJustify(str, width);
        expect(rightJustifyInstance.execute()).toBe('Hello');
    });

    it('should handle non-string inputs', () => {
        expect(() => new RightJustify(123, 5)).toThrowError('Invalid input. String, width, and fillChar must be provided.');
    });
});
