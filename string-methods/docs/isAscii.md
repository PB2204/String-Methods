## IsAscii

This module provides a class for checking if a string contains only ASCII characters.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const IsAscii = require('node-string-methods/isAscii');

// Create an instance of the IsAscii class with a string
const str1 = 'This is ASCII';
const str2 = 'Non-ASCII: é, ö, ñ';
const asciiChecker1 = new IsAscii(str1);
const asciiChecker2 = new IsAscii(str2);

// Execute the isAscii operation
const result1 = asciiChecker1.execute();
const result2 = asciiChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```

### Constructor

#### `new IsAscii(str)`

- `str` (String): The input string that you want to check for ASCII characters.

Creates a new instance of the `IsAscii` class with the provided input string.

### Methods

#### `execute()`

Checks if the input string contains only ASCII characters (characters with byte values between 0 and 127).

- Returns: `true` if the input string contains only ASCII characters, `false` otherwise.

### Example

```javascript
const IsAscii = require('node-string-methods/isAscii');

const str1 = 'This is ASCII';
const str2 = 'Non-ASCII: é, ö, ñ';
const asciiChecker1 = new IsAscii(str1);
const asciiChecker2 = new IsAscii(str2);

const result1 = asciiChecker1.execute();
const result2 = asciiChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```
