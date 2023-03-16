/**************************************************************************
=================================
118. Pascal's Triangle (LeetCode)
=================================

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example :
=========
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
**************************************************************************/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows < 1) return [];

    let result = [];

    for (let i = 0; i < numRows; i++) {
        if (i === 0) result.push([1]);
        else if (i === 1) result.push([1, 1]);
        else {
            let line = [];
            let j = 0;
            line[0] = 1;
            for (j = 1; j < i; j++) {
                line[j] = result[i - 1][j - 1] + result[i - 1][j];
            }
            line[j] = 1;
            result.push(line);
        }
    }

    return result;
};
