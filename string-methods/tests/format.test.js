const Format = require('../src/format');

describe('Format', () => {
    it('should format a string with placeholders', () => {
        const formatInstance = new Format('Hello, {0}! How are you, {1}?', 'Alice', 'Bob');
        expect(formatInstance.execute()).toBe('Hello, Alice! How are you, Bob?');
    });

    it('should handle placeholders with duplicate indices', () => {
        const formatInstance = new Format('My name is {0}, not {0}!', 'Alice');
        expect(formatInstance.execute()).toBe('My name is Alice, not Alice!');
    });

    it('should handle placeholders with missing arguments', () => {
        const formatInstance = new Format('Hello, {0}!', 'Alice', 'Bob');
        expect(formatInstance.execute()).toBe('Hello, Alice!');
    });

    it('should handle non-string format strings', () => {
        expect(() => new Format(123, 'Alice')).toThrowError('Format string must be a string');
    });
});
