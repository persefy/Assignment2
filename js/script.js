//1 Prompt for name, and display character count
/*var yourName = prompt("What is your name?");
alert(yourName.length);*/

//2  Prompt for name, make user guess a number, and display character at that number
/*
var yourName = prompt("What is your name?");
var lastNumGuess = yourName.length;
var chosenNumber = prompt("Choose a number between 1 and " + lastNumGuess);
alert(yourName.charAt(chosenNumber));
*/

//3 Promt user for first name and last name; then concatenate
/*
var firstName = prompt("What is your first name?");
var lastName = prompt("What is last name?");
alert("Your name is: " + firstName + " " + lastName + ".");
*/

//4 Store string, and then find and display the index of "fox"
/*
var aPhrase = "The quick brown fox jumps over the lazy dog";
alert(aPhrase.indexOf("fox"));
*/

//5  Store string, and then find and display the last instance of "fox"
/*var aPhrase = "The quick brown fox jumps over the lazy fox";
alert(aPhrase.lastIndexOf("fox"));*/

//6 Store string, prompt for full name, and display replaced text for name
/*var aPhrase = "The quick brown fox jumped over the lazy dog";
var yourName = prompt("What is your full name?");
alert(aPhrase.replace("the lazy dog", yourName));*/

//7	Store string, prompt for word, search for word, and then display result
/*var aPhrase = "The quick brown fox jumps over the lazy dog";
var guess = prompt("Give me a word");
alert(aPhrase.search(guess));*/

//8 Store string, extract words, and display in uppercase within alert 
/*
var old_string = "The quick brown fox jumps over the lazy dog";
var new_string = old_string.slice(31, 43);
alert(new_string.toUpperCase());
*/

//9 Store string; trim whitespace and display using lowecase
/*
var aPhrase = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
var aPhraseTrimmed = aPhrase.trim();
alert(aPhraseTrimmed.toLowerCase());
*/

//10 Store string, and show within alert with capitalized first letter
var aPhrase = "the quick brown fox jumps over the lazy dog";
var aPhrase2 = aPhrase[0].toUpperCase();
var aPhrase3 = aPhrase.replace(aPhrase[0], aPhrase2);
alert(aPhrase3);




