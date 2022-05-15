/*
6kyu
-->
Write a function that takes in a string of one or more words, and returns the same string,
but with all five or more letter words 
reversed (Just like the name of this Kata). Strings passed in will consist of only letters
and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
*/



function spinWords(string){
    //TODO Have fun :)
    let arr = string.split(' ')
    return arr.map((x, i) => (x.length >= 5) ? x.split('').reverse().join('') : x).join(' ')
    
}






