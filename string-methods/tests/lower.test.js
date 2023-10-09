const Lower = require('../src/lower');

describe('Lower', () => {
    it('should convert a string to lowercase', () => {
        const str = 'Hello World';
        const lowerInstance = new Lower(str);
        expect(lowerInstance.execute()).toBe('hello world');
    });

    it('should handle an already lowercase string', () => {
        const str = 'all lowercase';
        const lowerInstance = new Lower(str);
        expect(lowerInstance.execute()).toBe('all lowercase');
    });

    it('should handle non-string inputs', () => {
        expect(() => new Lower(123)).toThrowError('Input must be a string');
    });
});
