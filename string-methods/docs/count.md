## Count

This module provides a class for counting the occurrences of a substring within a given input string.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const Count = require('node-string-methods/count');

// Create an instance of the Count class with an input string
const inputString = 'count the occurrences of count in this sentence, counting is important';
const counter = new Count(inputString);

// Count the occurrences of a substring
const substring = 'count';
const result = counter.count(substring);

console.log(result); // Output: 4
```

### Constructor

#### `new Count(inputString)`

- `inputString` (String): The input string in which you want to count occurrences.

Creates a new instance of the `Count` class with the provided input string.

### Methods

#### `count(substring)`

Counts the occurrences of the specified substring within the input string.

- `substring` (String): The substring to count within the input string.
- Returns: The number of occurrences of the substring in the input string.

### Example

```javascript
const Count = require('node-string-methods/count');

const inputString = 'This is an example, and this example contains multiple examples.';
const counter = new Count(inputString);

const substring = 'example';
const result = counter.count(substring);

console.log(result); // Output: 3
```

### Notes

- If the `substring` argument is not provided or is an empty string, the `count` method will return `0`.