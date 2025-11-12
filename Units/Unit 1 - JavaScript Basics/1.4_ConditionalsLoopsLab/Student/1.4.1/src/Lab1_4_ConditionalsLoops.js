/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts

let age = 15;
if(age <= 16) {
    console.log("Child discount");
} else if(age >= 65) {
    console.log("Senior discount");
} else {
    console.log("No discount");
}

let vpoints = 1200;
let cart = 245
let total = cart;

if(vpoints >= 5000) 
    total = cart * 0.8
    elseif (vpoints >= 2000) {
        total = cart * 0.85
    } elseif (vpoints >= 1000) {
        total = cart * 0.95
    } else {
        total = cart 
    }

    console.log(`Your total is: $${total} with a discount of ${100 - (total/cart) * 100}%!`);

// TODO 2: Nested if with two numbers

let number1 = 10;
let number2 = 20;

if(number1 > number2) {
    console.log("numbers are equals");
} else {
    if(number1 > number2) {
        console.log("number1 is greater");
         else{
            console.log("number2 is greater");
         }
    }
}

// TODO 3: Switch statement for language greeting

let language = "french";

switch(language) {
    case "french":
        console.log("Bonjour");
        break;
    default:

console.log("Hello");
break;
}

let model = "prompt";(enter model of car)

switch(model) {
    Ford 

    case " focus"
    case " F-150"
    case " mustang"

console.log(your $(model) is a ford)

    Tesla 
case "tesla model s"
case "tesla model y"
case "tesla model 3"

console.log(your $(model) is a tesla)
break;
    porsche
    case "911"
    case "carrera"
    case "taycan"
    case "918 spyder"


    audi
    case "s5"
    case "r8"
    case "quattro"
    case "rs7"
}
// TODO 4: While loop (1 to 10)
let count = 1;
while(count <= 10) {
    console.log("VALUE", count);
    count++;
}

let count2 = 10;
while(count2 >= 1) {
    console.log("VALUE", count2);
    count2--;
}

// TODO 5: Do..while loop (1 to 5)
let i = 1;
do(
    console.log("VALUE", i);
    i++;

)
// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
for(let i = 1; i <= 20; i++) {
    if(i === 10) {
        console.log("ten");
    }
// TODO 7: Even/Odd loop (1 to 20)
for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0)
// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
// - Skip multiples of 3 in even/odd loop
