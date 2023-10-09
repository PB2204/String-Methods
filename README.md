# String Methods Library

![GitHub](https://img.shields.io/github/license/your-username/string-methods)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/your-username/string-methods)

## Table of Contents
- [Project Description](#project-description)
- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
  - [Module 1: capitalize](#module-1-capitalize)
  - [Module 2: caseFold](#module-2-casefold)
  - [Module 3: center](#module-3-center)
  - [Module 4: count](#module-4-count)
  - [Module 5: encode](#module-5-encode)
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
npm install string-methods
```

## Usage
To use the library, import the desired modules in your JavaScript code. Here are some examples of the available modules:

### Module 1: capitalize
Description: Capitalizes the first letter of a string.
Example:
```javascript
const { capitalize } = require('string-methods');

const str = 'hello, world!';
const capitalized = capitalize(str);
console.log(capitalized); // Output: 'Hello, world!'
```

### Module 2: caseFold
Description: Converts a string to its case-folded form (Unicode normalization).
Example:
```javascript
const { caseFold } = require('string-methods');

const str = 'lEtS CaSeFoLd';
const caseFolded = caseFold(str);
console.log(caseFolded); // Output: 'lets casefold'
```

### Module 3: center
Description: Centers a string within a specified width, padding with a character.
Example:
```javascript
const { center } = require('string-methods');

const str = 'centered';
const centeredStr = center(str, 12, '-');
console.log(centeredStr); // Output: '--centered--'
```

### Module 4: count
Description: Counts the occurrences of a substring in a string.
Example:
```javascript
const { count } = require('string-methods');

const str = 'hello, hello, world!';
const substring = 'hello';
const occurrences = count(str, substring);
console.log(occurrences); // Output: 2
```

### Module 5: encode
Description: Encodes special characters in a string for HTML.
Example:
```javascript
const { encode } = require('string-methods');

const str = '<div>Hello, world!</div>';
const encodedStr = encode(str);
console.log(encodedStr); // Output: '&lt;div&gt;Hello, world!&lt;/div&gt;'
```

## Examples
For more examples and detailed documentation, please refer to the [examples](./examples) directory.

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

## Happy Coding!
We hope you find the String Methods Library useful in your projects. Happy coding!