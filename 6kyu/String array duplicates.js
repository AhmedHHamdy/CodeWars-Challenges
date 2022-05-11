/*
6kyu
--> String array duplicates
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

If you like this Kata, please try:

Alternate capitalization

https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript
*/

function dup(array) {
    return array.map(word => word.split('').filter((letter, index) => letter !== word[index + 1]).join(''))
};
  
  

// function dup(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(removeDuplicate(arr[i]));
//     }
//     return result;
//   };
  
//   function removeDuplicate(str) {
//     let word = '';
//     for (let i = 0; i < str.length ; i++) {    
//       if (str[i - 1] !== str[i]) {
//         word += str[i];
//       }
//     };
//     return word;
// };
