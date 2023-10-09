## IsNumeric

This module provides a class for checking if a string represents a numeric value (integer or floating-point number).

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const IsNumeric = require('node-string-methods/isNumeric');

// Create an instance of the IsNumeric class with a string
const str1 = '12345';
const str2 = '12.345';
const str3 = 'NotNumeric';
const numericChecker1 = new IsNumeric(str1);
const numericChecker2 = new IsNumeric(str2);
const numericChecker3 = new IsNumeric(str3);

// Execute the isNumeric operation
const result1 = numericChecker1.execute();
const result2 = numericChecker2.execute();
const result3 = numericChecker3.execute();

console.log(result1); // Output: true
console.log(result2); // Output: true
console.log(result3); // Output: false
```

### Constructor

#### `new IsNumeric(str)`

- `str` (String): The input string that you want to check as a numeric value.

Creates a new instance of the `IsNumeric` class with the provided input string.

### Methods

#### `execute()`

Checks if the input string represents a numeric value (integer or floating-point number).

- Returns: `true` if the input string represents a numeric value, `false` otherwise.

### Example

```javascript
const IsNumeric = require('node-string-methods/isNumeric');

const str1 = '12345';
const str2 = '12.345';
const str3 = 'NotNumeric';
const numericChecker1 = new IsNumeric(str1);
const numericChecker2 = new IsNumeric(str2);
const numericChecker3 = new IsNumeric(str3);

const result1 = numericChecker1.execute();
const result2 = numericChecker2.execute();
const result3 = numericChecker3.execute();

console.log(result1); // Output: true
console.log(result2); // Output: true
console.log(result3); // Output: false
```

### Notes

- The `IsNumeric` class uses the `isNaN` function to check if the string can be converted to a numeric value.
