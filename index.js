/**
MIT License

Copyright (c) 2023 Harshad Joshi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
**/


//  Bufferstack.IO Analytics Technology LLP, 2023
// Check LICENSE for details https://github.com/hj91/dna-data-storage/blob/main/LICENSE


// Mapping for binary to DNA and vice versa
const binaryToDNAMap = {
    '00': 'A',
    '01': 'C',
    '10': 'G',
    '11': 'T'
};

const DNAToBinaryMap = {
    'A': '00',
    'C': '01',
    'G': '10',
    'T': '11'
};

// Function to convert binary to DNA
function binaryToDNA(binary) {
    let dna = '';
    if(binary.length % 2 !== 0) {
        console.log('Invalid binary input. Length must be a multiple of 2.');
        return;
    }
    for(let i = 0; i < binary.length; i += 2) {
        let bin = binary.slice(i, i + 2);
        if(!binaryToDNAMap[bin]) {
            console.log('Invalid binary input. Only 0s and 1s are allowed.');
            return;
        }
        dna += binaryToDNAMap[bin];
    }
    return dna;
}

// Function to convert DNA to binary
function DNAToBinary(dna) {
    let binary = '';
    for(let i = 0; i < dna.length; i++) {
        let base = dna[i];
        if(!DNAToBinaryMap[base]) {
            console.log('Invalid DNA input. Only A, C, G, and T are allowed.');
            return;
        }
        binary += DNAToBinaryMap[base];
    }
    return binary;
}

module.exports = {
    binaryToDNA,
    DNAToBinary
};

