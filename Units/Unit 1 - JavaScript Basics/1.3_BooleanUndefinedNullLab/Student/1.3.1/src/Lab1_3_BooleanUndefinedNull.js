/* 
 Lab 003 – Data Types in JavaScript (Boolean, Undefined, Null & Immutability)
*/

// TODO 1: Booleans
// - Create isStudent = true, hasLicense = false
node src/Lab1_3_BooleanUndefinedNull.js
// - Print results of true || false, true && false, !true
isStudent = true;
hasLicense = false;

true  || false;
true  && false;
!true;
// TODO 2: Short-circuit evaluation
 false && (5 > 2);

 true    || (2 > 5);

 let grade; = 77;

// TODO 3: Undefined
// - Declare variable grade and print it
let grade; 

// TODO 4: Null
let city = null;
city = "miami";
print(city);
// - Create city = null, print it
// - Reassign city = "Miami" and print again

// TODO 5: Immutability
let word = "hello";
word[0] = "H";

word = "hello";
// - Create word = "hello"
// - Try word[0] = "H", print word
// - Reassign word = "Hello" and print again

// 🚀 Stretch Goals
// - Check if number is between 10 and 20 using &&
// - Check if city is "Miami" or "Berlin" using ||
  
what is the difference between null and undefined in javascript
when you put null its like a placeholder for no value 
undefined is something that doesnt have anassigned value yet s