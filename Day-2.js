/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!*/


function doubleChar(str) {
    // Your code here
    let word = '';
    for (let i = 0; i < str.length; i++) {
      for (let j =0; j < 2; j++) {
        word += str[i]
      }
    }
    return word
}
  

const doubleChar = (str) => str.split("").map(c => c + c).join("");




// ----------------------------------




/*Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

Notes
You may consider that there will not be any empty arrays/vectors.*/




var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}




// ----------------------------------




/* Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly] */




function greet(name){
    //your code here
    return `Hello, ${name} how are you doing today?`
}





// ----------------------------------





/*Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. 
Return the result rounded to two decimals.*/




function squareArea(A){
    return Number(((2 * A / Math.PI) ** 2).toFixed(2))
}


// function squareArea(A){
//     return Math.round(Math.pow(A*2/Math.PI, 2) * 100) /100
// }    





// ----------------------------------




/*Complete the function that takes two integers (a, b, where a < b) and return an array of
all integers between the input parameters, including them.

For example:
a = 1
b = 4
--> [1, 2, 3, 4]*/



function between(a, b) {
    // your code here
    let arr = []
    for (let i = a; i < b + 1; i++) {
      arr.push(i)
    }
    return arr
}





// ----------------------------------




/*In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]*/



function reverseList(list) {
    return list.reverse()
}





// ----------------------------------





/*Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'*/



function smash (words) {
    return words.join(' ')
};





// ----------------------------------




/*
Is it a palindrome?
Write a function that checks if a given string (case insensitive) is a palindrome.*/



function isPalindrome(x) {
    // your code here
    return x.toLowerCase() === x.toLowerCase().split("").reverse().join("") ? true : false
}
  



// ----------------------------------





/*
Difference of Volumes of Cuboids
In this simple exercise, you will create a program that will take two lists of integers, 
a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. 
You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20.
Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.*/



function findDifference(a, b) {
    //loading...
    let mult = 1;
    let mult2 = 1;
    a.forEach(x => mult *= x)
    b.forEach(y => mult2 *= y)
    return Math.abs(mult2 - mult)
}


function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}




// ----------------------------------




/* 
Filter out the geese
Write a function that takes a list of strings as an argument and returns a filtered list
containing the same elements but with the 'geese' removed.*/


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
};



function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => geese.indexOf(bird) < 0 );
};