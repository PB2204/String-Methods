const IsNumeric = require('../src/isNumeric');

describe('IsNumeric', () => {
    it('should return true for a numeric string', () => {
        const isNumericInstance1 = new IsNumeric('123');
        expect(isNumericInstance1.execute()).toBe(true);

        const isNumericInstance2 = new IsNumeric('42.5');
        expect(isNumericInstance2.execute()).toBe(true);
    });

    it('should return false for a non-numeric string', () => {
        const isNumericInstance1 = new IsNumeric('abc');
        expect(isNumericInstance1.execute()).toBe(false);

        const isNumericInstance2 = new IsNumeric('123abc');
        expect(isNumericInstance2.execute()).toBe(false);
    });

    it('should handle non-string inputs', () => {
        expect(() => new IsNumeric(123)).toThrowError('Input must be a string');
    });
});
