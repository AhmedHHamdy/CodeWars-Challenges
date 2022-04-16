/*
--> Capitalization and Mutability
Your coworker was supposed to write a simple helper function to capitalize a string 
(that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work.
Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. 
The string lengths will be from 1 character up to 10 characters, but will never be empty.
https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/javascript
*/

function capitalizeWord(word) {
    let arr = word.split('')
    arr.splice(0, 1, arr[0].toUpperCase())
    return arr.join('');
}


// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.slice(1);
// }


// const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());

// ----------------------------



/*
--> Find the vowels
We want to know the index of the vowels in a given word, for example,
there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript
*/



  


function vowelIndices(word){
//your code here
let vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y']
let arr = [...word.toLowerCase()]
let newArr = []
arr.forEach((v, i) => (vowels.includes(v)) ? newArr.push(i+1) : null )
return newArr
}
  