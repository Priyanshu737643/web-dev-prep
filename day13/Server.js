//* Common JS

//* Creating an HTTP server using HTTP module

// import { createServer } from "node:http";
// const server = createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World");
// });

// server.listen(3000, "127.0.0.1", () => {
//   console.log("Port Listening to 127.0.0.1:3000");
// });

//* CommonJs and ES6 modules are 2 different ways to organize and share code in JavaScript

//? ECMA Script : It is the official specification (standard) that defines how JavaScript language should work

//? Common JS : Older module system mainly used in Node JS

//? require is used to import code
// const add = require("./function");

// const { add, sub, expo, mul, div } = require("./function");
// console.log(add(5, 2));
// console.log(sub(5, 2));
// console.log(expo(5, 2));
// console.log(mul(5, 2));
// console.log(div(5, 2));

// const math = require('./function');
// console.log(math.add(5, 2));
// console.log(math.sub(5, 2));
// console.log(math.mul(5, 2));

// const { add, sub, mul } = require("./function");
// console.log(add(5, 2));
// console.log(sub(5, 2));
// console.log(mul(5, 2));

// const Person = require("./function");
// const p1 = new Person("Priyanshu");
// p1.greet();

// const { log } = require('console');
// log("Hello World");

//* ES6 Module

// import { PI, add, expo } from "./function.js";
// console.log(PI);
// console.log(add(5, 2));
// console.log(expo(5, 2));

// import greet, {PI, add, expo, sub, div} from "./function.js";
// greet();
// console.log(PI);
// console.log(add(5, 2));
// console.log(expo(5, 2));
// console.log(sub(5, 2));
// console.log(div(5, 2));

// import { log, warn, error } from "console";
// log("Hello world");


//* Module Wrapper

// console.log(`File Name: ${__filename}`);
// console.log(`Directory Name: ${__dirname}`);

// (function () {
//   const a = 10;
//   const b = 20;
// });

//* Module Wrapper
//? Module Wrapper is only available in Common Js module not in ES6
// (function (exports, require, module, __filename, __dirname){
// console.log(`FileName: ${__filename}`);
// console.log(`FileName: ${__dirname}`);
// })

//? Module Wrpper let every file gets its own scope
// console.log(`File Name: ${__filename}`);
// console.log(`Directory Name: ${__dirname}`);
// console.log(`Require: ${require}`);
// console.log(`Module: ${module}`);
// console.log(`Exports: ${exports}`);


//* File System

const fs = require("fs");
// works in asyncronous manner
fs.writeFile("logs.txt", "This is the first text ✌️\n", (error) => {
    console.log(` Error: ${error}`);
});
fs.readFile("logs.txt", 'utf-8', (error, data) => {
    if (error) {
        console.log(` Error: ${error}`);
    }
    console.log(data);
});

//? UTF-8 is one of the several character encoding.
//? A character encoding defines how characters(letters, numbers, symbols, emojis ✌️, etc) are represented as bytes in our computer.

// works in syncronous manner
fs.writeFileSync("logs.txt", "This is a new text ✌️");
fs.readFileSync("logs.txt", "utf-8", (data) => {
  console.log(data);
});