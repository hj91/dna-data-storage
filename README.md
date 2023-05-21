```markdown
# DNA Data Storage Module
```
This module provides a simple demonstration of DNA data storage encoding and decoding. It exports two functions, `binaryToDNA` and `DNAToBinary`, which convert binary data into a DNA-like sequence and then decode it back into binary data.

## Installation

To install this module, you can clone the repository and then run `npm install`:

```bash
git clone https://github.com/hj91/dna-data-storage.git
cd dna-data-storage
npm install
```

## Usage

You can use this module in your code like this:

```javascript
// Import the module
const { binaryToDNA, DNAToBinary } = require('dna-data-storage');

// Convert binary to DNA
let binary = '01100110'; // This is binary for the ASCII character 'f'
let dna = binaryToDNA(binary);
console.log(`Binary ${binary} is converted to DNA sequence: ${dna}`);

// Convert DNA back to binary
let binaryBack = DNAToBinary(dna);
console.log(`DNA sequence ${dna} is converted back to binary: ${binaryBack}`);
```

In this example, we're importing the `binaryToDNA` and `DNAToBinary` functions from the module. We then use `binaryToDNA` to convert a binary string to a DNA sequence, and `DNAToBinary` to convert the DNA sequence back to binary.

## Author

Harshad Joshi ([@hj91](https://github.com/hj91))

## License

MIT
