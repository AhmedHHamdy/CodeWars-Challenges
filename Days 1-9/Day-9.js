/*
--> Third Angle of a Triangle
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle
*/




function otherAngle(a, b) {
    return 180 - (a + b);
}




// -----------------




/*
--> Get Nth Even Numbe
Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0.
*/


function nthEven(n){
    // your code here
    return n * 2 - 2
}





// -----------------





/*
--> Beginner Series #2 Clock
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

function past(h, m, s){
    //#Happy Coding! ^_^
    return h * (3600000) + m * 60000 + s * 1000
    
}


// function past(h, m, s){
//     var miliseconds = 0;
//     miliseconds = miliseconds + s * 1000;
//     miliseconds = miliseconds + m * 60000;
//     miliseconds = miliseconds + h * 3600000;
//     return miliseconds;
// }




// -------------------




/*
--> Grasshopper - Messi goals function
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/


function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // code goes here
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

// const goals = (...a) => a.reduce((s, v) => s + v, 0);





// --------------------------




/*
--> Grasshopper - Variable Assignment Debug
Variable assignment
Fix the variables assigments so that this code stores the string 'devLab' in the variable name.
*/

var a = "dev"
var b = "Lab"

var name = a + b





// ---------------




/*
--> Grasshopper - Basic Function Fixer
Fix the function
I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?
*/

function addFive(num) {
    var total = num + 5
    return total
}




// ------------------




/*
--> Grasshopper - Terminal game move function
Terminal game move function
In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/

function move (position, roll) {
    // return the new position
    return position + roll * 2
}




// ----------------------




/*
--> Opposite number
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

function opposite(number) {
    //your code here
    return -number
}




// -------------------




/*
--> Grasshopper - Summation
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summation = function (num) {
    // Code here
    let sum = 0
    for (let i = 1; i <= num; i++) {
      sum += i
    }
    return sum
}


// function summation(num) {
//     return num * (num + 1) / 2
// }




// -------------------------



/*
-->Squash the bugs
Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.
*/

function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
    }
    return longest
}