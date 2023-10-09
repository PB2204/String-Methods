## Upper

This module provides a class for converting all characters in a string to uppercase.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const Upper = require('node-string-methods/upper');

// Create an instance of the Upper class with a string
const str = 'Hello, World!';
const upperConverter = new Upper(str);

// Execute the uppercase conversion
const result = upperConverter.execute();

console.log(result);
// Output: 'HELLO, WORLD!'
```

### Constructor

#### `new Upper(str)`

- `str` (String): The input string that you want to convert to uppercase.

Creates a new instance of the `Upper` class with the provided input string.

### Methods

#### `execute()`

Converts all characters in the input string to uppercase.

- Returns: A new string with all characters in uppercase.

### Example

```javascript
const Upper = require('node-string-methods/upper');

const str = 'Hello, World!';
const upperConverter = new Upper(str);

const result = upperConverter.execute();

console.log(result);
// Output: 'HELLO, WORLD!'
```
