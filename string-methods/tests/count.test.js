const Count = require('../src/count');

describe('Count', () => {
  describe('count', () => {
    it('should count the occurrences of a substring', () => {
      const counter = new Count('Hello, Hello, World, Hello');
      expect(counter.count('Hello')).toBe(3);
      expect(counter.count('World')).toBe(1);
      expect(counter.count('Goodbye')).toBe(0);
    });

    it('should handle empty strings', () => {
      const counter = new Count('');
      expect(counter.count('Hello')).toBe(0);
    });

    it('should handle empty substrings', () => {
      const counter = new Count('Hello, Hello, World, Hello');
      expect(counter.count('')).toBe(0);
    });

    it('should handle non-existent substrings', () => {
      const counter = new Count('Hello, Hello, World, Hello');
      expect(counter.count('Goodbye')).toBe(0);
    });
  });
});
