//My solution
const rotate = (nums, k)=> {
    return [...nums.splice(k+1),...nums];
};

//online solution
const rotate = (nums, k) => {
    nums.unshift(...nums.splice(nums.length-k,k))
};

