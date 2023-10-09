## Find

This module provides a class for finding the first occurrence of a substring within a given input string.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const Find = require('node-string-methods/find');

// Create an instance of the Find class with a string and a substring to search for
const str = 'Find the first occurrence of "find" in this string';
const substring = 'find';
const finder = new Find(str, substring);

// Execute the find operation
const result = finder.execute();

console.log(result); // Output: 0
```

### Constructor

#### `new Find(str, substring)`

- `str` (String): The input string in which you want to find the substring.
- `substring` (String): The substring to search for within the input string.

Creates a new instance of the `Find` class with the provided input string and substring.

### Methods

#### `execute()`

Finds the first occurrence of the specified substring within the input string.

- Returns: The index of the first occurrence of the substring in the input string. Returns `-1` if the substring is not found.

### Example

```javascript
const Find = require('node-string-methods/find');

const str = 'Find the first occurrence of "find" in this string';
const substring = 'find';
const finder = new Find(str, substring);

const result = finder.execute();

console.log(result); // Output: 0
```
