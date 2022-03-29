/*
--> Exclamation marks series #2: Remove all exclamation marks from the end of sentence

Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"*/


function remove (string) {  
    arr = string.split("")
    while (arr[arr.length-1] === "!") {
      arr.pop()
    }
    return arr.join('')
}




// ---------------------

/*
--> ASCII Total
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/


function uniTotal (string) {
    // total up dem unicodes!
    let sum = 0
    for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i)
    }
    return sum
}


// const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);


// ---------------

/*
--> Fake Binary
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/


function fakeBin(x){
    let arr = x.split('')
    return arr.map((x, i) => (x < 5) ? arr[i] = '0' : arr[i] = '1' ).join('')
}

// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

// --------------


/*
--> Rock Paper Scissors!
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

const rps = (p1, p2) => {
    if (p1 === 'rock' && p2 === 'scissors' ) {
      return 'Player 1 won!'
    } else if (p2 === 'rock' && p1 === 'scissors') {
      return 'Player 2 won!'
    } else if (p2 === 'rock' && p1 === 'scissors') {
      return 'Player 2 won!'
    } else if (p1 === 'paper' && p2 === 'scissors') {
      return 'Player 2 won!'
    } else if (p2 === 'paper' && p1 === 'scissors') {
      return 'Player 1 won!'
    } else if (p1 === 'rock' && p2 === 'paper') {
      return 'Player 2 won!'
    } else if (p2 === 'rock' && p1 === 'paper') {
      return 'Player 1 won!'
    } else {
      return 'Draw!'
    }
};
  



// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//     if (p2 === rules[p1]) {
//       return "Player 1 won!";
//     }
//     else {
//       return "Player 2 won!";
//     }
// };



// --------------



/*
--> Student's Final Grade
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: 
a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - 
number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
*/

function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) {
      return 100
    } else if  (exam > 75 && projects >= 5) {
      return 90
    } else if (exam > 50 && projects >= 2) {
      return 75
    } else {
      return 0
    }
}





// function finalGrade(exam, projects) {
//     if (exam > 90 || projects > 10) return 100;
//     if (exam > 75 && projects >= 5) return 90;
//     if (exam > 50 && projects >= 2) return 75;
//     return 0;
// }





// --------------

/*
--> BASIC: Making Six Toast.
Story:
You are going to make toast fast, you think that you should make multiple pieces of toasts and once. 
So, you try to make 6 pieces of toast.

Problem:
You forgot to count the number of toast you put into there, you don't know 
if you put exactly six pieces of toast into the toasters.

Define a function that counts how many more (or less) pieces of toast you need in the toasters. 
Even though you need more or less, the number will still be positive, not negative.

Examples:
You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:

six_toast(5) == 1
And in case of 12 you need 6 toasts less (but not -6):

six_toast(12) == 6
*/




function sixToast(num) {
    // you code here
    return Math.abs(6-num)
}




// ---------------


/*
--> Holiday VIII - Duty Free
The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.
*/




function dutyFree(normPrice, discount, hol){
    x = (normPrice * (discount/100.0))
    return Math.floor(Number(hol/x))
}


// ---------------


/*
--> Grasshopper - Check for factor
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.
*/

function checkForFactor (base, factor) {
    // code here
    return (base % factor == 0) ? true : false
}


// ---------------

/*
--> DNA to RNA Conversion
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. 
It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells.
RNA differs slightly from DNA its chemical structure and contains no Thymine.
In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna.split('T').join('U')
}




// -------------------

/*
--> Thinkful - Logic Drills: Traffic light
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.

Note: Use "" instead of '' in C++.
*/


function updateLight(current) {
  
    //your code here!
    status = {
      red: 'green',
      green: 'yellow',
      yellow: 'red'
    }
    
    return status[current]
  
}