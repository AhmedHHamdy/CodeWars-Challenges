/*
--> Find numbers which are divisible by given number
Complete the function which takes two arguments and returns all numbers
which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
*/

function divisibleBy(numbers, divisor){
    return numbers.filter(x => x % divisor === 0)
}


// --------------------------

/*
--> Is the string uppercase?
Is the string uppercase?
Task
Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any 
lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/

String.prototype.isUpperCase = function(s) {
    // your code here
    return this.toUpperCase() === this.toString()
}


// ------------------

/*
--> Welcome!
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks 
it would be great to welcome visitors to the site in their own language. 
Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). 
The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' 
(always a string), and returns a greeting - if you have it in your database.
It should default to English if the language is not in the database, or in the event of an invalid input.
*/

function greet(language) {
    let data = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }

    return data[language] || data['english']
}

