## ZeroFill

This module provides a class for zero-filling a number to a specified width by adding leading zeros.

### Installation

To use this module, you should have the "node-number-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-number-methods
```

### Usage

```javascript
const ZeroFill = require('node-number-methods/zeroFill');

// Create an instance of the ZeroFill class with a number and width
const number = 42;
const width = 5;
const zeroFiller = new ZeroFill(number, width);

// Execute the zero-fill operation
const result = zeroFiller.execute();

console.log(result);
// Output: '00042'
```

### Constructor

#### `new ZeroFill(number, width)`

- `number` (Number): The number you want to zero-fill.
- `width` (Number): The desired width of the zero-filled number.

Creates a new instance of the `ZeroFill` class with the provided number and width.

### Methods

#### `execute()`

Zero-fills the number to the specified width by adding leading zeros.

- Returns: A string representing the zero-filled number.

### Example

```javascript
const ZeroFill = require('node-number-methods/zeroFill');

const number = 42;
const width = 5;
const zeroFiller = new ZeroFill(number, width);

const result = zeroFiller.execute();

console.log(result);
// Output: '00042'
```
