/*
--> Turn with a Compass
You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE"

https://www.codewars.com/kata/61a8c3a9e5a7b9004a48ccc2/train/javascript
*/


function direction(facing, turn){
    const arr = "N NE E SE S SW W NW".split(" ");
    return arr[(arr.indexOf(facing) + Math.floor(turn / 45) + 1080) % 8];
}
  

// ---------------------------


/*
--> ASCII Shift Encryption/Decryption
Ascii Shift Encryption/Decryption
The goal of this kata is to create a very simple ASCII encryption and decryption. 
The encryption algorithm should shift each character's charcode by the character's current index in the string (0-based).

The input strings will never require to go outside of the ASCII range.

Example:
  p | a | s | s | w | o | r | d # Plaintext
+ 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 # Shift (add)
  p | b | u | v | { | t | x | k # Ciphertext
The decryption should reverse this:

  p | b | u | v | { | t | x | k # Ciphertext
- 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 # Shift (subtract)
  p | a | s | s | w | o | r | d # Plaintext

https://www.codewars.com/kata/56e9ac87c3e7d512bc001363/train/javascript
*/

function asciiEncrypt(plaintext) {
    let arr = plaintext.split('')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      newArr.push(String.fromCharCode(plaintext.charCodeAt(i) + i))
    }
    return newArr.join('');
}
    
function asciiDecrypt(ciphertext) {
    let arr = ciphertext.split('')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      newArr.push(String.fromCharCode(ciphertext.charCodeAt(i) - i))
    }
    return newArr.join('');
}



// function asciiEncrypt(plaintext) {
//     return plaintext.split('')
//                     .map((letter, index) => String.fromCharCode(letter.charCodeAt(0) + index))
//                     .join('') 
// };
      
// function asciiDecrypt(ciphertext) {
//     return ciphertext.split('')
//                     .map((letter, index) => String.fromCharCode(letter.charCodeAt(0) - index))
//                     .join('') 
// };