# Maximum Subarray
Easy

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.


```
const maxSubArray = function(arr) {
    let currentSum = 0;
    let maxSum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (currentSum < 0) {
            currentSum = 0;
        }
        currentSum += arr[i];
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum;
};
```
