const ZeroFill = require('../src/zeroFill');

describe('ZeroFill', () => {
    it('should pad with leading zeros to reach the specified width', () => {
        const number = 42;
        const width = 5;
        const zeroFillInstance = new ZeroFill(number, width);
        expect(zeroFillInstance.execute()).toBe('00042');
    });

    it('should handle negative numbers', () => {
        const number = -7;
        const width = 4;
        const zeroFillInstance = new ZeroFill(number, width);
        expect(zeroFillInstance.execute()).toBe('00-7');
    });

    it('should handle wider width than the number length', () => {
        const number = 123;
        const width = 3;
        const zeroFillInstance = new ZeroFill(number, width);
        expect(zeroFillInstance.execute()).toBe('123');
    });

    it('should handle non-numeric inputs', () => {
        const number = 'test';
        const width = 2;
        expect(() => new ZeroFill(number, width)).toThrowError('Both inputs must be numbers.');
    });
});
