## IsIdentifier

This module provides a class for checking if a string is a valid identifier in JavaScript.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const IsIdentifier = require('node-string-methods/isIdentifier');

// Create an instance of the IsIdentifier class with a string
const identifier1 = 'validIdentifier';
const identifier2 = '1InvalidIdentifier';
const identifierChecker1 = new IsIdentifier(identifier1);
const identifierChecker2 = new IsIdentifier(identifier2);

// Execute the isIdentifier operation
const result1 = identifierChecker1.execute();
const result2 = identifierChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```

### Constructor

#### `new IsIdentifier(str)`

- `str` (String): The input string that you want to check as a valid identifier.

Creates a new instance of the `IsIdentifier` class with the provided input string.

### Methods

#### `execute()`

Checks if the input string is a valid JavaScript identifier.

- Returns: `true` if the input string is a valid JavaScript identifier, `false` otherwise.

### Example

```javascript
const IsIdentifier = require('node-string-methods/isIdentifier');

const identifier1 = 'validIdentifier';
const identifier2 = '1InvalidIdentifier';
const identifierChecker1 = new IsIdentifier(identifier1);
const identifierChecker2 = new IsIdentifier(identifier2);

const result1 = identifierChecker1.execute();
const result2 = identifierChecker2.execute();

console.log(result1); // Output: true
console.log(result2); // Output: false
```

### Notes

- A valid JavaScript identifier must start with a letter (`a` to `z`, `A` to `Z`), underscore (`_`), or dollar sign (`$`), followed by letters, digits (`0` to `9`), underscores, or dollar signs.
