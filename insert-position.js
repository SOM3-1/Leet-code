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
