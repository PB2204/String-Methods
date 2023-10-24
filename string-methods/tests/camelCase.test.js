const CamelCase = require('../src/camelCase');

describe('camelCase', () => {
    it('should convert the rest of the word to lowercase', () => {
        const camelCaseInstance = new CamelCase('WORLD');
        expect(camelCaseInstance.execute()).toBe('world');
    });

    it('should convert "hello world" to "helloWorld"', () => {
        const camelCaseInstance = new CamelCase('hello world');
        expect(camelCaseInstance.execute()).toBe('helloWorld');
    });

    it('should convert "FIRST name LAST" to "firstNameLast"', () => {
        const camelCaseInstance = new CamelCase('FIRST name LAST');
        expect(camelCaseInstance.execute()).toBe('firstNameLast');
    });

    it('should convert "   mixed INPUT data  " to "mixedInputData"', () => {
        const camelCaseInstance = new CamelCase('   mixed INPUT data  ');
        expect(camelCaseInstance.execute()).toBe('mixedInputData');
    });

    it('should handle single word strings', () => {
        const camelCaseInstance = new CamelCase('TESTING');
        expect(camelCaseInstance.execute()).toBe('testing');
    });

    it('should handle strings with underscores', () => {
        const camelCaseInstance = new CamelCase('first_name_last');
        expect(camelCaseInstance.execute()).toBe('firstNameLast');
    });

    it('should handle strings with dashes', () => {
        const camelCaseInstance = new CamelCase('first-name-last');
        expect(camelCaseInstance.execute()).toBe('firstNameLast');
    });

    it('should handle strings with mixed special characters', () => {
        const camelCaseInstance = new CamelCase('first_name-last');
        expect(camelCaseInstance.execute()).toBe('firstNameLast');
    });

    it('should handle empty strings', () => {
        const camelCaseInstance = new CamelCase('');
        expect(camelCaseInstance.execute()).toBe('');
    });

    it('should handle non-string inputs', () => {
        expect(() => new CamelCase(123)).toThrowError('Input must be a string');
        expect(() => new CamelCase(null)).toThrowError(
            'Input must be a string'
        );
    });
});
