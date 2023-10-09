const Partition = require('../src/partition');

describe('Partition', () => {
    it('should split the string into three parts at the first occurrence of the separator', () => {
        const str = 'Hello, World!';
        const separator = ', ';
        const partitionInstance = new Partition(str, separator);
        expect(partitionInstance.execute()).toEqual(['Hello', ', ', 'World!']);
    });

    it('should handle non-string inputs', () => {
        expect(() => new Partition(123, ', ')).toThrowError('Inputs must be strings');
    });

    it('should return the whole string as the first part if the separator is not found', () => {
        const str = 'Hello, World!';
        const separator = ': ';
        const partitionInstance = new Partition(str, separator);
        expect(partitionInstance.execute()).toEqual(['Hello, World!', '', '']);
    });

    it('should return an empty second and third part if the separator is at the end of the string', () => {
        const str = 'Hello, World!';
        const separator = '!';
        const partitionInstance = new Partition(str, separator);
        expect(partitionInstance.execute()).toEqual(['Hello, World', '!', '']);
    });
});
