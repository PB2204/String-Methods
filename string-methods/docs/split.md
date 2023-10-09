## Split

This module provides a class for splitting a string into an array of substrings based on a specified delimiter.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const Split = require('node-string-methods/split');

// Create an instance of the Split class with a string and delimiter
const str = 'apple,banana,cherry';
const delimiter = ',';
const splitter = new Split(str, delimiter);

// Execute the split operation
const result = splitter.execute();

console.log(result);
// Output: ['apple', 'banana', 'cherry']
```

### Constructor

#### `new Split(str, delimiter)`

- `str` (String): The input string that you want to split.
- `delimiter` (String): The delimiter used to split `str` into an array of substrings.

Creates a new instance of the `Split` class with the provided input string and delimiter.

### Methods

#### `execute()`

Splits the input string into an array of substrings based on the specified delimiter.

- Returns: An array containing the split substrings.

### Example

```javascript
const Split = require('node-string-methods/split');

const str = 'apple,banana,cherry';
const delimiter = ',';
const splitter = new Split(str, delimiter);

const result = splitter.execute();

console.log(result);
// Output: ['apple', 'banana', 'cherry']
```
