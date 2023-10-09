## Encode

This module provides a class for encoding a string by converting each character into its corresponding hexadecimal representation.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const Encode = require('node-string-methods/encode');

// Create an instance of the Encode class with a string
const str = 'Encode Me';
const encoder = new Encode(str);

// Execute the encoding operation
const result = encoder.execute();

console.log(result); // Output: '456E636F6465204D65'
```

### Constructor

#### `new Encode(str)`

- `str` (String): The input string that you want to encode.

Creates a new instance of the `Encode` class with the provided string.

### Methods

#### `execute()`

Encodes the input string by converting each character into its corresponding hexadecimal representation.

- Returns: The encoded string in uppercase hexadecimal format.

### Example

```javascript
const Encode = require('node-string-methods/encode');

const str = 'Hello, World!';
const encoder = new Encode(str);

const result = encoder.execute();

console.log(result); // Output: '48656C6C6F2C20576F726C6421'
```

### Errors

- Throws an `Error` if the input provided to the constructor is not a string.
