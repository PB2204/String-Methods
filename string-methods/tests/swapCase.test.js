const SwapCase = require('../src/swapCase');

describe('SwapCase', () => {
    it('should swap the case of alphabetic characters', () => {
        const str = 'Hello, World!';
        const swapCaseInstance = new SwapCase(str);
        expect(swapCaseInstance.execute()).toBe('hELLO, wORLD!');
    });

    it('should handle strings without alphabetic characters', () => {
        const str = '12345';
        const swapCaseInstance = new SwapCase(str);
        expect(swapCaseInstance.execute()).toBe('12345');
    });

    it('should handle non-string inputs', () => {
        const str = 123;
        expect(() => new SwapCase(str)).toThrowError('Input must be a string.');
    });
});
