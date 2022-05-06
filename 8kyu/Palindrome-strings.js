/*
8kyu
--> Palindrome strings
A palindrome is a word, phrase, number, or other sequence of 
characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false

https://www.codewars.com/kata/57a5015d72292ddeb8000b31/train/javascript
*/

function isPalindrome(line) {
    return (line.toString().slice(0, 1) === line.toString().slice(-1)) ? true : false;
}


// function isPalindrome(line) {
//     return (String(line) == String(line).split('').reverse().join(''))
    
// }
  
  


// function isPalindrome(line) {
//     line = line.toString();
    
//     for (var left = 0, right = line.length - 1; left < right;) {
//       if (line.charAt(left++) !== line.charAt(right--)) {
//         return false;
//       }
//     }
  
//     return true;
// }