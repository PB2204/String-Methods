## Center

This module provides a class for centering a string within a specified width by adding padding characters on both sides.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const Center = require('node-string-methods/center');

// Create an instance of the Center class with a string, width, and optional fill character
const str = 'Center Me';
const width = 20;
const fillchar = '-';
const centerer = new Center(str, width, fillchar);

// Perform the centering operation
const result = centerer.execute();

console.log(result); // Output: '-----Center Me-----'
```

### Constructor

#### `new Center(str, width, fillchar = ' ')`

- `str` (String): The input string that you want to center.
- `width` (Number): The width of the resulting centered string.
- `fillchar` (String, optional): The character used for padding. Default is a space (' ').

Creates a new instance of the `Center` class with the provided string, width, and optional fill character.

### Methods

#### `execute()`

Centers the input string within the specified width by adding padding characters on both sides.

- Returns: The centered string.

### Example

```javascript
const Center = require('node-string-methods/center');

const str = 'Center This Text';
const width = 30;
const fillchar = '*';
const centerer = new Center(str, width, fillchar);

const result = centerer.execute();

console.log(result); // Output: '*****Center This Text*****'
```

### Errors

- Throws an `Error` if the input provided to the constructor is not a string.