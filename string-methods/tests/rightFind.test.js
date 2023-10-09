const RightFind = require('../src/rightFind');

describe('RightFind', () => {
    it('should find the last occurrence of a substring', () => {
        const str = 'Hello, World! Hello, Universe!';
        const substring = 'Hello';
        const rightFindInstance = new RightFind(str, substring);
        expect(rightFindInstance.execute()).toBe(14);
    });

    it('should handle non-string inputs', () => {
        expect(() => new RightFind(123, '3')).toThrowError('Input must be a string');
    });

    it('should return null when the substring is not found', () => {
        const str = 'Hello, World!';
        const substring = 'Goodbye';
        const rightFindInstance = new RightFind(str, substring);
        expect(rightFindInstance.execute()).toBeNull();
    });

    it('should find the last occurrence of a single character substring', () => {
        const str = 'Hello, World! Hello, Universe!';
        const substring = '!';
        const rightFindInstance = new RightFind(str, substring);
        expect(rightFindInstance.execute()).toBe(29);
    });

    it('should find the last occurrence of the entire string', () => {
        const str = 'Hello, World! Hello, Universe!';
        const substring = str;
        const rightFindInstance = new RightFind(str, substring);
        expect(rightFindInstance.execute()).toBe(0);
    });
});
