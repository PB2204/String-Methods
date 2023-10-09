## capitalize

This module provides a class for capitalizing the first letter of a string while converting the rest of the string to lowercase.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const Capitalize = require('node-string-methods/capitalize');

// Create an instance of the Capitalize class with a string as input
const str = 'hello WoRLD';
const capitalizer = new Capitalize(str);

// Execute the capitalization operation
const result = capitalizer.execute();

console.log(result); // Output: 'Hello world'
```

### Constructor

#### `new Capitalize(str)`

- `str` (String): The input string that you want to capitalize.

Creates a new instance of the `Capitalize` class with the provided string.

### Methods

#### `execute()`

Capitalizes the first letter of the input string while converting the rest of the string to lowercase.

- Returns: The capitalized string.

### Example

```javascript
const Capitalize = require('node-string-methods/capitalize');

const str = 'eXaMPLe StRIng';
const capitalizer = new Capitalize(str);

const result = capitalizer.execute();

console.log(result); // Output: 'Example string'
```

### Errors

- Throws an `Error` if the input provided to the constructor is not a string.