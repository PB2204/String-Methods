## Strip

This module provides a class for removing leading and trailing whitespace characters from a string.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const Strip = require('node-string-methods/strip');

// Create an instance of the Strip class with a string
const str = '   Trimmed   ';
const stripper = new Strip(str);

// Execute the strip operation
const result = stripper.execute();

console.log(result);
// Output: 'Trimmed'
```

### Constructor

#### `new Strip(str)`

- `str` (String): The input string from which you want to remove leading and trailing whitespace characters.

Creates a new instance of the `Strip` class with the provided input string.

### Methods

#### `execute()`

Removes leading and trailing whitespace characters (spaces, tabs, etc.) from the input string.

- Returns: A new string with leading and trailing whitespace characters removed.

### Example

```javascript
const Strip = require('node-string-methods/strip');

const str = '   Trimmed   ';
const stripper = new Strip(str);

const result = stripper.execute();

console.log(result);
// Output: 'Trimmed'
```
