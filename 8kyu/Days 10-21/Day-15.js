/*
--> Vowel Count
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
*/



function getCount(str) {
    let arr = ["a", "e", "i", "o", "u"]
    // enter your magic here
    return str.split('').reduce((count, v) => (arr.includes(v)) ? count + 1 : count, 0)
}


// function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
// }

// ------------------------

/*
ou are a barista at a big cafeteria. Normally there are a lot of baristas,
but your boss runs a contest and he told you that, if you could handle all 
the orders with only one coffee machine in such a way that the sum of all the
waiting times of the customers is the smallest possible, he will give you a substantial raise.

So you are the only barista today, and you only have one coffee machine that can brew one coffee at a time.
People start giving you their orders.
Let's not think about the time you need to write down their orders, 
but you need 2 additional minutes to clean the coffee machine after each coffee you make.

Now you have a list coffees of the orders and you write down next 
to each of the orders the time you need to brew each one of those cups of coffee.

Task:

Given a list of the times you need to brew each coffee, return the minimum total waiting time.
If you get it right, you will get that raise your boss promised you!

https://www.codewars.com/kata/6167e70fc9bd9b00565ffa4e/train/javascript
*/

function barista(coffees){
    let sum = 0;
    coffees = coffees.sort(function(a, b) {return a - b;});
    coffees.reduce(
      (previousValue, currentValue, currentIndex) => {
        var waitTime = currentIndex < 1 ? currentValue : previousValue + currentValue + 2;
        sum += waitTime;
        return waitTime;
      }, 0);
    return sum;
}
  