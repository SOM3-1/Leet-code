//My solution
const rotate = (nums, k)=> {
    return [...nums.splice(k+1),...nums];
};

