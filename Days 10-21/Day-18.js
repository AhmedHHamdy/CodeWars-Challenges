/*
--> Simple string characters
In this Kata, you will be given a string and your
task will be to return a list of ints detailing the count of uppercase letters, lowercase,
numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!

https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript
*/

function solve(s){
    //..
     let nums = 0
     let upper = 0
     let lower = 0
     let special = 0
     let arr = []
     while (arr.length < 4)  {
       for (let c of s) {
         if ('0123456789'.includes(c)) {
           nums++
         } else if ('abcdefghijklmnopqrstuvwxyz'.includes(c)){
           lower++
         } else if ('abcdefghijklmnopqrstuvwxyz'.toUpperCase().includes(c)) {
           upper++
         } else {
           special++
         }
       }
       arr = [upper, lower, nums, special]
     }
     return arr
}