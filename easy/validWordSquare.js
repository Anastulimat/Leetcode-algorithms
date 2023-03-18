/**************************************************************************
======================
422. Valid Word Square
======================

Given a sequence of words, check whether it forms a valid word square.

A sequence of words forms a valid word square if the k^th row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).

Constraints: 
============
1. The number of words given is at least 1 and does not exceed 500.
2. Word length will be at least 1 and does not exceed 500.
3. Each word contains only lowercase English alphabet a-z.


Example :
=========
Input:  
[
  "abcd",
  "bnrt",
  "crmy",
  "dtye"
]

Output: true

Explanation:
The first row and first column both read "abcd".
The second row and second column both read "bnrt".
The third row and third column both read "crmy".
The fourth row and fourth column both read "dtye".

Therefore, it is a valid word square.
**************************************************************************/

/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function (words) {
    for (let i = 0; i < words.length; i++) {
        let verticalWord = "";
        for (let j = 0; j < words.length; j++) {
            if (j < words[i].length) {
                verticalWord += words[j][i];
            }
        }
        if (verticalWord !== words[i]) return false;
    }
    return true;
};

console.log(validWordSquare(["abcd", "bnrt", "crmy", "dtye"]));
console.log(validWordSquare(["abcd", "bnrt", "crm", "dt"]));
console.log(validWordSquare(["ball", "area", "read", "lady"]));
