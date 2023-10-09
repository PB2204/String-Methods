## ExpandTabs

This module provides a class for expanding tab characters ('\t') in a string to a specified number of spaces.

### Installation

To use this module, you should have the "node-string-methods" npm package installed. You can install it using npm or yarn:

```bash
npm install node-string-methods
```

### Usage

```javascript
const ExpandTabs = require('node-string-methods/expandTabs');

// Create an instance of the ExpandTabs class with a string and optional tabWidth
const str = 'Expand\tthese\ttabs';
const tabWidth = 4;
const tabExpander = new ExpandTabs(str, tabWidth);

// Execute the tab expansion operation
const result = tabExpander.execute();

console.log(result); // Output: 'Expand    these   tabs'
```

### Constructor

#### `new ExpandTabs(str, tabWidth = 4)`

- `str` (String): The input string that may contain tab characters ('\t').
- `tabWidth` (Number, optional): The number of spaces to replace each tab character. Default is `4`.

Creates a new instance of the `ExpandTabs` class with the provided input string and tabWidth.

### Methods

#### `execute()`

Expands tab characters ('\t') in the input string to the specified number of spaces.

- Returns: The string with tab characters expanded to spaces.

### Example

```javascript
const ExpandTabs = require('node-string-methods/expandTabs');

const str = 'Expand\tthese\ttabs\twith\tcustom\ttab\twidth';
const tabWidth = 2;
const tabExpander = new ExpandTabs(str, tabWidth);

const result = tabExpander.execute();

console.log(result); // Output: 'Expand  these  tabs  with  custom  tab  width'
```

### Errors

- Throws an `Error` if the input provided to the constructor is not a string.
