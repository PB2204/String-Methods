## IsTitle

This module provides a class for checking if a string follows the title case format, where the first letter of each word is capitalized.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const IsTitle = require('node-string-methods/isTitle');

// Create an instance of the IsTitle class with a string
const str1 = 'Title Case Example';
const str2 = 'Not Title Case';
const titleChecker1 = new IsTitle(str1);
const titleChecker2 = new IsTitle(str2);

// Execute the isTitle operation
const result1 = titleChecker1.execute();
const result2 = titleChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```

### Constructor

#### `new IsTitle(str)`

- `str` (String): The input string that you want to check as following the title case format.

Creates a new instance of the `IsTitle` class with the provided input string.

### Methods

#### `execute()`

Checks if the input string follows the title case format, where the first letter of each word is capitalized.

- Returns: `true` if the input string follows the title case format, `false` otherwise.

### Example

```javascript
const IsTitle = require('node-string-methods/isTitle');

const str1 = 'Title Case Example';
const str2 = 'Not Title Case';
const titleChecker1 = new IsTitle(str1);
const titleChecker2 = new IsTitle(str2);

const result1 = titleChecker1.execute();
const result2 = titleChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```
