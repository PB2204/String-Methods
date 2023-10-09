const Join = require('../src/join');

describe('Join', () => {
    it('should join an array of strings with a default separator', () => {
        const arr = ['Hello', 'World'];
        const joinInstance = new Join(arr);
        expect(joinInstance.execute()).toBe('HelloWorld');
    });

    it('should join an array of strings with a specified separator', () => {
        const arr = ['apple', 'banana', 'cherry'];
        const joinInstance = new Join(arr, ', ');
        expect(joinInstance.execute()).toBe('apple, banana, cherry');
    });

    it('should join an empty array', () => {
        const arr = [];
        const joinInstance = new Join(arr, ' ');
        expect(joinInstance.execute()).toBe('');
    });

    it('should handle non-array inputs', () => {
        expect(() => new Join('string')).toThrowError('Input must be an array');
    });
});
