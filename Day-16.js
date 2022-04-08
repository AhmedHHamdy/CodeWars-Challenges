/*
--> Narcissistic Numbers
A Narcissistic Number is a number of length n in which the sum of 
its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where n = 3 (number of digits in 153)
13 + 53 + 33 = 153

Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) 
which returns whether or not i is a Narcissistic Number.

https://www.codewars.com/kata/56b22765e1007b79f2000079/train/javascript
*/


function isNarcissistic(n){
    //your code here
    let arr = String(n).split('')
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]) ** arr.length
    }
    if (sum === n) return true
    else return false
}


function isNarcissistic(n) {
    return n === n.toString().split('').reduce((res, num, index, arr) => res += Math.pow(num, arr.length), 0)
}

// ----------------------------------------


