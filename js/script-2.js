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

    //12 Prompt twice for number and compare for largest
/*
var firstNum = prompt("Please provide a number");
var secondNum = prompt("Please provide another number");
function largestNum() {
    if (firstNum > secondNum) {
        window.console.log(firstNum);
    } else {
        window.console.log(secondNum);
    }
}
largestNum();
*/

    //13 Store student marks and display student with letter grade
/*
var stuUrsula = 80;
var stuPaul = 77;
var stuHenry = 88;
var stuTabitha = 95;
var stuLucy = 68;

function gradeUrsula() {
    if (stuUrsula <=59){
        window.console.log("Ursula F");
    } else if (stuUrsula <=69) {
        window.console.log("Ursula D");
    } else if (stuUrsula <= 79) {
        window.console.log("Ursula C");
    } else if (stuUrsula <= 89){
        window.console.log("Ursula B");
    } else {
        window.console.log("Ursula A");
    }
}

function gradePaul() {
    if (stuPaul <=59){
        window.console.log("Paul F");
    } else if (stuPaul <=69) {
        window.console.log("Paul D");
    } else if (stuPaul <= 79) {
        window.console.log("Paul C");
    } else if (stuPaul <= 89){
        window.console.log("Paul B");
    } else {
        window.console.log("Paul A");
    }
}

function gradeHenry() {
    if (stuHenry <=59){
        window.console.log("Henry F");
    } else if (stuHenry <=69) {
        window.console.log("Henry D");
    } else if (stuHenry <= 79) {
        window.console.log("Henry C");
    } else if (stuHenry <= 89){
        window.console.log("Henry B");
    } else {
        window.console.log("Henry A");
    }
}

function gradeTabitha() {
    if (stuTabitha <=59){
        window.console.log("Tabitha F");
    } else if (stuTabitha <=69) {
        window.console.log("Tabitha D");
    } else if (stuTabitha <= 79) {
        window.console.log("Tabitha C");
    } else if (stuTabitha <= 89){
        window.console.log("Tabitha B");
    } else {
        window.console.log("Tabitha A");
    }
}

function gradeLucy() {
    if (stuLucy <=59){
        window.console.log("Lucy F");
    } else if (stuLucy <=69) {
        window.console.log("Lucy D");
    } else if (stuLucy <= 79) {
        window.console.log("Lucy C");
    } else if (stuLucy <= 89){
        window.console.log("Lucy B");
    } else {
        window.console.log("Lucy A");
    }
}

gradeUrsula();
gradePaul();
gradeHenry();
gradeTabitha();
gradeLucy();
*/

    //14	Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.
var listForLoop = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for (var x in listForLoop) {
	window.console.log(evenOrOdd(listForLoop[x]));
}
Number.isFinite(parseFloat(n));
function evenOrOdd() {
    if (n % 2 == 0) {
        window.console.log("even");
    } else if (Math.abs(n % 2) == 1) {
        window.console.log("odd");
    }
}
/*
function isEven(n) {
   return n % 2 == 0;
}
function isOdd(n) {
   return Math.abs(n % 2) == 1;
}
*/















