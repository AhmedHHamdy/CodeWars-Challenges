
/*
--> Simple Fun #154: Zero And One
You have a string that consists of zeroes and ones. 
Now choose any two adjacent positions in the string: if one of them is 0, and the other one is 1, 
remove these two digits from the string.

Return the length of the resulting (smallest) string that you can get after applying this operation multiple times?

Note: after each operation, the remaining digits are separated by spaces and thus not adjacent anymore - see the examples below.

Examples
For "01010" the result should be 1:

"01010"  -->  "  010"  -->  "    0"
For "110100" the result should be 2:

"110100"  -->  "1  100"  -->  "1    0"

https://www.codewars.com/kata/58ad09d6154165a1c80000d1/train/javascript
*/

function zeroAndOne(s) {
    let cnt = 0;
    for (let i=0; i<s.length; i++){
      if ( (s[i]=='0' && s[i+1]=='1') || (s[i]=='1' && s[i+1]=='0') ) i++; 
      else cnt++;
    }
    return cnt;
}



// -----------------------


