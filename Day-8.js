/*
--> Wilson primes
Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/


const factorial = x => x <= 1 ? 1 : factorial(x - 1);
function amIWilson(p) {
    return (factorial(p - 1) + 1) / (p * p) % 1 === 0;
}




// function amIWilson(p) {
//     return p === 5 || p === 13 || p === 563
// }



// -----------------------



/*
--> Is he gonna survive?
A hero is on his way to the castle to complete his mission. However, 
he's been told that the castle is surrounded with a couple of powerful 
dragons! each dragon takes 2 bullets to be defeated, 
our hero has no idea how many bullets he should carry..
Assuming he's gonna grab a specific given number of bullets
and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise
*/


function hero(bullets, dragons){
    //Get Coding!
      return (dragons*2 <= bullets) ? true : false
}
    


// ---------------------



/*
--> Convert a String to a Number!
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/



var stringToNumber = function(str){
    // put your code here
    return parseInt(str);
}



// -------------------



/*
--> Subtract the Sum
Subtract the sum
NOTE! This kata can be more difficult than regular 8-kyu katas (lets say 7 or 6 kyu)

Complete the function which get an input number n such that n >= 10 and n < 10000, then:

Sum all the digits of n.
Subtract the sum from n, and it is your new n.
If the new n is in the list below return the associated fruit, otherwise return back to task 1.
Example
n = 325
sum = 3+2+5 = 10
n = 325-10 = 315 (not in the list)
sum = 3+1+5 = 9
n = 315-9 = 306 (not in the list)
sum = 3+0+6 = 9
n =306-9 = 297 (not in the list)
.

*/

let fruits = {
1:'kiwi',
2:'pear',
3:'kiwi',
4:'banana',
5:'melon',
6:'banana',
7:'melon',
8:'pineapple',
9:'apple',
10:'pineapple',
11:'cucumber',
12:'pineapple',
13:'cucumber',
14:'orange',
15:'grape',
16:'orange',
17:'grape',
18:'apple',
19:'grape',
20:'cherry',
21:'pear',
22:'cherry',
23:'pear',
24:'kiwi',
25:'banana',
26:'kiwi',
27:'apple',
28:'melon',
29:'banana',
30:'melon',
31:'pineapple',
32:'melon',
33:'pineapple',
34:'cucumber',
35:'orange',
36:'apple',
37:'orange',
38:'grape',
39:'orange',
40:'grape',
41:'cherry',
42:'pear',
43:'cherry',
44:'pear',
45:'apple',
46:'pear',
47:'kiwi',
48:'banana',
49:'kiwi',
50:'banana',
51:'melon',
52:'pineapple',
53:'melon',
54:'apple',
55:'cucumber',
56:'pineapple',
57:'cucumber',
58:'orange',
59:'cucumber',
60:'orange',
61:'grape',
62:'cherry',
63:'apple',
64:'cherry',
65:'pear',
66:'cherry',
67:'pear',
68:'kiwi',
69:'pear',
70:'kiwi',
71:'banana',
72:'apple',
73:'banana',
74:'melon',
75:'pineapple',
76:'melon',
77:'pineapple',
78:'cucumber',
79:'pineapple',
80:'cucumber',
81:'apple',
82:'grape',
83:'orange',
84:'grape',
85:'cherry',
86:'grape',
87:'cherry',
88:'pear',
89:'cherry',
90:'apple',
91:'kiwi',
92:'banana',
93:'kiwi',
94:'banana',
95:'melon',
96:'banana',
97:'melon',
98:'pineapple',
99:'apple',
100:'pineapple'
};  

const SubtractSum = n => {
    let number = n - String(n).split('').reduce((sum, item) => sum += +item, 0);
    if (number > 100) return SubtractSum(number)
    else return fruits[number]
}
    


// ----------------------



/*
--> Correct the mistakes of the character recognition software
Character recognition software is widely used to digitise printed texts. 
Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter),
are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

function correct(string){
	// your code here
  let arr = string.split("")
  arr.forEach((x, i) => {
    if (x === '5') {
      arr[i] = 'S'
    } else if (x === '0') {
      arr[i] = 'O'
    } else if (x === '1') {
      arr[i] = 'I'
    }
  })
    return arr.join('')
}




// -------------------------




/*
--> I love you, a little , a lot, passionately ... not at all
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, 
saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/


function howMuchILoveYou(nbPetals) {
  // your code
  let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  if (nbPetals % 6 == 1) {
    return arr[0]
  } else if (nbPetals % 6 == 2) {
    return arr[1]
  } else if (nbPetals % 6 == 3) {
    return arr[2]
  } else if (nbPetals % 6 == 4) {
    return arr[3]    
  } else if (nbPetals % 6 == 5) {
    return arr[4]
  } else {
    return arr[5]
  }
}




// const phrases = [
//   'I love you',
//   'a little',
//   'a lot',
//   'passionately',
//   'madly',
//   'not at all',
// ]

// function howMuchILoveYou(n) {
//    return phrases[(n - 1) % phrases.length] 
// }




// -----------------------



/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.
*/


function switchItUp(number){
//Write your own Code!
  switch (number) {
      case 0:
        return 'Zero'
        break;
      case 1:
        return 'One'
        break;
      case 2:
        return 'Two'
        break;
      case 3:
        return 'Three'
        break;      
      case 4:
        return 'Four'
        break;
      case 5:
        return 'Five'
        break;
      case 6:
        return 'Six'
        break;      
      case 7:
        return 'Seven'
        break;      
      case 8:
        return 'Eight'
        break;      
      case 9:
        return 'Nine'
        break;      
      case 10:
        return 'Ten'
        break;         
  }
}



// -------------------------




/*
--> Transportation on vacation
After a hard quarter in the office you decide to get some rest on a vacation.
So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. 
The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days,
you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/



function bastCost(days, rate) {
  return days * rate
}


function discountRate(days) {
  if (days >= 7) {
    return 50
  } else if (days >= 3) {
    return 20
  } else {
    return 0
  }
}


function rentalCarCost(days) {
  return bastCost(days, 40) - discountRate(days)
}




// const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));




// --------------------




/*
Your task is to create the functionisDivideBy (or is_divide_by) to check if 
an integer number is divisible by both integers a and b.

A few cases:


(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false

(45, 1, 6)    ->  false
(45, 5, 15)   ->  true

(4, 1, 4)     ->  true
(15, -5, 3)   ->  true
*/



function isDivideBy(number, a, b) {
  // good luck
  return (number % a === 0 && number % b === 0) ? true : false 
}




// --------------------------------



/*
--> Century From Year
The first century spans from the year 1 up to and including the year 100, the second century - 
from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

function century(year) {
  // Finish this :)
  if (year % 100 === 0) {
    return parseInt(year / 100)
  } else if (!(year % 100 === 0)) {
    return parseInt(year / 100) + 1
  }
}


// function century(year) {
//   return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
// }