## Join

This module provides a class for joining elements of an array into a string with an optional separator.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const Join = require('node-string-methods/join');

// Create an instance of the Join class with an array and optional separator
const arr1 = ['apple', 'banana', 'cherry'];
const arr2 = [1, 2, 3];
const separator1 = ', ';
const separator2 = '-';
const joiner1 = new Join(arr1, separator1);
const joiner2 = new Join(arr2, separator2);

// Execute the join operation
const result1 = joiner1.execute();
const result2 = joiner2.execute();

console.log(result1); // Output: 'apple, banana, cherry'
console.log(result2); // Output: '1-2-3'
```

### Constructor

#### `new Join(arr, separator = '')`

- `arr` (Array): The input array whose elements you want to join into a string.
- `separator` (String, optional): The optional separator to place between joined elements. Default is an empty string.

Creates a new instance of the `Join` class with the provided array and optional separator.

### Methods

#### `execute()`

Joins the elements of the input array into a string using the specified separator.

- Returns: A string containing the joined elements.

### Example

```javascript
const Join = require('node-string-methods/join');

const arr1 = ['apple', 'banana', 'cherry'];
const arr2 = [1, 2, 3];
const separator1 = ', ';
const separator2 = '-';
const joiner1 = new Join(arr1, separator1);
const joiner2 = new Join(arr2, separator2);

const result1 = joiner1.execute();
const result2 = joiner2.execute();

console.log(result1); // Output: 'apple, banana, cherry'
console.log(result2); // Output: '1-2-3'
```
