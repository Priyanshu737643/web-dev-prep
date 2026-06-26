// JavaScript is a dynamic language

let num1 = 12;
let num2 = 15;
// ${variable_name} - Interpolation
console.log(`Num1 is ${num1}\nNum2 is ${num2}\nThe sum is ${num1 + num2}`);

// declaring
let num3;
// initializing
num3 = 20;
// declaring and initializing
let num4 = 25;

const PI = 3.14;

var num5 = 10;
var API_KEY = "1232424sfvdd";
var API_KEY = "1343fvdgnrnd";

// Hoisting  (calling variable before intialization)
// var - Hoisted
console.log(num);
var num = 100; // undefined
console.log(num);

// let, const = Not Hoisted
// TDC - Temporal Dead Zone - the period between when let and const is hoisted into the memory and when the execution exists but cannot be accepted.
// console.log(newNum);
// let newNum = 100; // reference error
// console.log(newNum);

// "use strict"
// var num10 = 10;  // will create a variable
// num20 = 20;  // create a property on the global object(window)

let uname = prompt("Enter Name");
console.log("Name: ", uname);

//* for loop  for(initialization, condition, updation)
// let sum = 0;
// for (let index = 1; index <= 5; index++){
//     sum += index;
// }
// console.log(sum);

//* while loop
// var num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

//* do-while loop
// let num = 0;
// do {
//   console.log(num++);
// } while (num > 10);


//* Operators