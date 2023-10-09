## SplitLines

This module provides a class for splitting a string into an array of lines based on line breaks (both `\n` and `\r\n`).

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const SplitLines = require('node-string-methods/splitLines');

// Create an instance of the SplitLines class with a string
const str = 'Line 1\nLine 2\r\nLine 3';
const splitter = new SplitLines(str);

// Execute the split-lines operation
const result = splitter.execute();

console.log(result);
// Output: ['Line 1', 'Line 2', 'Line 3']
```

### Constructor

#### `new SplitLines(str)`

- `str` (String): The input string that you want to split into lines.

Creates a new instance of the `SplitLines` class with the provided input string.

### Methods

#### `execute()`

Splits the input string into an array of lines based on line breaks (both `\n` and `\r\n`).

- Returns: An array containing the split lines.

### Example

```javascript
const SplitLines = require('node-string-methods/splitLines');

const str = 'Line 1\nLine 2\r\nLine 3';
const splitter = new SplitLines(str);

const result = splitter.execute();

console.log(result);
// Output: ['Line 1', 'Line 2', 'Line 3']
```
