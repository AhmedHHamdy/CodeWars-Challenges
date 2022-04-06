/*
--> Sort Numbers
Finish the solution so that it sorts the passed in array of numbers. 
If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript
*/


function solution(nums){
    return (nums === null) ? [] : nums.sort((a, b) => a - b)
}


// -----------------

/*
--> Bingo ( Or Not )
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input.
Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). 
Write a function where you will win the game if your numbers can spell "BINGO".
They do not need to be in the right order in the input array).
Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145/train/javascript
*/

function bingo(a) {
    // your winning code here
    return [2, 7, 9, 14, 15].every( e => a.includes(e)) ? 'WIN' : 'LOSE'; 
}
  

function bingo(a) {
    let n = [2,9,14,7,15]
    for(let i =0; i< n.length;i++){
      if(!a.includes(n[i])){ return 'LOSE' }
    }
    return 'WIN'
}



// ----------------------------------------------
