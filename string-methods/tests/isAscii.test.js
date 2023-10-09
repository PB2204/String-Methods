const IsAscii = require('../src/isAscii');

describe('IsAscii', () => {
    it('should return true for ASCII strings', () => {
        const isAsciiInstance = new IsAscii('Hello, World!');
        expect(isAsciiInstance.execute()).toBe(true);
    });

    it('should return true for an empty string', () => {
        const isAsciiInstance = new IsAscii('');
        expect(isAsciiInstance.execute()).toBe(true);
    });

    it('should return false for non-ASCII strings', () => {
        const isAsciiInstance = new IsAscii('Hello, 世界');
        expect(isAsciiInstance.execute()).toBe(false);
    });

    it('should handle non-string inputs', () => {
        expect(() => new IsAscii(123)).toThrowError('Input must be a string');
    });
});
