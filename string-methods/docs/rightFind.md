## RightFind

This module provides a class for finding the index of the last occurrence of a substring in a string.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const RightFind = require('node-string-methods/rightFind');

// Create an instance of the RightFind class with a string and substring
const str = 'Hello, world! Hello, universe!';
const substring = 'Hello';
const finder = new RightFind(str, substring);

// Execute the right-find operation
const result = finder.execute();

console.log(result); // Output: 13
```

### Constructor

#### `new RightFind(str, substring)`

- `str` (String): The input string in which you want to find the last occurrence of a substring.
- `substring` (String): The substring to search for in `str`.

Creates a new instance of the `RightFind` class with the provided input string and substring.

### Methods

#### `execute()`

Finds the index of the last occurrence of the substring in the input string.

- Returns: The index of the last occurrence of the substring, or `null` if the substring is not found.

### Example

```javascript
const RightFind = require('node-string-methods/rightFind');

const str = 'Hello, world! Hello, universe!';
const substring = 'Hello';
const finder = new RightFind(str, substring);

const result = finder.execute();

console.log(result); // Output: 13
```
