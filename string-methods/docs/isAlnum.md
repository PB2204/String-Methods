## IsAlnum

This module provides a class for checking if a string contains only alphanumeric characters.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const IsAlnum = require('node-string-methods/isAlnum');

// Create an instance of the IsAlnum class with a string
const str1 = 'Alphanumeric123';
const str2 = 'Non-Alphanumeric@123';
const alnumChecker1 = new IsAlnum(str1);
const alnumChecker2 = new IsAlnum(str2);

// Execute the isAlnum operation
const result1 = alnumChecker1.execute();
const result2 = alnumChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```

### Constructor

#### `new IsAlnum(str)`

- `str` (String): The input string that you want to check for alphanumeric characters.

Creates a new instance of the `IsAlnum` class with the provided input string.

### Methods

#### `execute()`

Checks if the input string contains only alphanumeric characters (letters and digits).

- Returns: `true` if the input string contains only alphanumeric characters, `false` otherwise.

### Example

```javascript
const IsAlnum = require('node-string-methods/isAlnum');

const str1 = 'AlphaNumeric123';
const str2 = 'NonAlphanumeric@123';
const alnumChecker1 = new IsAlnum(str1);
const alnumChecker2 = new IsAlnum(str2);

const result1 = alnumChecker1.execute();
const result2 = alnumChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```
