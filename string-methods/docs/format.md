## Format

This module provides a class for formatting a string by replacing placeholders with values from an array of arguments.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const Format = require('node-string-methods/format');

// Create an instance of the Format class with a format string and arguments
const formatString = 'Hello, {0}! Today is {1}.';
const name = 'Alice';
const day = 'Monday';
const formatter = new Format(formatString, name, day);

// Execute the format operation
const result = formatter.execute();

console.log(result); // Output: 'Hello, Alice! Today is Monday.'
```

### Constructor

#### `new Format(formatString, ...args)`

- `formatString` (String): The format string containing placeholders in the form of `{index}` where `index` corresponds to the position of the argument in the argument list.
- `...args` (Any): An array of arguments to replace the placeholders in the format string.

Creates a new instance of the `Format` class with the provided format string and arguments.

### Methods

#### `execute()`

Formats the format string by replacing placeholders with values from the arguments.

- Returns: The formatted string with placeholders replaced.

### Example

```javascript
const Format = require('node-string-methods/format');

const formatString = 'Today is {0}. Welcome, {1}!';
const day = 'Tuesday';
const guest = 'Bob';
const formatter = new Format(formatString, day, guest);

const result = formatter.execute();

console.log(result); // Output: 'Today is Tuesday. Welcome, Bob!'
```

### Notes

- Placeholders in the format string are zero-based, so `{0}` refers to the first argument, `{1}` to the second, and so on.
- Placeholders that cannot be replaced (due to missing arguments) will remain unchanged in the formatted string.
