const Title = require('../src/title');

describe('Title', () => {
    it('should capitalize the first character of each word', () => {
        const str = 'hello world';
        const titleInstance = new Title(str);
        expect(titleInstance.execute()).toBe('Hello World');
    });

    it('should handle strings with special characters', () => {
        const str = 'this_is_a_test';
        const titleInstance = new Title(str);
        expect(titleInstance.execute()).toBe('This_is_a_test');
    });

    it('should handle strings with numbers', () => {
        const str = '123 test 456';
        const titleInstance = new Title(str);
        expect(titleInstance.execute()).toBe('123 Test 456');
    });

    it('should handle non-string inputs', () => {
        const str = 123;
        expect(() => new Title(str)).toThrowError('Input must be a string.');
    });
});
