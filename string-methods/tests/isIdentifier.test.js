const IsIdentifier = require('../src/isIdentifier');

describe('IsIdentifier', () => {
    it('should return true for valid identifiers', () => {
        const isIdentifierInstance1 = new IsIdentifier('myVar');
        expect(isIdentifierInstance1.execute()).toBe(true);

        const isIdentifierInstance2 = new IsIdentifier('_privateVar');
        expect(isIdentifierInstance2.execute()).toBe(true);

        const isIdentifierInstance3 = new IsIdentifier('Var123');
        expect(isIdentifierInstance3.execute()).toBe(true);
    });

    it('should return false for invalid identifiers', () => {
        const isIdentifierInstance1 = new IsIdentifier('123Var');
        expect(isIdentifierInstance1.execute()).toBe(false);

        const isIdentifierInstance2 = new IsIdentifier('!invalid');
        expect(isIdentifierInstance2.execute()).toBe(false);

        const isIdentifierInstance3 = new IsIdentifier('with space');
        expect(isIdentifierInstance3.execute()).toBe(false);
    });

    it('should handle non-string inputs', () => {
        expect(() => new IsIdentifier(123)).toThrowError('Input must be a string');
    });
});
