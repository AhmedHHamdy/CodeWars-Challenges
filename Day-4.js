/*
--> Merge two sorted arrays into one
You are given two sorted arrays that both only contain integers. 
Your task is to find a way to merge them into a single one, 
sorted in asc order. Complete the function mergeArrays(arr1, arr2),
 where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. 
If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. 
Remove duplicated in the returned result.*/







function mergeArrays(arr1, arr2) {
    if (arr1 === [] || arr2 == []) {
      return []
  //    find returns undefined if the array has no duplicates, The Boolean value of undefined is false
    } else if (arr1.find(x => arr2.includes(x))) {
      let newArr = arr1.concat(arr2)
    //   set removes duplicates
      newArr = [...new Set(newArr)]
      return newArr.sort((a, b) => a - b)
    } else {
      let newArr = arr1.concat(arr2)
      return newArr.sort((a, b) => a - b)
    }
}

// function mergeArrays(arr1, arr2) {
//     return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
// }

// function mergeArrays(a, b) {
//     return [...new Set(a.concat(b))].sort((a,b)=>a-b)
// }




// -------------------------------------




/*
--> Function 3 - multiplying two numbers
Implement a function which multiplies two numbers.
*/


// Write here your multiply-function  
let multiply = (x, y) => x * y




// -------------------------------------




/*
--> Beginner - Lost Without a Map
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/


function maps(x){
  return x.map(x => x * 2)
}



// -------------------------------------




/*
--> Will you make it?
You were camping with your friends far away from home,
but when it's time to go back, you realize that your 
fuel is running out and the nearest pump is 50 miles away! 
You know that on average, your car runs on about 25 miles per gallon. 
There are 2 gallons left. Considering these factors, 
write a function that tells you if it is possible to get to the pump or not.
Function should return true (1 in Prolog, NASM and COBOL) 
if it is possible and false (0 in Prolog, NASM and COBOL) if not. 
The input values are always positive.
*/


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  return  (mpg * fuelLeft >= distanceToPump) ? true : false
};





// -------------------------------------




/*
--> Aspect Ratio Cropping - Part 1
The aspect ratio of an image describes the proportional relationship between its width and its height.
Most video shown on the internet uses a 16:9 aspect ratio, which means that for every pixel in the Y, 
there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9). As an example,
1080p video with an aspect ratio of 16:9 would have an X resolution of 1920,
however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.

Write a function that accepts arbitrary X and Y resolutions and converts them into
resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.
*/





function aspectRatio(x,y){
  return [Math.ceil(16/9 * y), y]
}





// -------------------------------------




/*
--> Sum The Strings
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)*/



function sumStr(a,b) {
  return `${Number(a) + Number(b)}`
}

// function sumStr(a,b) {
//   return String(Number(a)+Number(b));
// }


// function sumStr(a,b) {
//   return (+a+ +b)+''  
// }



// -------------------------------------



/*
--> Hex to Decimal
Complete the function which converts hex number (given as a string) to a decimal number.
*/

function hexToDec(hexString){
  //your code here
  return parseInt(hexString, 16)
}



// -------------------------------------



/*
---> A Strange Trip to the Market
You're on your way to the market when you hear beautiful music coming from a nearby street performer.
The notes come together like you wouln't believe as the musician puts together patterns of tunes.
As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that,
it dawns on you that you have been watching the musician for some 10 odd minutes.
You ask, "how much do people normally tip for something like this?" The artist looks up. 
"It's always gonna be about tree fiddy."

It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!

There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) 
it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy".
Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster.
Note that the phrase can also be written as "3.50" or "three fifty".*/



function isLockNessMonster(s) {
  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
  return s.includes("3.50") || s.includes('thee fifty') || s.includes('tree fiddy')
}



// -------------------------------------



/* 
--> altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Description:
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase 
(or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase 
in your selected language; see the initial solution for details) 
such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:*/

String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  let word = []
  for (i of this) {
    if (i === i.toUpperCase()) {
      word.push(i.toLowerCase())
    } else if (i === i.toLowerCase()) {
      word.push(i.toUpperCase())
    } else {
      word.push(i)
    }
  }
  return word.join("")
}


// String.prototype.toAlternatingCase = function () {
//   return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
// }


// const isLowerCase = (char) => char.toLowerCase() === char;
// const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

// String.prototype.toAlternatingCase = function() {
//   return [...this].map(swapCase).join('');
// };



// -------------------------------------



/*
--> Add new item (collections are passed by reference)
Add an item to the list:

AddExtra method adds a new item to the list and returns the list. 
he new item can be any object, and it does not matter. (lets say you add an integer value, like 13)

In our test case we check to assure that the returned list has one more item than the input list.
However the method needs some modification to pass this test.

P.S. You have to create a new list and add a new item to that. 
(This Kata is originally designed for C# language and it shows 
that adding a new item to the input list is not going to work,
even though the parameter is passed by value, but the value 
is poining to the reference of list and any change on parameter will be seen by caller */



function addExtra( listOfNumbers ){
  // your code here
  // add an int to listOfNumbers and return it
return [...listOfNumbers, 5]
}