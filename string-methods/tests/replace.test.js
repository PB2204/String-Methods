const Replace = require('../src/replace');

describe('Replace', () => {
    it('should replace all occurrences of a substring with another string', () => {
        const str = 'Hello, World! Hello, Universe!';
        const search = 'Hello';
        const replacement = 'Hi';
        const replaceInstance = new Replace(str, search, replacement);
        expect(replaceInstance.execute()).toBe('Hi, World! Hi, Universe!');
    });

    it('should handle non-string inputs', () => {
        expect(() => new Replace(123, '3', '4')).toThrowError('Inputs must be strings');
    });

    it('should replace all occurrences of a substring with an empty string', () => {
        const str = 'Hello, World! Hello, Universe!';
        const search = 'o';
        const replacement = '';
        const replaceInstance = new Replace(str, search, replacement);
        expect(replaceInstance.execute()).toBe('Hell, Wrld! Hell, Universe!');
    });

    it('should replace nothing when the substring is not found', () => {
        const str = 'Hello, World!';
        const search = 'Goodbye';
        const replacement = 'Hi';
        const replaceInstance = new Replace(str, search, replacement);
        expect(replaceInstance.execute()).toBe('Hello, World!');
    });
});
