const IsTitle = require('../src/isTitle');

describe('IsTitle', () => {
    it('should return true for a title case string', () => {
        const isTitleInstance1 = new IsTitle('This Is a Title');
        expect(isTitleInstance1.execute()).toBe(false);

        const isTitleInstance2 = new IsTitle('Another Example Title');
        expect(isTitleInstance2.execute()).toBe(true);
    });

    it('should return false for a non-title case string', () => {
        const isTitleInstance1 = new IsTitle('Not A Title Case');
        expect(isTitleInstance1.execute()).toBe(true);

        const isTitleInstance2 = new IsTitle('Mixed Case StrIng');
        expect(isTitleInstance2.execute()).toBe(true);
    });

    it('should handle non-string inputs', () => {
        expect(() => new IsTitle(123)).toThrowError('Input must be a string');
    });
});
