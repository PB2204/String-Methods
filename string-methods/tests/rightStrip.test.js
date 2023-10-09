const RightStrip = require('../src/rightStrip');

describe('RightStrip', () => {
    it('should remove trailing whitespace from a string', () => {
        const str = '  Hello, World!   ';
        const rightStripInstance = new RightStrip(str);
        expect(rightStripInstance.execute()).toEqual('  Hello, World!');
    });

    it('should return the original string if there is no trailing whitespace', () => {
        const str = 'Hello, World!';
        const rightStripInstance = new RightStrip(str);
        expect(rightStripInstance.execute()).toEqual('Hello, World!');
    });

    it('should handle non-string inputs', () => {
        expect(() => new RightStrip(123)).toThrowError('Input must be a string.');
    });
});
