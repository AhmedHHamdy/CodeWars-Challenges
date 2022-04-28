/* Complete the function that takes a non-negative integer n as input,
and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).*/


function powersOfTwo(n){
    let resArr = []
    for (let i = 0; i <= n; i++) {
    result = 2 ** i
    resArr.push(result)
    }
    return resArr
}

// function powersOfTwo(n){
//   let result = [];
//   for (let i = 0; i <= n; i++) {
//     result.push(Math.pow(2, i));
//   }
//   return result;
// }





// ----------------------------------





/* Bob needs a fast way to calculate the volume of a cuboid with three values: length,
width and the height of the cuboid. Write a function to help Bob with this calculation.*/


class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
    return length * width * height
  }
}





// ----------------------------------





/* Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.*/




function lovefunc(flower1, flower2){
    // moment of truth
    if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
      return true
    } else if (flower1 % 2 === 0 && flower2 % 2 === 0) {
      return false
    } else if (flower2 % 2 === 0 && flower1 % 2 !== 0) {
      return true
    } else {
      return false
    }
}


// function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2;
// }





// ----------------------------------





/* We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript Object or
Python Dict setting the 'value' key on the new Object or Dict to the passed-in value.
So, for example, if we execute the following code: 

wrapper_obj = wrap("my_wrapped_string"); 
# wrapper_obj should be  {"value":"my_wrapped_string"}

We would then expect the following statement to be true:
wrapper_obj["value"] == "my_wrapped_string"

Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.*/


function wrap(value) {
    return {
        "value": value
    }
}




// ----------------------------------





/* Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer,
 and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

Examples (Input -> Output)
* 15  -> '101.25 Chinese Yuan'
* 465 -> '3138.75 Chinese Yuan'

The conversion rate you should use is 6.75 CNY for every 1 USD.
All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")*/





function usdcny(usd) {
    let convert = usd * 6.75;
    return `${convert.toFixed(2)} Chinese Yuan`
}

usdcny = $ => `${($ * 6.75).toFixed(2)} Chinese Yuan`;





// ----------------------------------




/* There are pillars near the road. 
The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).*/


function pillars(num_pill, dist, width) {
    // your code here
    if (num_pill == 1) {
      return 0
    } else {
      let distance = ((num_pill-2)*width) + ((100*dist)*(num_pill-1))
      return distance
    }
  
}


// function pillars(num_pill, dist, width) {
// // your code here
// return num_pill > 1 ? (num_pill-1) * dist * 100 + (num_pill-2) * width : 0;
// }





// ----------------------------------





/* "Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, 
at a given position relative to a mid-point, Q has a corresponding point, 
P1, which is the same distance from Q but in the opposite direction.

Task
Given two points P and Q, output the symmetric point of point P about Q. 
Each argument is a two-element array of integers representing the point's X and Y coordinates. 
Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.
This kata was inspired by the Hackerrank challenge Find Point */


//   let consider 'S' is the symmetric of the point 'P' about 'Q'.
//   so Q is the center of the segment [SP]. 'S'-------'Q'------'P'
//   then: Xq = (Xs + Xs) / 2 => Xs = 2Xq - Xp
//   then: Yq = (Ys + Ys) / 2 => Ys = 2Yq - Yp
//   our point is : 'S'[Xs, Ys]
function symmetricPoint(p, q) {
    return [2*q[0] - p[0], 2*q[1]  - p[1]]; 
}




// ----------------------------------




/* Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs!*/



function oddCount(n){
    // your code here
    let counter = 0
    for (let i = 0; i < n; i++) {
      if (i % 2 !== 0) {
        counter += 1
      } else {
        continue
      }
    }
    return counter
}
  
  
const oddCount = n => Math.floor(n/2) ;  

function oddCount(n){
    return Math.floor(n/2);
}




// ----------------------------------




/*Write a simple function that takes as a parameter a date object and returns a boolean value representing whether
the date is today or not.

Make sure that your function does not return a false positive by just checking just the day.*/


function isToday(date) {
    //Code goes here.
    return  new Date().toDateString() === date.toDateString()
}
  

function isToday(date) {
    //Code goes here.
    // because Date() When called as a function, returns a string representation of the current date and time, exactly as new Date().toString() does.
    return   Date().slice(0, 15) === date.toDateString()
}
  



// ----------------------------------




// This code does not execute properly. Try to figure out why.



function multiply(a, b){
    return a * b
}
  
multiply = (a, b) => a * b;
