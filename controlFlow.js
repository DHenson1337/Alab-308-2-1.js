/*
/   Scope will be covered more thoroughly shortly, but in order to talk about code blocks...
/   Scope defines where variables and functionality can be accessed or are valid
*/

/*
    ==========  Code Blocks ==========
*/
//  ***** These (code blocks) describe code that are within the same scope
//          Usually delimited by a pair of curly braces {}
//          Usually combined with other JS functionality like conditionals or functions or loops

// ***** Because these variables are create at the top level of the script, they are valid at all levels of the script
let x = 10;
let y = 5;
console.log("x is:", x, "and y is:", y);
// this is showing that z is undefined
// console.log("z is:", z);

{
    // ***** if I declare z in here, it is only valid in here
    //          out of these {}, z does not exist
    let z = x + y;
    console.log("x is:", x, "and y is:", y);
    console.log("z is:", z);
    x = 7;
}

console.log("x is:", x, "and y is:", y);
// this z is also not defined because it is out of the block that z was defined in 
// ***** you get the error that z is not defined because it was only valid in the {}
//      once I leave those {} z is destroyed
// console.log("z is:", z);

/*
    ========== Scope    ==========
/   ***** Global Scope - valid everywhere within the script - (so if you use var instead of let)
            but we want to avoid this because it creates the potential for unintentionally overwriting variables later
/   ***** Module Scope - we'll learn more about this later
/   ***** Function Scope - we'll talk about this when we learn about functions (soon)
/   ***** Block Scope - valid only within the BLOCK OF CODE that it was created in {}
*/

// This code from the notes was modified from mdn code that can be found here: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// note that I had to change the variable name from x to ex because I already have a variable named x
// look at the error that you get if you keep that x variable name

console.log('======================================================');
{
    let ex = 1;
    {
        let ex = 2;
        console.log(ex);
    }
    console.log(ex);
}
console.log(ex);

console.log('======================================================');
{
    var ex = 1;
    {
        var ex = 2;
        console.log(ex);
    }
    console.log(ex);
}
console.log(ex);

/*
        ========== Control Flow and Conditionals
*/
// ***** There are a few different options for conditionals
//          if (condition is true) { code to execute }
//          if (condition is true) { code to execute } else { alternative code }
//              YOU CAN ONLY EXECUTE ONE SET OF {}
//          if (condition is true) { code to execute } else if ( new condition is true ) { different code } else { alternative code }
//              YOU still CAN ONLY EXECUTE ONE SET OF {}
// ***** Remember = is assignment and == or === are both checking for equality of the values
//          you do not need {} if there is only one line, but you do need them any time there is more than one line of code that you 
//              want to execute if the condition is true
//          using {} can help with readability while you are learning


// ***EXample of if statements


x ='11';
console.log('if but no else statement');
if (x == 10){
    console.log ('x is 10');
    console.log(x,"is an acceptable answer");
}

console.log('');
if (x == 10){
    console.log('x is 10');
} else {
    console.log('False input detected eliminate');
}
console.log('Regardless if you lived or died, this will print');

console.log('');

/* True or False If statmenets */
let isRaining = true;
if (isRaining){
    console.log("RUN! It's actually Acid rain. OMG someone save me");
} else{
   console.log("It's safe to go outside."); 
}

let newVar = "Test";
console.log(newVar);

//
let num = -5;
if (num >= 0){
    console.log('num is a positive number');
} else {
    console.log('not only is num negative and my day is ruined!');
}

let age = 17;

console.log('');

//Checks if age is 18 or older
if (age >= 18){
    console.log('User is 18 or older. . .I think, you pass');
} else {
    console.log('Access Denied');
}

/*  ===================Nested if/else statements */
console.log('');

let ishungry = false, hasGroceries = true;
if (ishungry) {
console.log("Hi hungry am Dad")
if (hasGroceries){
    console.log("Make fud");
}
} else {
console.log("Am not hungry DAD!");
}

/* ============================Chaining if/else Statemens ===========================
    ************ Order matters when you are chaining
*/
console.log("");

let temp = -5;
 if (temp >= 100){
    console.log('Water is boiling, I think??? I dont know celcius'); 
} else if (temp > 0) {
    console.log("It's just normal water.");
}
else {
    console.log("That water is cold, it's time to 'Let it go' ");
}

 let num1 =69;

 if (num1 >= 0){
console.log(num1, " Is looking pretty positve");
 }
 else if(num1 > 100){
    console.log(num1, " Wow over 100 huh?, over achiever much...");
 }
else if(num1 >=0 && num1 <= 100) {
    console.log(num1, " is posotive but its less than 100 shame");
}
else {
    console.log(num1, "ewww did you really enter a negative number");
}

console.log("");
if (num1 >= 90) {
    console.log("You got an A, am so proud of you")
}
else if(num1 >= 80) {
    console.log("B is ok, I guess.")
} else{
    console.log("I have no son, get out!");
}

// one way that we use mod is to see if things are odd or even
let numCheck;
if (numCheck % 2 === 0){
    console.log("number is even");
} else {
    console.log("number is odd");
}

/*      ============================ switch statements ==================== 
 */
// ********* switch is a keyword (reserved word) that tells us we're about to do a specific kind of statement

let x1 = 5;
let x2 = 4;
let operand = 'oWo';

console.log("============================");
switch (operand) {
    case "+" :
        console.log(x1 + x2);
        break;
    case "-":
        console.log(x1 - x2);
        break;
        default:
            console.log("Invalid operand");
            break;
            case "oWo":
                console.log("...This is a calculator, why would you enter that. GOSH!");
                break;
}

//Seasons
let currSeason = 'hmmm'
switch (currSeason) {
    case 'winter':
        console.log("It's so cold, must be winter");
        break;
    case 'spring':
        console.log("My crops are growing, must be spring");
        break;
    case 'fall':
        console.log("Help, i've fallen and can't get up. It's fall....also you need life alret");
        break;
    case 'summer':
        console.log("Who though this way a good idea for a season");
        break;
    case 'dunno':
        console.log("The end of the world");
        break;
        default:
            console.log("quack");
}

x =10;
let isTen;

if (x == 10){
    isTen = true;
} else {
    isTen = false;
}
console.log();

(x == 10) ? isTen = true : isTen =false;
console.log("isTen after ternary", isTen);


===== Try/Catch =====
*/
// *****    try { something that could result in an error that you can't fix } catch { do something if there is an error } finally { always do this }
x= 10;
try {
    if (x<0) {
        console.log("negative!")
    } else {
        throw "Error - I don't know what I'm doing!";
    }
} catch (error) {
    console.log(error);
} finally {
    console.log('this runs if there is an error or if there is no error')
}