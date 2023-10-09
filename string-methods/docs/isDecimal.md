## IsDecimal

This module provides a class for checking if a string represents a valid decimal number (positive integers).

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const IsDecimal = require('node-string-methods/isDecimal');

// Create an instance of the IsDecimal class with a string
const str1 = '12345';
const str2 = '12.345';
const decimalChecker1 = new IsDecimal(str1);
const decimalChecker2 = new IsDecimal(str2);

// Execute the isDecimal operation
const result1 = decimalChecker1.execute();
const result2 = decimalChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```

### Constructor

#### `new IsDecimal(str)`

- `str` (String): The input string that you want to check for being a valid decimal number.

Creates a new instance of the `IsDecimal` class with the provided input string.

### Methods

#### `execute()`

Checks if the input string represents a valid decimal number (positive integers).

- Returns: `true` if the input string represents a valid decimal number, `false` otherwise.

### Example

```javascript
const IsDecimal = require('node-string-methods/isDecimal');

const str1 = '12345';
const str2 = '12.345';
const decimalChecker1 = new IsDecimal(str1);
const decimalChecker2 = new IsDecimal(str2);

const result1 = decimalChecker1.execute();
const result2 = decimalChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```
