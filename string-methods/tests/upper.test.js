const Upper = require('../src/upper');

describe('Upper', () => {
    it('should convert all characters to uppercase', () => {
        const str = 'hello world';
        const upperInstance = new Upper(str);
        expect(upperInstance.execute()).toBe('HELLO WORLD');
    });

    it('should handle strings with special characters', () => {
        const str = 'ThIs_is_a_TeSt';
        const upperInstance = new Upper(str);
        expect(upperInstance.execute()).toBe('THIS_IS_A_TEST');
    });

    it('should handle strings with numbers', () => {
        const str = '123 test 456';
        const upperInstance = new Upper(str);
        expect(upperInstance.execute()).toBe('123 TEST 456');
    });

    it('should handle non-string inputs', () => {
        const str = 123;
        expect(() => new Upper(str)).toThrowError('Input must be a string.');
    });
});
