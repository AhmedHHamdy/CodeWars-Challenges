/*
--> Help the Elite Squad of Brazilian forces BOPE
The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

PT92 - 17 bullets
M4A1 - 30 bullets
M16A2 - 30 bullets
PSG1 - 5 bullets

Example:

["PT92", 6] => 2 (6 streets 3 bullets each)
["M4A1", 6] => 1

The return Will always be an integer so as the params.
*/




function magNumber(info){
    [weapon, streets] = info
    const weapons = {
        "PT92": 17,
        "M4A1" : 30,
        "M16A2" : 30,
        "PSG1":5,
    }
    if(3 * streets <= weapons[weapon]) return 1
    else {
      let n = 1;
      while(weapons[weapon] * n < streets * 3) n++
      return n
    }
}
  
// --------------------------------------
/*
--> String cleaning
Your boss decided to save money by purchasing some cut-rate optical 
character recognition software for scanning in the text of old novels to your database.
At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers.
Your program will take in a string and clean out all numeric characters, 
and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/








function stringClean(s){
    // Function will return the cleaned string
    let arr =s.split('')
    let newArr = []
  //   return arr.filter((x, i) => (!(isNaN(x))) ? arr.splice(i, 1) : arr).join('')
    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(arr[i]) && (!(arr[i] === ' '))) {
        continue
      } else {
        newArr.push(arr[i])
      }
    }
    return newArr.join('')
}




// function stringClean(s){
//     var array = s.split("").map( (char) => {
//       if (!parseInt(char) && char !== "0"){
//         return char
//       }
//     })
//     return array.join("")
// }









// -----------------------------

/*
--> Stringy Strings
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/








function stringy(size) {
    // your code here 
    let s = ''
    for (let i = 1; i <= size; i++) {
      s += i % 2
    }
    return s
}
  
// +!(2%2) --> 1 // +!(5%2) --> 0

// const stringy = size => Array.from(Array(size), (v, i) => +!(i % 2)).join('');


// ------------------------------

/*
--> Removing Elements
Take an array and remove every second element from the array.
Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr){
    //your code here
    return arr.filter((x, i) => ((i % 2 === 0)))
}


// function removeEveryOther(arr){
//     var newArr=[];
//   for (var i = 0; i < arr.length; i+=2){
//     newArr.push(arr[i]);
//     }
//   return newArr;
// }


// function removeEveryOther(arr){
//     //your code here
//     for (var i = 1; i < arr.length;i++){
//         arr.splice(i,1);
//     }
//     return arr;
// }


// -------------------

/*
--> Remove First and Last Character Part Two
This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same 
character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and 
last items would cause the resulting string to be empty, 
return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/



function array(str){
    //Good luck
    let arr = str.split(',')
    if (arr.length === 1 || arr.length === 2 || arr === '') return null
    else {
        arr.splice(0, 1)
        arr.splice(arr.length - 1, 1)
    }
    return arr.join(' ')
}
    
// it is not array
// const array = (arr) => {
//     arr = arr.split(',')
//     arr.pop()
//     arr.shift()
//     return arr.join(' ') === '' ? null : arr.join(' ')
// }

// const array = arr => 
//   arr.split(`,`).slice(1, -1).join(` `) || null;

// -----------------------

/*
--> Array plus array
I'm new to coding and now I want to get the sum of two arrays...
actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/


function arrayPlusArray(arr1, arr2) {
    let sum = arr1.reduce((sum, v) => sum += v, 0)
    sum += arr2.reduce((sum, v) => sum += v, 0)
    return sum
}


// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
// }

// ------------------------

/*
--> Basic Mathematical Operations
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/


function basicOp(operation, value1, value2)
{
  // Code
  switch (operation) {
    case '+':
      return value1 + value2
    case '-':
      return value1 - value2
    case '*':
      return value1 * value2
    case '/':
      return value1 / value2
    default:
      return 0;
  }
}


// ----------------------

/*
--> Invert values
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, 
and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/


function invert(array) {
    return array.map(x => -x);
}



// -----------------------------

/*
--> How good are you really?
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. 
For calculating the average point you may add your point to the given array!
*/


function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let sum = classPoints.reduce((sum, v) => sum += v)
    let avg = sum / classPoints.length
    return (yourPoints > avg) ?  true : false
}
  

// function betterThanAverage(classPoints, yourPoints) {
//     return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
// }


// -----------------------------


/*
--> Are You Playing Banjo?
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

function areYouPlayingBanjo(name) {
    // Implement me
    return (name[0].toLowerCase() === 'r') ? `${name} plays banjo` : `${name} does not play banjo`;
}

// --------------------------

/*
--> Kata Example Twist
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites/Websites 1,000 times.

var websites = []
*/

// add the value "codewars" to the websites array 1,000 times
let websites = []
let func = () => {
  for (let i = 0; i < 1000; i++) {
    websites.push('codewars')
  }
  return websites
}

func()


// var websites = new Array(1000).fill("codewars");


// var websites = [];
// while (websites.length < 1000) websites.push("codewars")

// -------------------------------


/*
--> 101 Dalmatians - squash the bugs, not the dogs!
Your friend has been out shopping for puppies (what a time to be alive!)...
He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should
respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.

Good luck!

*/




function howManyDalmatians(number) {
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

    var respond = number <= 10 ? dogs[0] : (number <= 50) ? dogs[1] : (number == 101) ? dogs[3] : dogs[2]

    return respond
  
}
    
  