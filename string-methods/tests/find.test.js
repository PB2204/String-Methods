const Find = require('../src/find');

describe('Find', () => {
    it('should find the position of a substring in a string', () => {
        const findInstance = new Find('Hello, World!', 'World');
        expect(findInstance.execute()).toBe(7);
    });

    it('should return -1 if the substring is not found', () => {
        const findInstance = new Find('Hello, World!', 'Universe');
        expect(findInstance.execute()).toBe(-1);
    });

    it('should handle non-string inputs', () => {
        expect(() => new Find(123, 'World')).toThrowError('Input must be a string');
    });
});
