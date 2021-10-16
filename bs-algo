 see 3 advantages of Iterative over Recursive.

    Recursion comes with overhead of saving current state. Hence, It's slower.
    Recursion uses internal Stack space. So, Space Complexity of Recursive Approach is O(Log(n)) whereas Iterative is O(1)
    If the array length is very large, Recursive program can crash due to Stack Overflow Error.


//iterative   
const search = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
  console.log(`length = ${high}`);
  
    while (low<=high)
        {
            let ind = low + (high-low)/2;
            if(nums[ind]===target)
                return ind;
            if( target>nums[ind])
                high = ind+1;
            else
                low = ind-1;
        }
    return -1;
    
};

const z =search([-1,0,3,5,9,12] , 9);

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
