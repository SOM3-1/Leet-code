# Leet-code
* My solutions to the Leet code problems.
* Each problems are kept in separate branches and question is added in README file of their respective branch.

* Boyer-Moore Voting Algorithm, use this only when it occurs more than ⌊n / 2⌋ times.
*   how it goes is to assign a count and candidate,  let say [2,2,1,1,1,2,2], here 2 is 4 count and 1 is 3 count total length is 7, so 2 is more, hence it satisfies n/2 rule.
*   In general if we assign a candidate and if the count rests to 0 then we select a differnt candidate, if the candidate is not found but already has an large count value for the candidate decremrent else increment

*   for(cont val of nums) {
*   if(c ===0){
*   candidate = x;

*   if nums===candiate ? c++ : c--;

* XOR if 2 items are repeated and used for identifying unique element

  This princle is that, a^a is 0;
  where as a^0 is a;
so [1,1, 2, 3, 3]
we initialise this to 0
0,1 is 1
1,1 is 0
0,2 is 2
2, 3 is 1
1, 3 is 2

is 2 is the final answer

Basic XOR Rules:

    0 ^ 0 = 0
    0 ^ 1 = 1
    1 ^ 0 = 1
    1 ^ 1 = 0
  
