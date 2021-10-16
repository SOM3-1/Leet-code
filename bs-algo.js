 see 3 advantages of Iterative over Recursive.

    Recursion comes with overhead of saving current state. Hence, It's slower.
    Recursion uses internal Stack space. So, Space Complexity of Recursive Approach is O(Log(n)) whereas Iterative is O(1)
    If the array length is very large, Recursive program can crash due to Stack Overflow Error.


//iterative   
var search = function(nums, target) {
    let left = 0, right = nums.length - 1
    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
};

//leet code
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const bs = (nums,target,low,high)=>
{
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if (nums[mid] == target)
            return mid;
        if (nums[mid] > target)
            return bs(nums, target, low, mid - 1 );
        return bs(nums, target, mid + 1, high );
    }
    return -1;
};

const search = (nums, target) => {
    return bs(nums,target,0,nums.length-1);    
};
