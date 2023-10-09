const IsSpace = require('../src/isSpace');

describe('IsSpace', () => {
    it('should return true for a string containing only spaces', () => {
        const isSpaceInstance1 = new IsSpace('   ');
        expect(isSpaceInstance1.execute()).toBe(true);

        const isSpaceInstance2 = new IsSpace('\t \t  \t');
        expect(isSpaceInstance2.execute()).toBe(true);
    });

    it('should return false for a string containing non-space characters', () => {
        const isSpaceInstance1 = new IsSpace('   Hello   ');
        expect(isSpaceInstance1.execute()).toBe(false);

        const isSpaceInstance2 = new IsSpace('\t \t  World  \t');
        expect(isSpaceInstance2.execute()).toBe(false);
    });

    it('should handle non-string inputs', () => {
        expect(() => new IsSpace(123)).toThrowError('Input must be a string');
    });
});
