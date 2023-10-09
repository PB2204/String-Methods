const IsDecimal = require('../src/isDecimal');

describe('IsDecimal', () => {
    it('should return true for decimal strings', () => {
        const isDecimalInstance = new IsDecimal('12345');
        expect(isDecimalInstance.execute()).toBe(true);
    });

    it('should return false for non-decimal strings', () => {
        const isDecimalInstance = new IsDecimal('123.45');
        expect(isDecimalInstance.execute()).toBe(false);
    });

    it('should return false for non-numeric strings', () => {
        const isDecimalInstance = new IsDecimal('Hello, World!');
        expect(isDecimalInstance.execute()).toBe(false);
    });

    it('should return true for an empty string', () => {
        const isDecimalInstance = new IsDecimal('');
        expect(isDecimalInstance.execute()).toBe(false);
    });

    it('should handle non-string inputs', () => {
        expect(() => new IsDecimal(123)).toThrowError('Input must be a string');
    });
});
