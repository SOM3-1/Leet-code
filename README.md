# 283. Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.


``` javascript
const moveZeroes = (nums) =>{
nums.sort((o1, o2) => {
        if(o1==0 && o2!=0)
            return 1;
        if(o2==0 && o1!=0)
            return -1;
        else 
            return 0;
    });
    
    }
```
