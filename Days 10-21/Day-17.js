/*
--> Alphabet symmetry
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2.
In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions 
in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck!

https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript
*/

function solve(arr){  
    //code
      let alph = 'abcdefghijklmnopqrstuvwxyz'
      return arr.map(v => v.toLowerCase().split('').filter((c, i) => i == alph.indexOf(c)).length)
}
    
    
// function solve(arr){  
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
//     let final = []
//     for (let i = 0; i < arr.length; i++) {
//       let count = 0;
//       for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j].toLowerCase() === alphabet[j]) {
//           count++;
//         }
//       }
//       final.push(count); 
//     }
//     return final
// };