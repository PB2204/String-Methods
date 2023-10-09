## LeftStrip

This module provides a class for removing specified characters from the left side of a string.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const LeftStrip = require('node-string-methods/leftStrip');

// Create an instance of the LeftStrip class with a string and optional characters to strip
const str1 = '   Hello';
const str2 = '12345World';
const characters1 = ' ';
const characters2 = '12345';
const stripper1 = new LeftStrip(str1, characters1);
const stripper2 = new LeftStrip(str2, characters2);

// Execute the left-strip operation
const result1 = stripper1.execute();
const result2 = stripper2.execute();

console.log(result1); // Output: 'Hello'
console.log(result2); // Output: 'World'
```

### Constructor

#### `new LeftStrip(str, characters = ' ')`

- `str` (String): The input string from which you want to remove characters from the left side.
- `characters` (String, optional): The optional characters to remove from the left side of the input string. Default is a space character.

Creates a new instance of the `LeftStrip` class with the provided input string and optional characters to strip.

### Methods

#### `execute()`

Removes the specified characters from the left side of the input string.

- Returns: A string with the left-side characters removed.

### Example

```javascript
const LeftStrip = require('node-string-methods/leftStrip');

const str1 = '   Hello';
const str2 = '12345World';
const characters1 = ' ';
const characters2 = '12345';
const stripper1 = new LeftStrip(str1, characters1);
const stripper2 = new LeftStrip(str2, characters2);

const result1 = stripper1.execute();
const result2 = stripper2.execute();

console.log(result1); // Output: 'Hello'
console.log(result2); // Output: 'World'
```
