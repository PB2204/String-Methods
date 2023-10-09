## EndsWith

This module provides a class for checking if a string ends with a specified substring, with an optional position parameter to restrict the search range.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const EndsWith = require('node-string-methods/endsWith');

// Create an instance of the EndsWith class with a string and a searchString
const str = 'Check if this ends with a certain string';
const searchString = 'string';
const endsWithChecker = new EndsWith(str, searchString);

// Execute the endsWith operation
const result = endsWithChecker.execute();

console.log(result); // Output: true
```

### Constructor

#### `new EndsWith(str, searchString, position = undefined)`

- `str` (String): The input string that you want to check.
- `searchString` (String): The substring to search for at the end of the input string.
- `position` (Number, optional): The position within the string at which to stop searching. Default is `undefined`.

Creates a new instance of the `EndsWith` class with the provided input string, searchString, and optional position.

### Methods

#### `execute()`

Checks if the input string ends with the specified searchString.

- Returns: `true` if the input string ends with the searchString, `false` otherwise.

### Example

```javascript
const EndsWith = require('node-string-methods/endsWith');

const str = 'Check if this ends with a certain string';
const searchString = 'string';
const endsWithChecker = new EndsWith(str, searchString);

const result = endsWithChecker.execute();

console.log(result); // Output: true
```

### Notes

- If the `position` parameter is provided and is a negative number, the method returns `false`.
