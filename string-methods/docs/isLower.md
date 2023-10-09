## IsLower

This module provides a class for checking if a string consists of lowercase letters only.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const IsLower = require('node-string-methods/isLower');

// Create an instance of the IsLower class with a string
const str1 = 'lowercase';
const str2 = 'MixedCase';
const lowerChecker1 = new IsLower(str1);
const lowerChecker2 = new IsLower(str2);

// Execute the isLower operation
const result1 = lowerChecker1.execute();
const result2 = lowerChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```

### Constructor

#### `new IsLower(str)`

- `str` (String): The input string that you want to check for consisting of lowercase letters.

Creates a new instance of the `IsLower` class with the provided input string.

### Methods

#### `execute()`

Checks if the input string consists of lowercase letters only.

- Returns: `true` if the input string consists of lowercase letters only, `false` otherwise.

### Example

```javascript
const IsLower = require('node-string-methods/isLower');

const str1 = 'lowercase';
const str2 = 'MixedCase';
const lowerChecker1 = new IsLower(str1);
const lowerChecker2 = new IsLower(str2);

const result1 = lowerChecker1.execute();
const result2 = lowerChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```
