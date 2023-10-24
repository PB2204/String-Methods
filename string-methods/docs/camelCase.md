## CamelCase

This module offers a method for converting strings into camelCase, where the first word is in lowercase and subsequent words are capitalized without spaces.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const camelCase = require('node-string-methods/camelCase');

// Create an instance of the camelCase class with a string as input
const str = 'FIRST name LAST';
const camelCaser = new camelCase(str);

// Execute the capitalization operation
const result = camelCaser.execute();

console.log(result); // Output: 'firstNameLast'
```

### Constructor

#### `new CamelCase(str)`

-   `str` (String): The input string that you want to camelcase.

Creates a new instance of the `Camelcase` class with the provided string.

### Methods

#### `execute()`

It will convert a given string into its camelCase form

-   Returns: The camelcase string.

### Example

```javascript
const CamelCase = require('node-string-methods/camelCase');

const str = 'first_name_last';
const camelCase = new CamelCase(str);

const result = camelCase.execute();

console.log(result); // Output: 'firstNameLast'
```

### Errors

-   Throws an `Error` if the input provided to the constructor is not a string.
