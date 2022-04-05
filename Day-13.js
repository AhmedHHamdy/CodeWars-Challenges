/*
Usually when you buy something, you're asked whether your credit card number,
phone number or answer to your most secret question is still correct. However, 
since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"

https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
*/

function maskify(cc) {
    let newArr = []
    for (let i = 0; i < cc.length-4; i++) {
      newArr.push('#')
    }
    return newArr.concat(cc.slice(-4)).join('')
}


// return masked string
// function maskify(cc) {
//     return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
// }



// ------------------------

