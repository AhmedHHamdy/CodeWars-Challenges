/*
7kyu
-->  Disemvowel Trolls
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
*/



function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let newArr = []
    str.split('').map((x, i) => !(vowels.includes(x.toLowerCase())) ? newArr.push(x) : x).join('')
    return newArr.join('')
  
  }
  
  
  
  // function disemvowel(str) {
  //   var vowels = ['a', 'e', 'i', 'o', 'u'];
    
  //   return str.split('').filter(function(el) {
  //     return vowels.indexOf(el.toLowerCase()) == -1;
  //   }).join('');
  // }