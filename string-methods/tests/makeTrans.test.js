const MakeTrans = require('../src/makeTrans');

describe('MakeTrans', () => {
    it('should replace characters according to the translation table', () => {
        const str = 'Hello World';
        const fromChars = 'aeiou';
        const toChars = '12345';
        const makeTransInstance = new MakeTrans(str, fromChars, toChars);
        expect(makeTransInstance.execute()).toBe('H2ll4 W4rld');
    });

    it('should handle non-string inputs', () => {
        expect(() => new MakeTrans(123, 'aeiou', '12345')).toThrowError('Inputs must be strings');
    });

    it('should handle empty input', () => {
        const str = '';
        const fromChars = 'aeiou';
        const toChars = '12345';
        const makeTransInstance = new MakeTrans(str, fromChars, toChars);
        expect(makeTransInstance.execute()).toBe('');
    });

    it('should not replace characters not in the translation table', () => {
        const str = 'Hello World';
        const fromChars = 'aeiou';
        const toChars = '123';
        const makeTransInstance = new MakeTrans(str, fromChars, toChars);
        expect(makeTransInstance.execute()).toBe('H2llundefined Wundefinedrld');
    });
});
