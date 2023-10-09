## LeftJustify

This module provides a class for left-justifying a string within a specified width by adding padding characters to the right.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const LeftJustify = require('node-string-methods/leftJustify');

// Create an instance of the LeftJustify class with a string, width, and optional fill character
const str1 = 'Left';
const str2 = 'Centered';
const width1 = 10;
const width2 = 5;
const fillchar1 = '-';
const fillchar2 = '*';
const justifier1 = new LeftJustify(str1, width1, fillchar1);
const justifier2 = new LeftJustify(str2, width2, fillchar2);

// Execute the left-justify operation
const result1 = justifier1.execute();
const result2 = justifier2.execute();

console.log(result1); // Output: 'Left------'
console.log(result2); // Output: 'Centered'
```

### Constructor

#### `new LeftJustify(str, width, fillchar = ' ')`

- `str` (String): The input string that you want to left-justify.
- `width` (Number): The desired width of the output string.
- `fillchar` (String, optional): The optional fill character to use for padding. Default is a space character.

Creates a new instance of the `LeftJustify` class with the provided input string, width, and optional fill character.

### Methods

#### `execute()`

Left-justifies the input string within the specified width by adding padding characters to the right.

- Returns: A string containing the left-justified output.

### Example

```javascript
const LeftJustify = require('node-string-methods/leftJustify');

const str1 = 'Left';
const str2 = 'Centered';
const width1 = 10;
const width2 = 5;
const fillchar1 = '-';
const fillchar2 = '*';
const justifier1 = new LeftJustify(str1, width1, fillchar1);
const justifier2 = new LeftJustify(str2, width2, fillchar2);

const result1 = justifier1.execute();
const result2 = justifier2.execute();

console.log(result1); // Output: 'Left------'
console.log(result2); // Output: 'Centered'
```
