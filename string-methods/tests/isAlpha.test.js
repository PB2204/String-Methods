const IsAlpha = require('../src/isAlpha');

describe('IsAlpha', () => {
    it('should return true for alphabetic strings', () => {
        const isAlphaInstance = new IsAlpha('abcDEF');
        expect(isAlphaInstance.execute()).toBe(true);
    });

    it('should return false for non-alphabetic strings', () => {
        const isAlphaInstance = new IsAlpha('abc123');
        expect(isAlphaInstance.execute()).toBe(false);
    });

    it('should return false for an empty string', () => {
        const isAlphaInstance = new IsAlpha('');
        expect(isAlphaInstance.execute()).toBe(false);
    });

    it('should handle non-string inputs', () => {
        expect(() => new IsAlpha(123)).toThrowError('Input must be a string');
    });
});
