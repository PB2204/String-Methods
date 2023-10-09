const Strip = require('../src/strip');

describe('Strip', () => {
    it('should remove leading and trailing whitespace', () => {
        const str = '  Hello, world!  ';
        const stripInstance = new Strip(str);
        expect(stripInstance.execute()).toBe('Hello, world!');
    });

    it('should handle strings without leading or trailing whitespace', () => {
        const str = 'Hello, world!';
        const stripInstance = new Strip(str);
        expect(stripInstance.execute()).toBe('Hello, world!');
    });

    it('should handle non-string inputs', () => {
        const str = 123;
        expect(() => new Strip(str)).toThrowError('Input must be a string.');
    });
});
