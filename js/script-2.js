    //1    Prompt for number, and display absolute version in console window
/*
var chooseNumber = prompt("Please enter a number");
window.console.log(Math.abs(chooseNumber));*/

    //2     Prompt for decimal, round, and display in console window
/*var decimalNum = prompt("Please choose a decimal number");
window.console.log(Math.round(decimalNum));*/

    //3     Prompt for decimal, round down, and display in console window
/*var decimalNum = prompt("Please choose a decimal number");
window.console.log(Math.floor(decimalNum));*/

    //4 Prompt for 5 numbers, with comma in between. Store variable. Then find and display largest and smallest number in console window.
/*

var listOfNum = prompt("Please provide 5 numbers seperated by commas"); 
var a = +(listOfNum.charAt(0));
var b = +(listOfNum.charAt(2));
var c = +(listOfNum.charAt(4));
var d = +(listOfNum.charAt(6));
var e = +(listOfNum.charAt(8));

window.console.log(Math.max(a,b,c,d,e));
window.console.log(Math.min(a,b,c,d,e));
*/

    //5 Prompt for number; display square root in console window
/*
var numForRoot = prompt("Please provide a number");
window.console.log(Math.sqrt(numForRoot));
*/
/*-----------------Part 2-2------------------*/

    //6 Display the current date in console window
/*
var d= new Date();
window.console.log(d.toDateString());
*/

    //7	Display day of Month
/*
var d = new Date();
window.console.log(d.getDate());
*/

    //8 Get month name and display in console window
/*
var monthByName = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var d = new Date();
window.console.log(monthByName[d.getMonth()]);
*/

    //9 test whether it'a a weekend
/*
var isWeekend = [true, false, false, false, false, false, true];
var d = new Date();
window.console.log(isWeekend[d.getDay()]);
*/

    //10 Display yesterday's day of the week
/*
var dayByName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var d = new Date();
window.console.log(dayByName[d.getDay()-1]);
*/

    //11 Display first letter from the current day of the week
/*
var dayByName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
var firstLetter = dayByName[d.getDay()];
window.console.log(firstLetter.charAt(0));
*/
/*-----------------Part 2-3------------------*/

//12 Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.











