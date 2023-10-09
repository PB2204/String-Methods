## IsSpace

This module provides a class for checking if a string consists of only whitespace characters or is an empty string.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const IsSpace = require('node-string-methods/isSpace');

// Create an instance of the IsSpace class with a string
const str1 = '   ';
const str2 = 'Non-empty';
const str3 = '';
const spaceChecker1 = new IsSpace(str1);
const spaceChecker2 = new IsSpace(str2);
const spaceChecker3 = new IsSpace(str3);

// Execute the isSpace operation
const result1 = spaceChecker1.execute();
const result2 = spaceChecker2.execute();
const result3 = spaceChecker3.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
console.log(result3); // Output: true
```

### Constructor

#### `new IsSpace(str)`

- `str` (String): The input string that you want to check as containing only whitespace characters or being an empty string.

Creates a new instance of the `IsSpace` class with the provided input string.

### Methods

#### `execute()`

Checks if the input string consists of only whitespace characters or is an empty string after trimming leading and trailing whitespace.

- Returns: `true` if the input string consists of only whitespace characters or is an empty string, `false` otherwise.

### Example

```javascript
const IsSpace = require('node-string-methods/isSpace');

const str1 = '   ';
const str2 = 'Non-empty';
const str3 = '';
const spaceChecker1 = new IsSpace(str1);
const spaceChecker2 = new IsSpace(str2);
const spaceChecker3 = new IsSpace(str3);

const result1 = spaceChecker1.execute();
const result2 = spaceChecker2.execute();
const result3 = spaceChecker3.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
console.log(result3); // Output: true
```
