const IsUpper = require('../src/isUpper');

describe('IsUpper', () => {
    it('should return true for an all-uppercase string', () => {
        const isUpperInstance1 = new IsUpper('HELLO');
        expect(isUpperInstance1.execute()).toBe(true);

        const isUpperInstance2 = new IsUpper('ALL CAPS');
        expect(isUpperInstance2.execute()).toBe(true);
    });

    it('should return false for a non-all-uppercase string', () => {
        const isUpperInstance1 = new IsUpper('Not All Uppercase');
        expect(isUpperInstance1.execute()).toBe(false);

        const isUpperInstance2 = new IsUpper('MIXED CASE');
        expect(isUpperInstance2.execute()).toBe(true);
    });

    it('should handle non-string inputs', () => {
        expect(() => new IsUpper(123)).toThrowError('Input must be a string');
    });
});
