## MakeTrans

This module provides a class for making character replacements in a string based on specified translation tables.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const MakeTrans = require('node-string-methods/makeTrans');

// Create an instance of the MakeTrans class with a string, fromChars, and toChars
const str = 'Hello World';
const fromChars = 'aeiou';
const toChars = '12345';
const translator = new MakeTrans(str, fromChars, toChars);

// Execute the makeTrans operation
const result = translator.execute();

console.log(result); // Output: 'H2ll4 W5rld'
```

### Constructor

#### `new MakeTrans(str, fromChars, toChars)`

- `str` (String): The input string in which character replacements will be made.
- `fromChars` (String): A string containing characters to be replaced.
- `toChars` (String): A string containing characters to replace `fromChars` with.

Creates a new instance of the `MakeTrans` class with the provided input string, `fromChars`, and `toChars`.

### Methods

#### `execute()`

Makes character replacements in the input string based on the specified translation tables (`fromChars` to `toChars`).

- Returns: A string with the specified character replacements.

### Example

```javascript
const MakeTrans = require('node-string-methods/makeTrans');

const str = 'Hello World';
const fromChars = 'aeiou';
const toChars = '12345';
const translator = new MakeTrans(str, fromChars, toChars);

const result = translator.execute();

console.log(result); // Output: 'H2ll4 W5rld'
```
