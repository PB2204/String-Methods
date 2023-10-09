## Replace

This module provides a class for replacing all occurrences of a substring in a string with a specified replacement string.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const Replace = require('node-string-methods/replace');

// Create an instance of the Replace class with a string, search string, and replacement string
const str = 'Hello, world! Hello, universe!';
const search = 'Hello';
const replacement = 'Hi';
const replacer = new Replace(str, search, replacement);

// Execute the replace operation
const result = replacer.execute();

console.log(result);
// Output: 'Hi, world! Hi, universe!'
```

### Constructor

#### `new Replace(str, search, replacement)`

- `str` (String): The input string in which you want to replace occurrences of a substring.
- `search` (String): The substring to search for in `str`.
- `replacement` (String): The string to replace occurrences of `search` with.

Creates a new instance of the `Replace` class with the provided input string, search string, and replacement string.

### Methods

#### `execute()`

Replaces all occurrences of the search string in the input string with the specified replacement string.

- Returns: A new string with all occurrences replaced.

### Example

```javascript
const Replace = require('node-string-methods/replace');

const str = 'Hello, world! Hello, universe!';
const search = 'Hello';
const replacement = 'Hi';
const replacer = new Replace(str, search, replacement);

const result = replacer.execute();

console.log(result);
// Output: 'Hi, world! Hi, universe!'
```
