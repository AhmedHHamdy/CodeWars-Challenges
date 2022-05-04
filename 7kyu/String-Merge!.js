/*
7kyu
--> String Merge!
Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

Examples
("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"

https://www.codewars.com/kata/597bb84522bc93b71e00007e/train/javascript
*/




function stringMerge(string1, string2, letter){
    // Add code here :)
    let arr = [string1, string2, letter]
    let str = ''
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 1; j++) {
        if (i == 0) {
          str += arr[i].slice(0, arr[i].indexOf(letter) + 1)
        } else if ( i == 1) {
          str += arr[i].slice(arr[i].indexOf(letter) + 1)
        }
      } 
    }
    return str
}




// stringMerge = (a, b, l) => a.slice(0, a.indexOf(l)) + b.slice(b.indexOf(l));