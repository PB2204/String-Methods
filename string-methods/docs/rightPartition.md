## RightPartition

This module provides a class for partitioning a string into three parts based on the last occurrence of a specified separator.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const RightPartition = require('node-string-methods/rightPartition');

// Create an instance of the RightPartition class with a string and separator
const str = 'apple,banana,cherry';
const separator = ',';
const partitioner = new RightPartition(str, separator);

// Execute the right partition operation
const result = partitioner.execute();

console.log(result);
// Output: ['apple,banana', ',', 'cherry']
```

### Constructor

#### `new RightPartition(str, separator)`

- `str` (String): The input string that you want to partition.
- `separator` (String): The separator string used to split `str` into three parts based on the last occurrence.

Creates a new instance of the `RightPartition` class with the provided input string and separator.

### Methods

#### `execute()`

Partitions the input string into three parts: the part before the last occurrence of the separator, the separator itself, and the part after the separator.

- Returns: An array containing the three parts.

### Example

```javascript
const RightPartition = require('node-string-methods/rightPartition');

const str = 'apple,banana,cherry';
const separator = ',';
const partitioner = new RightPartition(str, separator);

const result = partitioner.execute();

console.log(result);
// Output: ['apple,banana', ',', 'cherry']
```
