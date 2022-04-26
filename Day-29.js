/*
--> Simple Fun #193: Moment Of Time In Space

You are given a moment in time and space. What you must do is break it down into time and space,
 to determine if that moment is from the past, present or future.

Time is the sum of characters that increase time (i.e. numbers in range ['1'..'9'].

Space in the number of characters which do not increase time (i.e. all characters but those that increase time).

The moment of time is determined as follows:

If time is greater than space, then the moment is from the future. 
If time is less than space, then the moment is from the past. Otherwise, it is the present moment.

You should return an array of three elements, two of which are false, 
and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.

Examples
For moment = "01:00 pm", the output should be [true, false, false].

time equals 1, and space equals 7, so the moment is from the past.

For moment = "12:02 pm", the output should be [false, true, false].

time equals 5, and space equals 5, which means that it's a present moment.

For moment = "12:30 pm", the output should be [false, false, true].

time equals 6, space equals 5, so the moment is from the future.

Input/Output
[input] string moment
The moment of time and space that the input time came from.

[output] a boolean array
Array of three elements, two of which are false, and one is true. 
The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.

https://www.codewars.com/kata/58c2158ec7df54a39d00015c/train/javascript
*/


function momentOfTimeInSpace(moment) {
    //coding and coding..
    let spaceCount = 0
    let time = moment.slice(0, 5).split('')
    time.splice(2, 1)
    let timeCount = time.reduce((sum, v) => sum + Number(v), 0)
    let space = moment.split('')
    
    for (let i = 0; i < space.length; i++) {
      if ( space[i] == ' '|| space[i].toLowerCase() !== space[i].toUpperCase() || Number(space[i]) <= 0 || space[i] == ':') {
        spaceCount++
      }
    }
    
    if (timeCount > spaceCount) {
      return [false, false, true]
    } else if (timeCount < spaceCount) {
      return [true, false, false]
    } else {
      return [false, true, false]
    }
}
  

// function momentOfTimeInSpace(moment) {
//     let time = 0, space = 0;
//     for(let c of moment) {
//       if('123456789'.includes(c)) {
//         time += c * 1;
//       }
//       else {
//         space += 1
//       }
//     }
//     return [time < space, time == space, time > space];
// }