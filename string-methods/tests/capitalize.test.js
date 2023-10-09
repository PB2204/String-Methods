const capitalize = require('../src/capitalize');

describe('capitalize', () => {
    it('should capitalize the first letter of a word', () => {
        const capitalizeInstance = new capitalize('hello');
        expect(capitalizeInstance.execute()).toBe('Hello');
    });

    it('should convert the rest of the word to lowercase', () => {
        const capitalizeInstance = new capitalize('WORLD');
        expect(capitalizeInstance.execute()).toBe('World');
    });

    it('should handle empty strings', () => {
        const capitalizeInstance = new capitalize('');
        expect(capitalizeInstance.execute()).toBe('');
    });

    it('should handle non-string inputs', () => {
        expect(() => new capitalize(123)).toThrowError('Input must be a string');
        expect(() => new capitalize(null)).toThrowError('Input must be a string');
    });
});
