//* Objects
// const obj1 = {
//     // key: value
//     fname: "John",
//     lname: "Doe",
//     // this: refers to the object that is executing the current funtion
//     getFullName() {
//         return `${this.fname} ${this.lname}`;
//     }
// }
// console.log(obj1);
// console.log(obj1.getFullName());


//* Inherit properties from obj1 - not safe (if given 'null')
// const obj2 = {
//     __proto__: obj1,
// }
// console.log(obj2.getFullName());

//* Create new Object Inheritance
// const obj2 = Object.create(obj1);  // Create a new Object instance
// console.log(obj2);  // Empty Object with properties of obj1 inherited
// obj2.fname = "Ayush",
// obj2.lname = "Kumar",
// console.log(obj2);
// console.log(obj2.getFullName());


/*
obj1 = {
    fname: "John",
    lname: "Doe",
    __proto__: {Object}
}
*/

/*
obj2 = {
    __proto__: obj1
}
*/


// console.log(obj1);
// console.log(obj1.fname);
// console.log(obj1.lname);

// obj1.age = 10;
// console.log(obj1.age);
// console.log(obj1);

// obj1 = [1, 2, 3, 4, 5];  //! TypeError = Assignment to constant variable.
// console.log(obj1);


// Prototype: is a property of functions (specially constructor functions and classes)
// __proto__: is a property of objects that points to the Object prototype.

// const str1 = "abc";
// console.log(str1.__proto__);


//* Wrapper Classes: String, Number, Boolean, Object, Array
// const str1 = "abc";
// console.log(str1.__proto__);
// const num1 = 10;
// console.log(num1.__proto__);
//? Prototype of any instance will be an Object, and prototype of the Object will be null

//* -------------------------------------------------------
//* Prototypical Inheritance

// const obj1 = {
//     fname: "John",
//     lname: "Doe",
//     getFullName() {
//         return `Name: ${this.fname} ${this.lname}`
//     },
// }

// const obj2 = {
//     age: 24,
//     occupation: "Frontend Dev",
//     getAge() {
//         return `Age: ${this.age}`
//     },
//     getOccupation() {
//         return `Occupation: ${this.occupation}`
//     },
//     __proto__: obj1,
// }

// const obj3 = {
//     __proto__: obj2,
// }

// console.log(obj1.fname);
// console.log(obj2.getAge());
// console.log(obj2.getOccupation());
// console.log(obj3.getFullName());

//* ------------------------------------------------------

//* Array

// const arr1 = [1, 2, 3, 4, 5, "Hello"];
// console.log(arr1);

//? Using Array constructor
// const arr1 = new Array(1, 2, 3, 4, 5);
// console.log(arr1);

//? Create an array with fixed length
// // const arr1 = new Array(5).fill(1);
// const arr1 = new Array(5);
// for (let i = 0; i < arr1.length; i++) {
//     arr1[i] = i+1;
    
// }
// arr1[5] = 6;
// console.log(arr1);

let num = 10;
console.log("Number: ", num);

function greet() {
    console.log("Hello");
}
greet();

//* local Execution Context
//* Global Execution Context

//* JavaScript Engine - is a program that reads Javascript code and execute it.
//? JavaScript is both interpreted and a compiled language

