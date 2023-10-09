const IsAlnum = require('../src/isAlnum');

describe('IsAlnum', () => {
    it('should return true for alphanumeric strings', () => {
        const isAlnumInstance = new IsAlnum('abc123');
        expect(isAlnumInstance.execute()).toBe(true);
    });

    it('should return false for non-alphanumeric strings', () => {
        const isAlnumInstance = new IsAlnum('abc@123');
        expect(isAlnumInstance.execute()).toBe(false);
    });

    it('should return false for an empty string', () => {
        const isAlnumInstance = new IsAlnum('');
        expect(isAlnumInstance.execute()).toBe(false);
    });

    it('should handle non-string inputs', () => {
        expect(() => new IsAlnum(123)).toThrowError('Input must be a string');
    });
});
