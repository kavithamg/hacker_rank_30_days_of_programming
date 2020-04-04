var i = 4;
var d = 4.0;
var s = "HackerRank ";

var secondInt = parseInt(window.prompt("Enter integer number"));
var secondFloat = parseFloat(window.prompt("Enter float number"));
var secondString = window.prompt("Enter string");

// Print the sum of both integer variables on a new line.
console.log(i + secondInt);

// Print the sum of the double variables on a new line.
console.log(parseFloat(d + secondFloat).toFixed(1));

// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
console.log(s + secondString);