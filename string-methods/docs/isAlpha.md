## IsAlpha

This module provides a class for checking if a string contains only alphabetic characters (letters).

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const IsAlpha = require('node-string-methods/isAlpha');

// Create an instance of the IsAlpha class with a string
const str1 = 'Alphabetic';
const str2 = 'Non-Alphabetic123';
const alphaChecker1 = new IsAlpha(str1);
const alphaChecker2 = new IsAlpha(str2);

// Execute the isAlpha operation
const result1 = alphaChecker1.execute();
const result2 = alphaChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```

### Constructor

#### `new IsAlpha(str)`

- `str` (String): The input string that you want to check for alphabetic characters.

Creates a new instance of the `IsAlpha` class with the provided input string.

### Methods

#### `execute()`

Checks if the input string contains only alphabetic characters (letters).

- Returns: `true` if the input string contains only alphabetic characters, `false` otherwise.

### Example

```javascript
const IsAlpha = require('node-string-methods/isAlpha');

const str1 = 'Alphabetic';
const str2 = 'NonAlphabetic123';
const alphaChecker1 = new IsAlpha(str1);
const alphaChecker2 = new IsAlpha(str2);

const result1 = alphaChecker1.execute();
const result2 = alphaChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```
