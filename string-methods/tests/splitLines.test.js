const SplitLines = require('../src/splitLines');

describe('SplitLines', () => {
    it('should split a multiline string into an array of lines', () => {
        const str = 'Line 1\nLine 2\r\nLine 3';
        const splitLinesInstance = new SplitLines(str);
        expect(splitLinesInstance.execute()).toEqual(['Line 1', 'Line 2', 'Line 3']);
    });

    it('should return an array with the original string as a single line if no line breaks are found', () => {
        const str = 'Single Line';
        const splitLinesInstance = new SplitLines(str);
        expect(splitLinesInstance.execute()).toEqual(['Single Line']);
    });

    it('should handle non-string inputs', () => {
        const str = 123;
        expect(() => new SplitLines(str)).toThrowError('Input must be a string.');
    });
});
