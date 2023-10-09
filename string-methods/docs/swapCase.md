## SwapCase

This module provides a class for swapping the case of alphabetic characters within a string, converting uppercase characters to lowercase and vice versa.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const SwapCase = require('node-string-methods/swapCase');

// Create an instance of the SwapCase class with a string
const str = 'Hello, World!';
const caseSwapper = new SwapCase(str);

// Execute the swap-case operation
const result = caseSwapper.execute();

console.log(result);
// Output: 'hELLO, wORLD!'
```

### Constructor

#### `new SwapCase(str)`

- `str` (String): The input string in which you want to swap the case of alphabetic characters.

Creates a new instance of the `SwapCase` class with the provided input string.

### Methods

#### `execute()`

Swaps the case of alphabetic characters within the input string, converting uppercase characters to lowercase and vice versa.

- Returns: A new string with the case-swapped characters.

### Example

```javascript
const SwapCase = require('node-string-methods/swapCase');

const str = 'Hello, World!';
const caseSwapper = new SwapCase(str);

const result = caseSwapper.execute();

console.log(result);
// Output: 'hELLO, wORLD!'
```
