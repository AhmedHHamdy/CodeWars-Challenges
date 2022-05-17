/*
6kyu
--> Find The Parity Outlier
You are given an array (which will have a length of at least 3,
but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
*/



function findOutlier(integers){
    //your code here
    let arr = []
    let newArr= []
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        arr.push(integers[i])
      } else if (integers[i] % 2 === 1 || -1) {
        newArr.push(integers[i])
      }
    }
    
    if (arr.length === 1) return arr[0]
    else if (newArr.length === 1) return newArr[0]
}


// function findOutlier(int){
//   var even = int.filter(a=>a%2==0);
//   var odd = int.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }


// function findOutlier(int){
//   var evens=[],odds=[];
//   int.forEach(function(num){num% 2 !=0? odds.push(num):evens.push(num) });
//   return odds.length>1? evens[0]: odds[0];
// }


// function findOutlier(integers){
//   return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
// }
// function even(num){
//   return (num % 2 == 0);
// }
// function odd(num){
//   return !even(num)
// }