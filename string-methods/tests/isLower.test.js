const IsLower = require('../src/isLower');

describe('IsLower', () => {
    it('should return true for a lowercase string', () => {
        const isLowerInstance1 = new IsLower('abcdefg');
        expect(isLowerInstance1.execute()).toBe(true);

        const isLowerInstance2 = new IsLower('hello');
        expect(isLowerInstance2.execute()).toBe(true);
    });

    it('should return false for a mixed-case string', () => {
        const isLowerInstance1 = new IsLower('HelloWorld');
        expect(isLowerInstance1.execute()).toBe(false);

        const isLowerInstance2 = new IsLower('MixedCase');
        expect(isLowerInstance2.execute()).toBe(false);
    });

    it('should handle non-string inputs', () => {
        expect(() => new IsLower(123)).toThrowError('Input must be a string');
    });
});
