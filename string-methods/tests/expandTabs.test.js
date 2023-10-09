const ExpandTabs = require('../src/expandTabs');

describe('ExpandTabs', () => {
    it('should expand tabs with the default tab width', () => {
        const expandTabsInstance = new ExpandTabs('Hello\tWorld!\t\tHow are you?');
        expect(expandTabsInstance.execute()).toBe('Hello    World!        How are you?');
    });

    it('should expand tabs with a custom tab width', () => {
        const expandTabsInstance = new ExpandTabs('Tab\tTest', 2);
        expect(expandTabsInstance.execute()).toBe('Tab  Test');
    });

    it('should handle non-string inputs', () => {
        expect(() => new ExpandTabs(123)).toThrowError('Input must be a string');
    });
});
