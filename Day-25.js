/*
--> Last man standing
This kata is based on Project Euler Problem 539

##Object

Find the last number between 1 and n (inclusive) that survives the elimination process

####How It Works

Start with the first number on the left then remove every 
other number moving right until you reach the the end, then from the numbers 
remaining start with the first number on the right and remove every other number 
moving left, repeat the process alternating between left and right until only one
 number remains which you return as the "last man standing"

##Example

given an input of `9` our set of numbers is `1 2 3 4 5 6 7 8 9`

start by removing from the left    2   4   6   8
                                 1   3   5   7   9


then from the right                2       6
                                       4       8


then the left again                        6
                                   2


until we end with `6` as the last man standing

https://www.codewars.com/kata/567c26df18e9b1083a000049/train/javascript
*/



function lastManStanding(n){
    let arr = []
    for (let i = 2; i <= n; i+=2) {
      arr.push(i)
    }
    
    while(arr.length > 1) {
      arr = arr.reverse()
      arr = arr.filter((v, i) => i % 2 == 1)
    }
    return arr[0]
}
  


// function lastManStanding(n){
//     a = []
//     for (let i = 2; i <= n; i+=2){
//       a.push(i)
//     }
//     while (a.length > 1){
//       a = a.reverse()   
//       a = a.filter(function(value, index, arr){ 
//         return index % 2 == 1;
//       });
//     }
//     return a[0]
// }


// ---------------------------


/*
--> Circle area inside square
Circle area inside square
Turn an area of a square in to an area of a circle that fits perfectly inside the square.

inscribed circle

You get the blue+red area and need to calculate the red area.

Your function gets a number which represents the area of the square and should return the area of the circle.
The tests are rounded by 8 decimals to make sure multiple types of solutions work.

You don't have to worry about error handling or negative number input: area >= 0.

This kata might be simpler than you expect, but good luck!

https://www.codewars.com/kata/5899aa695401a83a5c0000c4/train/javascript
*/


function squareAreaToCircle(size){
    let area = (Math.PI * ((Math.sqrt(size))**2)  / 4)
    return  Number(area.toFixed(8));
}