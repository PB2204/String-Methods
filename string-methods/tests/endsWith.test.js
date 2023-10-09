const EndsWith = require('../src/endsWith');

describe('EndsWith', () => {
    it('should return true if a string ends with the specified substring', () => {
        const endsWithInstance = new EndsWith('Hello, World!', 'World!');
        expect(endsWithInstance.execute()).toBe(true);
    });

    it('should return false if a string does not end with the specified substring', () => {
        const endsWithInstance = new EndsWith('Hello, World!', 'Hello');
        expect(endsWithInstance.execute()).toBe(false);
    });

    it('should handle an empty string as the search string', () => {
        const endsWithInstance = new EndsWith('Hello, World!', '');
        expect(endsWithInstance.execute()).toBe(true);
    });

    it('should handle an empty string as the target string', () => {
        const endsWithInstance = new EndsWith('', 'World!');
        expect(endsWithInstance.execute()).toBe(false);
    });

    it('should handle a specified position for searching', () => {
        const endsWithInstance = new EndsWith('Hello, World!', 'Hello', 5);
        expect(endsWithInstance.execute()).toBe(false);
    });

    it('should return false for a negative position', () => {
        const endsWithInstance = new EndsWith('Hello, World!', 'Hello', -5);
        expect(endsWithInstance.execute()).toBe(false);
    });

    it('should handle non-string inputs', () => {
        expect(() => new EndsWith(123, 'World!')).toThrowError('Input must be strings');
        expect(() => new EndsWith('Hello, World!', 123)).toThrowError('Input must be strings');
    });
});
