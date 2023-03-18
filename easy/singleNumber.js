/**************************************************************************
==============================
136. Single Number (LeetCode)
==============================

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example :
=========
Input: nums = [4,1,2,1,2]
Output: 4
**************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const map = new Map();
    let result = -1;

    for (let i = 0; i < nums.length; i++) {
        map.has(nums[i])
            ? map.set(nums[i], map.get(nums[i]) + 1)
            : map.set(nums[i], 1);
    }

    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) === 1) {
            result = nums[i];
        }
    }

    return result;
};
