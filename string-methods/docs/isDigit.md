## IsDigit

This module provides a class for checking if a string consists of digits (0-9) only.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const IsDigit = require('node-string-methods/isDigit');

// Create an instance of the IsDigit class with a string
const str1 = '12345';
const str2 = '12.345';
const digitChecker1 = new IsDigit(str1);
const digitChecker2 = new IsDigit(str2);

// Execute the isDigit operation
const result1 = digitChecker1.execute();
const result2 = digitChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```

### Constructor

#### `new IsDigit(str)`

- `str` (String): The input string that you want to check for consisting of digits.

Creates a new instance of the `IsDigit` class with the provided input string.

### Methods

#### `execute()`

Checks if the input string consists of digits (0-9) only.

- Returns: `true` if the input string consists of digits only, `false` otherwise.

### Example

```javascript
const IsDigit = require('node-string-methods/isDigit');

const str1 = '12345';
const str2 = '12.345';
const digitChecker1 = new IsDigit(str1);
const digitChecker2 = new IsDigit(str2);

const result1 = digitChecker1.execute();
const result2 = digitChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```
