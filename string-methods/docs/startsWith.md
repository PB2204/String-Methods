## StartsWith

This module provides a class for checking if a string starts with a specified prefix.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const StartsWith = require('node-string-methods/startsWith');

// Create an instance of the StartsWith class with a string and prefix
const str = 'Hello, world!';
const prefix = 'Hello';
const starter = new StartsWith(str, prefix);

// Execute the starts-with operation
const result = starter.execute();

console.log(result); // Output: true
```

### Constructor

#### `new StartsWith(str, prefix)`

- `str` (String): The input string that you want to check.
- `prefix` (String): The prefix string to check for at the beginning of `str`.

Creates a new instance of the `StartsWith` class with the provided input string and prefix.

### Methods

#### `execute()`

Checks if the input string starts with the specified prefix.

- Returns: `true` if the string starts with the prefix; otherwise, `false`.

### Example

```javascript
const StartsWith = require('node-string-methods/startsWith');

const str = 'Hello, world!';
const prefix = 'Hello';
const starter = new StartsWith(str, prefix);

const result = starter.execute();

console.log(result); // Output: true
```
