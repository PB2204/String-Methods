const Encode = require('../src/encode');

describe('Encode', () => {
    it('should encode a string to hexadecimal', () => {
        const encodeInstance = new Encode('Hello, World!');
        expect(encodeInstance.execute()).toBe('48656C6C6F2C20576F726C6421');
    });

    it('should handle an empty string', () => {
        const encodeInstance = new Encode('');
        expect(encodeInstance.execute()).toBe('');
    });

    it('should handle non-string inputs', () => {
        expect(() => new Encode(123)).toThrowError('Input must be a string');
    });
});