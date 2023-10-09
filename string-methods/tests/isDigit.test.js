const IsDigit = require('../src/isDigit');

describe('IsDigit', () => {
    it('should return true for digit strings', () => {
        const isDigitInstance = new IsDigit('12345');
        expect(isDigitInstance.execute()).toBe(true);
    });

    it('should return false for non-digit strings', () => {
        const isDigitInstance = new IsDigit('123.45');
        expect(isDigitInstance.execute()).toBe(false);
    });

    it('should return false for non-numeric strings', () => {
        const isDigitInstance = new IsDigit('Hello, World!');
        expect(isDigitInstance.execute()).toBe(false);
    });

    it('should return true for an empty string', () => {
        const isDigitInstance = new IsDigit('');
        expect(isDigitInstance.execute()).toBe(false);
    });

    it('should handle non-string inputs', () => {
        expect(() => new IsDigit(123)).toThrowError('Input must be a string');
    });
});
