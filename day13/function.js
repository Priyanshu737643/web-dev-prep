//* Common JS

//* METHOD - 1

// function add(num1, num2) {
//   return num1 + num2;
// }

// function sub(num1, num2) {
//   return num1 - num2;
// }

// function mul(num1, num2) {
//   return num1 * num2;
// }

// function div(num1, num2) {
//   return num1 / num2;
// }

// function expo(num1, num2) {
//   return num1 ** num2;
// }

// module.exports = {
//   add,
//   sub,
//   expo,
//   mul,
//   div,
// };

//? module.exports is used to export the code
// module.exports = add;  // Common JS

// export default add();  // ES module

//* METHOD - 2
// const mul = (num1, num2) => {
//   return num1 * num2;
// };
// exports.mul = mul;

// //* METHOD - 3
// exports.add = (num1, num2) => num1 + num2;
// exports.sub = (num1, num2) => num1 - num2;

// //* Exporting classes
// class Person{
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// module.exports = Person;

//! Interview trick question
// exports = {
//   add(num1, num2) {
//     return (num1, num2);
//   },
// };
//* This will not work because we make exports point to the new object, while module.exports still points to the old one.
// exports -> new object
// module.exports -> old object


//* ES6 Module

//? named export
export const PI = 3.14;
export function add(num1, num2) {
    return num1 + num2;
}
export const expo = (num1, num2) => num1 ** num2;

let age = 24;
export { age };

//? default export
export default function greet() {
    console.log("Hello");
}

const subtract = (num1, num2) => num1 - num2;
const div = (num1, num2) => num1 / num2;


//? exporting multiple things together
export {
    // renaming
    subtract as sub,
    div,
}