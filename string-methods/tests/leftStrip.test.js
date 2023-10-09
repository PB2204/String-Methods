const LeftStrip = require('../src/leftStrip');

describe('LeftStrip', () => {
    it('should strip whitespace characters from the left', () => {
        const str = '   Hello World';
        const leftStripInstance = new LeftStrip(str);
        expect(leftStripInstance.execute()).toBe('Hello World');
    });

    it('should strip custom characters from the left', () => {
        const str = '***12345';
        const leftStripInstance = new LeftStrip(str, '*');
        expect(leftStripInstance.execute()).toBe('12345');
    });

    it('should handle non-string inputs', () => {
        expect(() => new LeftStrip(123)).toThrowError('Input must be a string');
    });

    it('should handle empty input', () => {
        const str = '';
        const leftStripInstance = new LeftStrip(str);
        expect(leftStripInstance.execute()).toBe('');
    });

    it('should not strip when no characters to strip', () => {
        const str = 'Hello World';
        const leftStripInstance = new LeftStrip(str);
        expect(leftStripInstance.execute()).toBe('Hello World');
    });
});
