const RightIndex = require('../src/rightIndex');

describe('RightIndex', () => {
    it('should find the last index of a substring', () => {
        const str = 'Hello, World! Hello, Universe!';
        const substring = 'Hello';
        const rightIndexInstance = new RightIndex(str, substring);
        expect(rightIndexInstance.execute()).toBe(14);
    });

    it('should handle non-string inputs', () => {
        expect(() => new RightIndex(123, '3')).toThrowError('Input must be a string');
    });

    it('should return -1 when the substring is not found', () => {
        const str = 'Hello, World!';
        const substring = 'Goodbye';
        const rightIndexInstance = new RightIndex(str, substring);
        expect(rightIndexInstance.execute()).toBe(-1);
    });

    it('should find the last index of a single character substring', () => {
        const str = 'Hello, World! Hello, Universe!';
        const substring = '!';
        const rightIndexInstance = new RightIndex(str, substring);
        expect(rightIndexInstance.execute()).toBe(29);
    });

    it('should find the last index of the entire string', () => {
        const str = 'Hello, World! Hello, Universe!';
        const substring = str;
        const rightIndexInstance = new RightIndex(str, substring);
        expect(rightIndexInstance.execute()).toBe(0);
    });
});
