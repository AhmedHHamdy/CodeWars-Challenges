
/*
--> Sum Arrays
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. 
If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.


*/
function sum (numbers) {
    "use strict";
    return numbers.reduce((sum, v) => sum + v, 0)
    
};

// -------------------------

/*
--> Count the Monkeys!
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), 
but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), 
populate an array with all numbers up to and including that number, but excluding zero.

For example:

monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1]
*/

function monkeyCount(n) {
    // your code here
      let s = [...Array(n+1).keys()]
      s.splice(0, 1)
      return s
}


// function monkeyCount(n) {
//     return [...Array(n+1).keys()].slice(1);
// }

// -----------------------

/*
--> Beginner - Reduce but Grow
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

function grow(x){
    return x.reduce((sum, v) => sum *= v, 1)
}


// --------------------------

/*
--> Do I get a bonus?
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation...
but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, 
the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with 
"£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).


*/

function bonusTime(salary, bonus) {
    // your code here
      return (bonus === true) ? '£' + salary * 10 : "£" + salary
}

// -------------------

/*
--> Get Planet Name By ID
The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"
*/

function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
      break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    
    return name;
}


// -------------------------

/*
--> Sum without highest and lowest number
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, 
or the given array is an empty list or a list with only 1 element, return 0.


*/

let sumArray = array => array ?  array.sort((a, b) => a - b).slice(1, -1).reduce((sum ,v) => sum += v, 0) : 0


// ------------------

