const sortedSquares = nums => {
   return nums.map(index=> (index*index)).sort((a, b) => a - b);   
};
