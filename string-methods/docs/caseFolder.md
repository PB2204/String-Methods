## caseFolder

This module provides a class for converting a string to lowercase using the `toLocaleLowerCase` method.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const CaseFolder = require('node-string-methods/caseFolder');

// Create an instance of the CaseFolder class with a string as input
const str = 'LoWeRcAsE Me!';
const folder = new CaseFolder(str);

// Perform the case folding operation
const result = folder.caseFold();

console.log(result); // Output: 'lowercase me!'
```

### Constructor

#### `new CaseFolder(str)`

- `str` (String): The input string that you want to convert to lowercase.

Creates a new instance of the `CaseFolder` class with the provided string.

### Methods

#### `caseFold()`

Converts the input string to lowercase using the `toLocaleLowerCase` method.

- Returns: The lowercase string.

### Example

```javascript
const CaseFolder = require('node-string-methods/caseFolder');

const str = 'ThIs Is A TesT';
const folder = new CaseFolder(str);

const result = folder.caseFold();

console.log(result); // Output: 'this is a test'
```

### Errors

- Throws an `Error` if the input provided to the constructor is not a string.