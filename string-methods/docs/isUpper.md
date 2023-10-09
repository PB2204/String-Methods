## IsUpper

This module provides a class for checking if a string consists of uppercase letters only.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const IsUpper = require('node-string-methods/isUpper');

// Create an instance of the IsUpper class with a string
const str1 = 'UPPERCASE';
const str2 = 'MixedCase';
const upperChecker1 = new IsUpper(str1);
const upperChecker2 = new IsUpper(str2);

// Execute the isUpper operation
const result1 = upperChecker1.execute();
const result2 = upperChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```

### Constructor

#### `new IsUpper(str)`

- `str` (String): The input string that you want to check for consisting of uppercase letters.

Creates a new instance of the `IsUpper` class with the provided input string.

### Methods

#### `execute()`

Checks if the input string consists of uppercase letters only.

- Returns: `true` if the input string consists of uppercase letters only, `false` otherwise.

### Example

```javascript
const IsUpper = require('node-string-methods/isUpper');

const str1 = 'UPPERCASE';
const str2 = 'MixedCase';
const upperChecker1 = new IsUpper(str1);
const upperChecker2 = new IsUpper(str2);

const result1 = upperChecker1.execute();
const result2 = upperChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```
