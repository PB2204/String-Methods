## RightJustify

This module provides a class for right-justifying a string within a specified width by adding padding characters to the left.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const RightJustify = require('node-string-methods/rightJustify');

// Create an instance of the RightJustify class with a string, width, and optional fill character
const str1 = 'Right';
const str2 = 'Centered';
const width1 = 10;
const width2 = 5;
const fillChar1 = '-';
const fillChar2 = '*';
const justifier1 = new RightJustify(str1, width1, fillChar1);
const justifier2 = new RightJustify(str2, width2, fillChar2);

// Execute the right-justify operation
const result1 = justifier1.execute();
const result2 = justifier2.execute();

console.log(result1); // Output: '-----Right'
console.log(result2); // Output: 'Centered'
```

### Constructor

#### `new RightJustify(str, width, fillChar = ' ')`

- `str` (String): The input string that you want to right-justify.
- `width` (Number): The desired width of the output string.
- `fillChar` (String, optional): The optional fill character to use for padding. Default is a space character.

Creates a new instance of the `RightJustify` class with the provided input string, width, and optional fill character.

### Methods

#### `execute()`

Right-justifies the input string within the specified width by adding padding characters to the left.

- Returns: A string containing the right-justified output.

### Example

```javascript
const RightJustify = require('node-string-methods/rightJustify');

const str1 = 'Right';
const str2 = 'Centered';
const width1 = 10;
const width2 = 5;
const fillChar1 = '-';
const fillChar2 = '*';
const justifier1 = new RightJustify(str1, width1, fillChar1);
const justifier2 = new RightJustify(str2, width2, fillChar2);

const result1 = justifier1.execute();
const result2 = justifier2.execute();

console.log(result1); // Output: '-----Right'
console.log(result2); // Output: 'Centered'
```
