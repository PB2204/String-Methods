const RightPartition = require('../src/rightPartition');

describe('RightPartition', () => {
    it('should right partition a string using a separator', () => {
        const str = 'hello-world';
        const separator = '-';
        const rightPartitionInstance = new RightPartition(str, separator);
        expect(rightPartitionInstance.execute()).toEqual(['hello', '-', 'world']);
    });

    it('should return the entire string if separator is not found', () => {
        const str = 'hello';
        const separator = '-';
        const rightPartitionInstance = new RightPartition(str, separator);
        expect(rightPartitionInstance.execute()).toEqual(['hello', '', '']);
    });

    it('should handle non-string inputs', () => {
        expect(() => new RightPartition(123, '-')).toThrowError('Invalid input. Both input and separator must be strings.');
    });
});
