const RightSplit = require('../src/rightSplit');

describe('RightSplit', () => {
  it('should split a string from the right using a separator', () => {
    const str = 'one,two,three,four';
    const separator = ',';
    const splitter = new RightSplit(str);
    expect(splitter.split(separator)).toEqual(['one', 'two', 'three', 'four']);
  });

  it('should limit the number of splits based on maxSplit', () => {
    const str = 'one,two,three,four,five';
    const separator = ',';
    const splitter = new RightSplit(str);
    expect(splitter.split(separator, 2)).toEqual(['one,two,three', 'four', 'five']);
  });

  it('should return the entire string if separator is not found', () => {
    const str = 'hello';
    const separator = '-';
    const splitter = new RightSplit(str);
    expect(splitter.split(separator)).toEqual(['hello']);
  });

  it('should handle non-string inputs', () => {
    expect(() => new RightSplit(123)).toThrowError('Invalid input. Input must be a string.');
    expect(() => new RightSplit('hello').split(123)).toThrowError('Invalid input. Separator must be a string.');
  });
});
