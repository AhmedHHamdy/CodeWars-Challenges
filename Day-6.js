/*
--> Exclamation marks series #2: Remove all exclamation marks from the end of sentence

Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"*/


function remove (string) {  
    arr = string.split("")
    while (arr[arr.length-1] === "!") {
      arr.pop()
    }
    return arr.join('')
}




// ---------------------

/*
--> ASCII Total
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/


function uniTotal (string) {
    // total up dem unicodes!
    let sum = 0
    for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i)
    }
    return sum
}


// const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);


// ---------------

/*
--> Fake Binary
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/


function fakeBin(x){
    let arr = x.split('')
    return arr.map((x, i) => (x < 5) ? arr[i] = '0' : arr[i] = '1' ).join('')
}

// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

// --------------


/*
--> Rock Paper Scissors!
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

const rps = (p1, p2) => {
    if (p1 === 'rock' && p2 === 'scissors' ) {
      return 'Player 1 won!'
    } else if (p2 === 'rock' && p1 === 'scissors') {
      return 'Player 2 won!'
    } else if (p2 === 'rock' && p1 === 'scissors') {
      return 'Player 2 won!'
    } else if (p1 === 'paper' && p2 === 'scissors') {
      return 'Player 2 won!'
    } else if (p2 === 'paper' && p1 === 'scissors') {
      return 'Player 1 won!'
    } else if (p1 === 'rock' && p2 === 'paper') {
      return 'Player 2 won!'
    } else if (p2 === 'rock' && p1 === 'paper') {
      return 'Player 1 won!'
    } else {
      return 'Draw!'
    }
};
  



// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//     if (p2 === rules[p1]) {
//       return "Player 1 won!";
//     }
//     else {
//       return "Player 2 won!";
//     }
// };



// --------------