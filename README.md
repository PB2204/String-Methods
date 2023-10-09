# String Methods Library

A JavaScript library for emulating Python's string methods.

## Table of Contents
- [Project Description](#project-description)
- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [License](#license)
- [Code of Conduct](#code-of-conduct)
- [Learn More](#learn-more)
- [Contributing](#contributing)
- [Contact](#contact)
- [Happy Coding!](#happy-coding)

## Project Description
The String Methods Library is a JavaScript library that provides a collection of useful string manipulation functions. It is designed to simplify common string operations and make your coding tasks more efficient.

## Motivation
The motivation behind this project is to create a versatile and easy-to-use library for string manipulation in JavaScript. By providing a range of string methods, this library aims to save developers time and effort when working with strings.

## Installation
You can install the library using npm:

```bash
npm install node-string-methods
```

## Usage
To use the library, import the desired modules in your JavaScript code. Here are some examples of the available modules:
### Module 1: capitalize

**Description:** Capitalizes the first letter of a string.

**Usage:**

```javascript
const { capitalize } = require('node-string-methods');

const str = 'hello, world!';
const capitalized = capitalize(str);
console.log(capitalized); // Output: 'Hello, world!'
```

### Module 2: caseFold

**Description:** Converts a string to its case-folded form (Unicode normalization).

**Usage:**

```javascript
const { caseFold } = require('node-string-methods');

const str = 'lEtS CaSeFoLd';
const caseFolded = caseFold(str);
console.log(caseFolded); // Output: 'lets casefold'
```

### Module 3: center

**Description:** Centers a string within a specified width, padding with a character.

**Usage:**

```javascript
const { center } = require('node-string-methods');

const str = 'centered';
const centeredStr = center(str, 12, '-');
console.log(centeredStr); // Output: '--centered--'
```

### Module 4: count

**Description:** Counts the occurrences of a substring in a string.

**Usage:**

```javascript
const { count } = require('node-string-methods');

const str = 'hello, hello, world!';
const substring = 'hello';
const occurrences = count(str, substring);
console.log(occurrences); // Output: 2
```

### Module 5: encode

**Description:** Encodes special characters in a string for HTML.

**Usage:**

```javascript
const { encode } = require('node-string-methods');

const str = '<div>Hello, world!</div>';
const encodedStr = encode(str);
console.log(encodedStr); // Output: '&lt;div&gt;Hello, world!&lt;/div&gt;'
```

### Module 6: endsWith

**Description:** Checks if a string ends with a specified suffix.

**Usage:**

```javascript
const { endsWith } = require('node-string-methods');

const str = 'Hello, world!';
const suffix = 'world!';
const result = endsWith(str, suffix);
console.log(result); // Output: true
```

### Module 7: expandTabs

**Description:** Expands tabs in a string to spaces with a specified tab width.

**Usage:**

```javascript
const { expandTabs } = require('node-string-methods');

const str = 'Hello\tworld!\t\tThis is a test.';
const tabWidth = 4;
const expandedStr = expandTabs(str, tabWidth);
console.log(expandedStr);
/* Output:
Hello   world!      This is a test.
*/
```

### Module 8: find

**Description:** Finds the first occurrence of a substring in a string and returns its index.

**Usage:**

```javascript
const { find } = require('node-string-methods');

const str = 'Hello, world!';
const substring = 'world';
const index = find(str, substring);
console.log(index); // Output: 7
```

### Module 9: format

**Description:** Formats a string by replacing placeholders with values.

**Usage:**

```javascript
const { format } = require('node-string-methods');

const template = 'Hello, {name}! You are {age} years old.';
const data = { name: 'John', age: 30 };
const formattedStr = format(template, data);
console.log(formattedStr); // Output: 'Hello, John! You are 30 years old.'
```

### Module 10: isAlnum

**Description:** Checks if a string contains only alphanumeric characters.

**Usage:**

```javascript
const { isAlnum } = require('node-string-methods');

const str = 'Hello123';
const result = isAlnum(str);
console.log(result); // Output: true
```

### Module 11: isAlpha

**Description:** Checks if a string contains only alphabetic characters.

**Usage:**

```javascript
const { isAlpha } = require('node-string-methods');

const str = 'Hello';
const result = isAlpha(str);
console.log(result); // Output: true
```

### Module 12: isAscii

**Description:** Checks if a string contains only ASCII characters.

**Usage:**

```javascript
const { isAscii } = require('node-string-methods');

const str = 'Hello, world!';
const result = isAscii(str);
console.log(result); // Output: true
```

### Module 13: isDecimal

**Description:** Checks if a string represents a decimal number.

**Usage:**

```javascript
const { isDecimal } = require('node-string-methods');

const str = '42.123';
const result = isDecimal(str);
console.log(result); // Output: true
```

### Module 14: isDigit

**Description:** Checks if a string contains only digit characters.

**Usage:**

```javascript
const { isDigit } = require('node-string-methods');

const str = '12345';
const result = isDigit(str);
console.log(result); // Output: true
```

### Module 15: isIdentifier

**Description:** Checks if a string is a valid identifier.

**Usage:**

```javascript
const { isIdentifier } = require('node-string-methods');

const identifier = 'myVariable123';
const result = isIdentifier(identifier);
console.log(result); // Output: true
```

### Module 16: isLower

**Description:** Checks if a string contains only lowercase alphabetic characters.

**Usage:**

```javascript
const { isLower } = require('node-string-methods');

const str = 'hello';
const result = isLower(str);
console.log(result); // Output: true
```

### Module 17: isNumeric

**Description:** Checks if a string contains only numeric characters.

**Usage:**

```javascript
const { isNumeric } = require('node-string-methods');

const str = '12345';
const result = isNumeric(str);
console.log(result); // Output: true
```

### Module 18: isSpace

**Description:** Checks if a string contains only whitespace characters.

**Usage:**

```javascript
const { isSpace } = require('node-string-methods');

const str = '    \t  ';
const result = isSpace(str);
console.log(result); // Output: true
```

### Module 19: isTitle

**Description:** Checks if a string is in title case.

**Usage:**

```javascript
const { isTitle } = require('node-string-methods');

const str = 'This Is Title Case';
const result = isTitle(str);
console.log(result); // Output: true
```

### Module 20: isUpper

**Description:** Checks if a string contains only uppercase alphabetic characters.

**Usage:**

```javascript
const { isUpper } = require('node-string-methods');

const str = 'HELLO';
const result = isUpper(str);
console.log(result); // Output: true
```

### Module 21: join

**Description:** Joins an array of strings into a single string with a specified separator.

**Usage:**

```javascript
const { join } = require('node-string-methods');

const arr = ['apple', 'banana', 'cherry'];
const separator = ', ';
const result = join(arr, separator);
console.log(result); // Output: 'apple, banana, cherry'
```

### Module 22: leftJustify

**Description:** Left-justifies a string within a specified width, padding with a character.

**Usage:**

```javascript
const { leftJustify } = require('node-string-methods');

const str = 'left';
const width = 10;
const paddingChar = '-';
const result = leftJustify(str, width, paddingChar);
console.log(result); // Output: 'le'
```

### Module 23: lower

**Description:** Converts a string to lowercase.

**Usage:**

```javascript
const { lower } = require('node-string-methods');

const str = 'Hello, World!';
const result = lower(str);
console.log(result); // Output: 'hello, world!'
```

### Module 24: leftStrip

**Description:** Removes leading whitespace characters from a string.

**Usage:**

```javascript
const { leftStrip } = require('node-string-methods');

const str = '   Hello, World!';
const result = leftStrip(str);
console.log(result); // Output: 'Hello, World!'
```

### Module 25: makeTrans

**Description:** Translates characters in a string based on a translation table.

**Usage:**

```javascript
const { makeTrans } = require('node-string-methods');

const str = 'Hello, World!';
const translationTable = { 'H': 'h', 'W': 'w' };
const result = makeTrans(str, translationTable);
console.log(result); // Output: 'hello, world!'
```

### Module 26: partition

**Description:** Splits a string into three parts based on a separator.

**Usage:**

```javascript
const { partition } = require('node-string-methods');

const str = 'apple,banana,cherry';
const separator = ',';
const result = partition(str, separator);
console.log(result); // Output: ['apple', ',', 'banana,cherry']
```

### Module 27: replace

**Description:** Replaces all occurrences of a substring in a string.

**Usage:**

```javascript
const { replace } = require('node-string-methods');

const str = 'Hello, World!';
const substring = 'World';
const replacement = 'Universe';
const result = replace(str, substring, replacement);
console.log(result); // Output: 'Hello, Universe!'
```

### Module 28: rightFind

**Description:** Finds the last occurrence of a substring in a string.

**Usage:**

```javascript
const { rightFind } = require('node-string-methods');

const str = 'apple, banana, cherry, apple';
const substring = 'apple';
const result = rightFind(str, substring);
console.log(result); // Output: 21
```

### Module 29: rightIndex

**Description:** Returns the index of the last occurrence of a substring in a string.

**Usage:**

```javascript
const { rightIndex } = require('node-string-methods');

const str = 'apple, banana, cherry, apple';
const substring = 'apple';
const result = rightIndex(str, substring);
console.log(result); // Output: 21
```

### Module 30: rightJustify

**Description:** Right-justifies a string within a specified width, padding with a character.

**Usage:**

```javascript
const { rightJustify } = require('node-string-methods');

const str = 'right';
const width = 10;
const paddingChar = '-';
const result = rightJustify(str, width, paddingChar);
console.log(result); // Output:--right'
```

### Module 31: rightPartition

**Description:** Splits a string into three parts based on a separator from the right.

**Usage:**

```javascript
const { rightPartition } = require('node-string-methods');

const str = 'apple,banana,cherry';
const separator = ',';
const result = rightPartition(str, separator);
console.log(result); // Output: ['apple,banana', ',', 'cherry']
```

### Module 32: rightStrip

**Description:** Removes trailing whitespace characters from a string.

**Usage:**

```javascript
const { rightStrip } = require('node-string-methods');

const str = 'Hello, World!   ';
const result = rightStrip(str);
console.log(result); // Output: 'Hello, World!'
```

### Module 33: split

**Description:** Splits a string into an array of substrings based on a separator.

**Usage:**

```javascript
const { split } = require('node-string-methods');

const str = 'apple,banana,cherry';
const separator = ',';
const result = split(str, separator);
console.log(result); // Output: ['apple', 'banana', 'cherry']
```

### Module 34: splitLines

**Description:** Splits a multi-line string into an array of lines.

**Usage:**

```javascript
const { splitLines } = require('node-string-methods');

const str = 'Line 1\nLine 2\nLine 3';
const result = splitLines(str);
console.log(result); // Output: ['Line 1', 'Line 2', 'Line 3']
```

### Module 35: startsWith

**Description:** Checks if a string starts with a specified prefix.

**Usage:**

```javascript
const { startsWith } = require('node-string-methods');

const str = 'Hello, World!';
const prefix = 'Hello';
const result = startsWith(str, prefix);
console.log(result); // Output: true
```

### Module 36: strip

**Description:** Removes leading and trailing whitespace characters from a string.

**Usage:**

```javascript
const { strip } = require('node-string-methods');

const str = '   Hello, World!   ';
const result = strip(str);
console.log(result); // Output: 'Hello, World!'
```

### Module 37: swapCase

**Description:** Swaps the case (upper to lower and vice versa) of characters in a string.

**Usage:**

```javascript
const { swapCase } = require('node-string-methods');

const str = 'Hello, World!';
const result = swapCase(str);
console.log(result); // Output: 'hELLO, wORLD!'
```

### Module 38: title

**Description:** Converts a string to title case (capitalizes the first letter of each word).

**Usage:**

```javascript
const { title } = require('node-string-methods');

const str = 'hello world';
const result = title(str);
console.log(result); // Output: 'Hello World'
```

### Module 39: upper

**Description:** Converts a string to uppercase.

**Usage:**

```javascript
const { upper } = require('node-string-methods');

const str = 'Hello, World!';
const result = upper(str);
console.log(result); // Output: 'HELLO, WORLD!'
```

### Module 40: zeroFill
**Description**: Pads a number with leading zeros to a specified width.

**Usage**:

```javascript
const { zeroFill } = require('node-string-methods');

const num = 42;
const width = 5;
const result = zeroFill(num, width);
console.log(result); // Output: '00042'
```
## Examples
For more examples and detailed documentation, please refer to the [docs](./string-methods/docs/) directory.

## License
This project is licensed under the [MIT License](LICENSE).

## Code of Conduct
Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the behavior expected in our community.

## Learn More
Explore our [Learn.md](Learn.md) file to find additional resources for learning and improving your skills.

## Contributing
We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md) for more details on how to get started.

## Contact
For any questions or feedback, feel free to contact me:
- Name: [Pabitra Banerjee](https://pabitrabanerjee.me)
- Email: [Pabitra Banerjee](mailto:rockstarpabitra2204@gmail.com)
- GitHub: [PB2204](https://github.com/pb2204)

## Happy Coding 🚀
We hope you find the String Methods Library useful in your projects. Happy coding!
