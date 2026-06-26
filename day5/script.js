// console.log(typeof []); // object
// console.log("100" + 2); // 1002
// console.log("100" - 2); // 98
// console.log(typeof NaN); // NaN - Not a Number  = Number (output)
// console.log(Boolean([])); // true  =  because an empty array ([]) is considered a truthy value in JavaScript.

// let arr1 = [1, 2, 3];
// let arr2 = arr1; // copying address
// arr2[0] = 9;
// console.log(arr1[0]); // 9

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1]; // spread operator = spreads out each element of the array
// arr2[0] = 9;
// console.log(arr1[0]);

// console.log(typeof {}); // object

// let a = String(123);
// console.log(typeof a); // string

// console.log(parseInt("12abc"));  // 12  =  parseInt() only parse integer number

//* Functions

// function greetings(fname = "John", lname = "Doe") {
//   return `Good Morning ${fname} ${lname}`;
// }
// console.log(greetings("Abhi", "Gautam"));

// function display() {
//   console.log(arguments[2]);
// }
// display(10, 20, 30, 40, 50);

//* Arrow Function  =  Call back Function

// let greeting = (fname = "John", lname = "Doe") => {
//   return `Hello ${fname} ${lname}`;
// };
// console.log(greeting("Ayush", "Verma"));

// let display = (...args) => {
//   console.log(args);
// };
// display(10, 20, 30, 40, 50);

// let arr1 = [1, 2, 3];
// // let arr2 = [...arr1]; // [1,2,3]
// let arr2 = [arr1]; // it will create a array outside this array [1,2,3]
// console.log(arr2);

//* if-else

// let age = 2;
// if (age >= 18 && age <= 60) {
//   console.log("You are eligible for driving license");
// } else if (age > 60) {
//   console.log("Senior citizens are not eligible");
// } else {
//   console.log("You are not yet eligible");
// }

//* Ternary Operator

// let age = 20;
// let sol = age > 18 ? "Eligible" : "Not Eligible";
// console.log(sol);

//* DOM Manipulation (Document Object Model)
//? Using Id  - can pick only a single element
// document.getElementById("head1").textContent = "Updated Heading";
// document.getElementById("head1").innerHTML = "<i>Updated Heading 3</i>";
// document.getElementById("head1").innerText = "Updated Heading 2";

//? Using meta data
// document.title = "This is new Title";

//? Style
document.getElementById("para1").style.backgroundColor = "yellow";
document.getElementById("para1").style.color = "red";
document.getElementById("para1").style.fontSize = "20px";
