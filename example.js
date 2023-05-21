// Import the module
const { binaryToDNA, DNAToBinary } = require('./dna-data-storage');

// Convert binary to DNA
let binary = '01100110'; // This is binary for the ASCII character 'f'
let dna = binaryToDNA(binary);
console.log(`Binary ${binary} is converted to DNA sequence: ${dna}`);

// Convert DNA back to binary
let binaryBack = DNAToBinary(dna);
console.log(`DNA sequence ${dna} is converted back to binary: ${binaryBack}`);

