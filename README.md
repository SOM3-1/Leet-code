# Leet-code
* My solutions to the Leet code problems.
* Each problems are kept in separate branches and question is added in README file of their respective branch.

```
//My solution
const rotate = (nums, k)=> {
    return [...nums.splice(k+1),...nums];
};

//online solution
const rotate = (nums, k) => {
    nums.unshift(...nums.splice(nums.length-k,k))
};

// My working solution
const rotate = (nums, k) => {
    k>nums.length ?  k = k%(nums.length) : k;
    nums.unshift(...nums.splice(nums.length-k,k))
};
```
