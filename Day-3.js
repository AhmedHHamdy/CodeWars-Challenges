/*
// Double Char
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/


let doubleChar = (str) => {
    let word = ''
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < 2; j++) {
          word += str[i]
        }
    }
    return word
}

// const doubleChar = (str) => str.split("").map(c => c + c).join("");




// ------------------------




/*
// Sum of positive
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */




function positiveSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i]
      }
    }
    return sum
}


// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }

// function positiveSum (arr) {
//     return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
// }




// ------------------------




/*
// Is it even?
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata. */


function testEven(n) {
    //Your awesome code here!
  if (n % 2 === 0) {
    return true
  } else {
    return false
  }
}

function testEven(n) {
    return n%2===0;
}




// ------------------------




/* 
// Enumerable Magic #25 - Take the First N Elements
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference: */

function take(arr, n) {
    return arr.slice(0, n);
}




// ------------------------




/*
// Define a card suit
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/



function defineSuit(card) {
    if (card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades' 
}


// function defineSuit(card) {
//     const s = {
//       "♣": "clubs",
//       "♠": "spades",
//       "♦": "diamonds",
//       "♥": "hearts"
//     }
//     return s[card.charAt(card.length - 1)]
// }




// ------------------------




/*
// Exclamation marks series #1: Remove an exclamation mark from the end of string
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.*/




function remove (string) {
  //coding and coding....
  return (string.slice(-1) === '!') ?  string.slice(0, -1) : string; 
} 


// function remove(s) {
//   return s.endsWith('!') ? s.slice(0, -1) : s;
// }




// ------------------------




/*
// Parse nice int from char problem
Ask a small girl - "How old are you?". She always says strange things... Lets help her!

For correct answer program should return int from 0 to 9.

Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.*/

function getAge(inputString){
  // return correct age (int). Happy coding :) 
    return Number(inputString.slice(0, 1))
}


// function getAge(inputString){
//   return parseInt(inputString);
// }





// ------------------------




/*
// Find the Remainder
Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.*/



function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
  return (n > m) ? n % m : m % n
}





// ------------------------




/*
// Convert a Number to a String!
We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999"*/



function numberToString(num) {
  // Return a string of the number here!
  return String(num)
}

// function numberToString(num) {
//   return num.toString();
// }

// function numberToString(num) {
//   return ''+num;
// }




// ------------------------



/*
// Sum of Multiples
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"*/



function sumMul(n,m){
  //your idea here
  if (n <= 0 || m <=0) {
    return 'INVALID'
  }
  let sum = 0
  for (let i = n; i < m; i += n) {
    sum += i
  }
  return sum
}