const Center = require('../src/center');

describe('Center', () => {
    it('should center the string within the given width', () => {
        const centerInstance = new Center('Hello', 10, '-');
        expect(centerInstance.execute()).toBe('--Hello---');
    });

    it('should handle cases where width is less than string length', () => {
        const centerInstance = new Center('Hi', 1, '-');
        expect(centerInstance.execute()).toBe('Hi');
    });

    it('should use space as the default fill character', () => {
        const centerInstance = new Center('Center', 8);
        expect(centerInstance.execute()).toBe(' Center ');
    });

    it('should handle non-string inputs', () => {
        expect(() => new Center(123, 10, '-')).toThrowError('Input must be a string');
    });
});