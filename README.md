# Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

```
/**
 * @param {number[]} arr- array elements
 * @param {number} target - target value to find
 * @param {number} low - array undex beginning
 * @param {number} high - array index ending
 * @return {number}
 */
const checkForIndex = (arr, target, low, high) => {
    while(low< high)
    {
        let mid = Math.floor((low+high)/2);
        
        if (target === arr[mid])
            return mid;
        
        target < arr[mid]?high = mid - 1:low = mid + 1;
    }    
    return target > arr[low] ? low + 1 : low;    
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return (checkForIndex(nums, target, 0,nums.length-1 ));
};
```
