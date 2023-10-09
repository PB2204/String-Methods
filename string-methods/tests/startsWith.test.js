const StartsWith = require('../src/startsWith');

describe('StartsWith', () => {
    it('should return true if the string starts with the given prefix', () => {
        const str = 'Hello, world!';
        const prefix = 'Hello';
        const startsWithInstance = new StartsWith(str, prefix);
        expect(startsWithInstance.execute()).toBe(true);
    });

    it('should return false if the string does not start with the given prefix', () => {
        const str = 'Hello, world!';
        const prefix = 'World';
        const startsWithInstance = new StartsWith(str, prefix);
        expect(startsWithInstance.execute()).toBe(false);
    });

    it('should handle non-string inputs', () => {
        const str = 123;
        const prefix = 'Hello';
        expect(() => new StartsWith(str, prefix)).toThrowError('Input must be strings.');
    });
});
