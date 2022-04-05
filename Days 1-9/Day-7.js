/*
--> If you can't sleep, just count sheep!!
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 
3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.
*/





var countSheep = function (num){
    //your code here
    let text = ''
    for (let i=0; i < num; i++) {
      text += `${i+1} sheep...`
    }
    return text
}


// countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``


// --------------

/*
--> Convert a string to an array
Write a function to split a string and convert it into an array of words.

Examples (Input -> Output):
* "Robin Singh" ==> ["Robin", "Singh"]

* "I love arrays they are my favorite" ==> ["I", "love", "arrays
*/



function stringToArray(string){

	// code code code
  return string.split(' ')

}







// -------------------






/*
--> Decibel Scale
he following formula is called the Decibel Scale:

Decibel Scale Formula

The Decibel Scale is used to determine the loudness of a sound, measured in dB:

β is the result we want, defined in dB;
We multiply the result of the logarithmic operation by 10, otherwise it'll be called "Bel Scale";
We provide I, the intensity of the sound wave we need to find the loudness of, which is, for the purposes of this Kata, 
measured in 2D space and, hence, in Watts per square meter;
Finally, we divide the intensity by the threshold of human hearing, also measured in Watts per square meter.
This is the softest possible sound a human ear can hear;
Since the threshold of human hearing involves an extremely small, long number,
we need to utilize a logarithmic operation that will provide us the result in a convenient way.
Your task is to simply calculate the loudness of a sound wave,
given its intensity as a parameter to the dBScale/db_scale function.
*/


function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }
  
  function dBScale(intensity) {
    return 10 * getBaseLog( 10 ,intensity / 10 ** -12 )
}


// const dBScale = intensity => 10 * (12 + Math.log10(intensity));






// ----------------------






/*
--> Find the first non-consecutive number
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not,
so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers.
The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1 Can you write a solution that will return null2 for both [] and [ x ] though? 
(This is an empty array and one with a single number and is not tested for, but you can write your own example test. )
*/



function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
}







// -----------------







/*
--> Pirates!! Are the Cannons ready!??
Ahoy Matey!

Welcome to the seven seas.

You are the captain of a pirate ship.

You are in battle against the royal navy.

You have cannons at the ready.... or are they?

Your task is to check if the gunners are loaded and ready, if they are: Fire!

If they aren't ready: Shiver me timbers!

Your gunners for each test case are 2, 3 or 4.

When you check if they are ready their answers are in a dictionary and will either be: aye or nay

Firing with less than all gunners ready is non-optimum (this is not fire at will, 
this is fire by the captain's orders or walk the plank, dirty sea-dog!)

If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!
*/



const cannonsReady = (gunners) => Object.values(gunners).every(e => e === 'aye') ? 'Fire!' : 'Shiver me timbers!'






// ---------------------





/*
--> For Twins: 2. Math operations
Task:
A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:

radius - bottle's radius (always > 0);
bottleLength - total bottle length (always > 0);
rimLength - length from bottle top to brick (always < bottleLength);
And return volume of ice brick that magician managed to put into a bottle.
*/


function iceBrickVolume(radius, bottleLength, rimLength) {
    // Your code should be here ;)
    return (bottleLength - rimLength) * radius * 2 * radius;
}







// --------------







/*
--> Is n divisible by x and y?
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
*/



function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false
}
  





// ---------------






/*
--> Reversed Words
Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/


function reverseWords(str){
    return str.split(" ").reverse().join(" "); // reverse those words
}





// -----------------------






/*
--> Grasshopper - Grade book
Grade book
Complete the function so that it finds the average of the three scores passed to it 
and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/


function getGrade (s1, s2, s3) {
    // Code here
    let avg = (s1 + s2 + s3)/ 3
    if (avg >= 90 && avg <= 100) {
      return 'A'
    } else if (avg >= 80 && avg < 90) {
      return 'B'
    } else if (avg >= 70 && avg < 80) {
      return 'C'
    } else if (avg >= 60 && avg < 70) {
      return 'D'
    } else {
      return 'F'
    }
}




// --------------------





/*
--> Counting sheep...
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/



function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    return arrayOfSheep.reduce((sum, v) => v === true ? sum += 1 : sum, 0)
}

// function countSheeps(arrayOfSheeps) {
// return arrayOfSheeps.filter(Boolean).length;
// }