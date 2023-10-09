## Lower

This module provides a class for converting a string to lowercase.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const Lower = require('node-string-methods/lower');

// Create an instance of the Lower class with a string
const str1 = 'Hello World';
const str2 = 'UPPERCASE';
const lower1 = new Lower(str1);
const lower2 = new Lower(str2);

// Execute the lowercase operation
const result1 = lower1.execute();
const result2 = lower2.execute();

console.log(result1); // Output: 'hello world'
console.log(result2); // Output: 'uppercase'
```

### Constructor

#### `new Lower(str)`

- `str` (String): The input string that you want to convert to lowercase.

Creates a new instance of the `Lower` class with the provided input string.

### Methods

#### `execute()`

Converts the input string to lowercase.

- Returns: A string in lowercase.

### Example

```javascript
const Lower = require('node-string-methods/lower');

const str1 = 'Hello World';
const str2 = 'UPPERCASE';
const lower1 = new Lower(str1);
const lower2 = new Lower(str2);

const result1 = lower1.execute();
const result2 = lower2.execute();

console.log(result1); // Output: 'hello world'
console.log(result2); // Output: 'uppercase'
```
