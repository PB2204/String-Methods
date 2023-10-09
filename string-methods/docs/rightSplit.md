## RightSplit

This module provides a class for splitting a string into an array of substrings based on the last occurrences of a specified separator.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const RightSplit = require('node-string-methods/rightSplit');

// Create an instance of the RightSplit class with a string
const str = 'apple,banana,cherry';
const splitter = new RightSplit(str);

// Execute the right split operation
const result = splitter.split(',');

console.log(result);
// Output: ['apple,banana', 'cherry']
```

### Constructor

#### `new RightSplit(str)`

- `str` (String): The input string that you want to split.

Creates a new instance of the `RightSplit` class with the provided input string.

### Methods

#### `split(separator, maxSplit = -1)`

Splits the input string into an array of substrings based on the last occurrences of the specified separator.

- `separator` (String): The separator string used to split `str`.
- `maxSplit` (Number, optional): The maximum number of splits to perform. Default is `-1`, meaning no limit.

- Returns: An array containing the split substrings.

### Example

```javascript
const RightSplit = require('node-string-methods/rightSplit');

const str = 'apple,banana,cherry';
const splitter = new RightSplit(str);

const result = splitter.split(',');

console.log(result);
// Output: ['apple,banana', 'cherry']
```
