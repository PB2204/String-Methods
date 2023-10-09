const Split = require('../src/split');

describe('Split', () => {
    it('should split a string into an array based on the delimiter', () => {
        const str = 'Hello,World,How,Are,You';
        const delimiter = ',';
        const splitInstance = new Split(str, delimiter);
        expect(splitInstance.execute()).toEqual(['Hello', 'World', 'How', 'Are', 'You']);
    });

    it('should return an array with the original string if no delimiter is found', () => {
        const str = 'Hello World';
        const delimiter = ',';
        const splitInstance = new Split(str, delimiter);
        expect(splitInstance.execute()).toEqual(['Hello World']);
    });

    it('should handle non-string inputs', () => {
        const str = 123;
        const delimiter = ',';
        expect(() => new Split(str, delimiter)).toThrowError('Input must be a string.');
    });
});
