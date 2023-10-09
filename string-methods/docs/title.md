## Title

This module provides a class for converting the first character of each word in a string to uppercase, effectively capitalizing the words.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const Title = require('node-string-methods/title');

// Create an instance of the Title class with a string
const str = 'hello world';
const titleConverter = new Title(str);

// Execute the title-case conversion
const result = titleConverter.execute();

console.log(result);
// Output: 'Hello World'
```

### Constructor

#### `new Title(str)`

- `str` (String): The input string that you want to convert to title case.

Creates a new instance of the `Title` class with the provided input string.

### Methods

#### `execute()`

Converts the input string to title case by capitalizing the first character of each word.

- Returns: A new string in title case.

### Example

```javascript
const Title = require('node-string-methods/title');

const str = 'hello world';
const titleConverter = new Title(str);

const result = titleConverter.execute();

console.log(result);
// Output: 'Hello World'
```
