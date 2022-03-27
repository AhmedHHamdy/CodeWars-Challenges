/*
--> Well of Ideas - Easy Version
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'.
*/

countElemenets = (arr, val) => arr.reduce((count, x) => val === x ? count += 1 : count, 0)

function well(x){
  if (countElemenets(x, 'good') === 0) {
    return 'Fail!'
  } else if (countElemenets(x, 'good') <= 2) {
    return 'Publish!'
  } else {
    return 'I smell a series!'
  }
}

// const well = x => {
//     const good_count = x.filter(x => x == 'good').length;
//     return good_count < 1 ? 'Fail!' : 
//            good_count < 3 ? 'Publish!' : 'I smell a series!';
// }

// const well = x => {
//     const good_count = x.filter(x => x == 'good').length;
//     return good_count < 1 ? 'Fail!' : 
//            good_count < 3 ? 'Publish!' : 'I smell a series!';
// }




// ---------------------




/*
--> Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str){
    //You got this!
     return str.slice(1, -1)
};
   
   


// ---------------------




/*
--> Total amount of points
Our football team finished the championship. The result of each match look like "x:y". 
Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. 
Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
*/


function points(games) {
    // your code here
    let total = 0;
    for (let i of games) {
      if ((Number(i.split(":")[0])) > (Number(i.split(":")[1]))) {
        total += 3
      } else if ((Number(i.split(":")[0])) < (Number(i.split(":")[1]))) {
        total += 0
      } else {
        total += 1
      }
    }
    return total
}


// const points=games=>games.reduce((output,current)=>{
//     return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
// },0)




// ---------------------




/*
--> A Needle in the Haystack
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5" (in COBOL "found the needle at position 6")
*/

function findNeedle(haystack) {
  // your code here
    // your code here
  if (!(haystack.includes('needle'))) return undefined
  let indexElement = haystack.findIndex((x) => x === 'needle')
  return `found the needle at position ${indexElement}`
}


// function findNeedle(haystack) {
//   return "found the needle at position " + haystack.indexOf("needle");
// }




// ---------------------





/*
--> Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string.
For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
*/


function remove (string) {
  //coding and coding....
  arr = string.split("")
  newArr = []
  for (let i of arr) {
    if (!(i === "!")) {
        newArr.push(i)
    }
  }
  newArr.push("!")
  return newArr.join('')
}





// ---------------------





/*
--> Count of positives / sum of negatives
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  let newArr = []
  if (input === [] || input === null) {
    return newArr
  } else {
    let countPos = input.reduce((total, value) => value > 0  ? total += 1 : total, 0);
    let sumNeg = input.reduce((sum, value) => value < 0  ? sum + value : sum, 0);
    if (countPos === 0 && sumNeg === 0) {
      return []
    }
    newArr.unshift(countPos)
    newArr.push(sumNeg)
    return newArr
  }
}




// function countPositivesSumNegatives(input) {
//   if (!Array.isArray(input) || !input.length) return [];
//   return input.reduce((arr, n) => {
//     if (n > 0) arr[0]++;
//     if (n < 0) arr[1] += n;
//     return arr;
//   }, [0, 0]);
// }




// ---------------------




/*
--> Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/
function abbrevName(name){

  // code away
return name.split(' ')[0].split('')[0].toUpperCase() + '.' + name.split(' ')[1].split('')[0].toUpperCase()
}


// function abbrevName(name){

//   var nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }


// function abbrevName(name){
//   return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
// }



// ---------------------



/*
--> Convert number to reversed array of digits
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/

function digitize(n) {
  //code here
  return String(n).split('').reverse().map(x => Number(x))
}


// function digitize(n) {
//   return Array.from(String(n), Number).reverse();
// }



// ---------------------





/*
--> Reversed Strings
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/


function solution(str){
  let arr = str.split('')
  let newArr = []
  arr.map((x, i) => {
    newArr.unshift(arr[i])
  })
  return newArr.join('')
}


// function solution(str){
//   return str.split('').reverse().join('');  
// }


// const solution = s => [...s].reverse().join('')




// --------------------



/*
--> get character from ASCII Value
Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)
should return:

'A'
*/


function getChar(c){
  // ...
  return String.fromCharCode(c)
}




// --------------------




/*
--> Vowel remover
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/


function shortcut (string) {
  let arr = string.split('')
  for (let i of string) {
    if (i === 'u' || i === 'a' || i === 'i' || i === 'o' || i === 'e') {
      arr.splice(arr.indexOf(i), 1)
    }
  }
 return arr.join('')
}