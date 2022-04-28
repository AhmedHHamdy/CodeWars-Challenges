/*
--> Odd March Bits 8 bits
Odd bits are getting ready for Bits Battles.

Therefore the n bits march from right to left along an 8 bits path. 
Once the most-significant bit reaches the left their march is done. Each step will be saved as an array of 8 integers.

Return an array of all the steps.

1 <= n <= 8

NOTE: n != 0, because n represents the number of 1s.

Examples
This resembles a simple 8 LED chaser:

n = 3

00000111
00001110
00011100
00111000
01110000
11100000
n = 7

01111111
11111110

https://www.codewars.com/kata/58ee4db3e479611e6f000086/train/javascript
*/




function bitMarch (n) {
    let arr = []
      for (let i = 7; i >= n-1; i--) {
      let result = [0, 0, 0, 0, 0, 0 ,0, 0]
      for (let j = 0; j < n; j++) {
        result[i-j] = 1
      }
      arr.push(result)
    }
    return arr
} 
  


// -------------------------
