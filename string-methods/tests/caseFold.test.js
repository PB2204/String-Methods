const caseFolder = require('../src/caseFold');

describe('caseFolder', () => {
    it('should create an instance with a valid string', () => {
        expect(() => new caseFolder('Hello')).not.toThrow();
    });

    it('should throw an error with invalid input', () => {
        expect(() => new caseFolder(123)).toThrowError('Input must be a string');
        expect(() => new caseFolder(null)).toThrowError('Input must be a string');
    });

    it('should perform case-folding', () => {
        const mycaseFolder = new caseFolder('Hello World');
        const foldedString = mycaseFolder.caseFold();
        expect(foldedString).toBe('hello world');
    });
});
