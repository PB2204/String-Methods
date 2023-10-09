## RightStrip

This module provides a class for removing trailing whitespace characters from the right end of a string.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const RightStrip = require('node-string-methods/rightStrip');

// Create an instance of the RightStrip class with a string
const str = '   Right-trimmed   ';
const stripper = new RightStrip(str);

// Execute the right-strip operation
const result = stripper.execute();

console.log(result);
// Output: '   Right-trimmed'
```

### Constructor

#### `new RightStrip(str)`

- `str` (String): The input string from which you want to remove trailing whitespace characters.

Creates a new instance of the `RightStrip` class with the provided input string.

### Methods

#### `execute()`

Removes trailing whitespace characters (spaces, tabs, etc.) from the right end of the input string.

- Returns: A new string with trailing whitespace characters removed from the right end.

### Example

```javascript
const RightStrip = require('node-string-methods/rightStrip');

const str = '   Right-trimmed   ';
const stripper = new RightStrip(str);

const result = stripper.execute();

console.log(result);
// Output: '   Right-trimmed'
```
