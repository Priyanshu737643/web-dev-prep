//* JavaScript Memory Types:
//? 1. Stack Memory: Primitive datatypes, function calls, execution context - Code by Value.
//? 2. Heap Memory: Objects, Arrays, Functions, Dates, Maps, Sets, etc - Code by Reference.

//! Primitive types: Number, string, boolean, bigint, symbol, undefined, null.

//* Symbol
// Symbol()  - will create a unique symbol for each one (Not match) = false
// symbols are always unique

// let str1 = Symbol("abc");
// let str2 = Symbol("abc");
// console.log(str1 === str2);

//* bigint
// console.log(Number.MAX_SAFE_INTEGER);
// const num1 = 9007199254740991;  // number
// const num2 = 9007199254740992n;  // bigint
// console.log(typeof num1);
// console.log(typeof num2);

//* Date(year, month, day, hours, minutes, seconds, miliseconds)
// const myDate = new Date();
// console.log(myDate);

const box = document.getElementsByClassName("box");
// console.log(box); // return a HTML collection which is an array-like structure
// console.log(box.length);

//* traversing using for loop - I
// for (let i = 0; i < box.length; i++) {
//   box[i].style.width = "100px";
//   box[i].style.height = "100px";
//   box[i].style.border = "1px groove black";
//   box[i].style.borderRadius = "20px";
//   box[i].style.backgroundColor = "gray";
//   box[i].style.color = "white";
//   box[i].style.margin = "20px";
// }

//* traversing using for loop - II
// for (const item of box) {
//   item.style.width = "100px";
//   item.style.height = "100px";
//   item.style.border = "1px groove black";
//   item.style.borderRadius = "20px";
//   item.style.backgroundColor = "gray";
//   item.style.color = "white";
//   item.style.margin = "20px";
// }

//* traversing using for-each loop
// const boxArr = Array.from(box);
// boxArr.forEach((item) => {
//   item.style.width = "100px";
//   item.style.height = "100px";
//   item.style.border = "1px groove black";
//   item.style.borderRadius = "20px";
//   item.style.backgroundColor = "gray";
//   item.style.color = "white";
//   item.style.margin = "20px";
// });

//* getElementsByTagName()
// const spanTag = document.getElementsByTagName("span");
// console.log(spanTag);
// for (const element of spanTag) {
//   element.style.fontSize = "30px";
//   element.style.backgroundColor = "green";
//   element.style.color = "greenYellow";
// }

// const pTag = document.getElementsByTagName("p");
// console.log(pTag);
// for (const element of pTag) {
//   element.style.fontSize = "30px";
//   element.style.backgroundColor = "green";
//   element.style.color = "greenYellow";
// }

//* document.querySelector() - select one element
// document.querySelector("#para1").style.backgroundColor = "yellow";
// document.querySelector("span").style.backgroundColor = "lightgreen";
// document.querySelector(".box").style.backgroundColor = "red";

//* document.querySelectorAll() - select multiple elements and returns a html collection
// const items = document.querySelectorAll("p");
// console.log(items); // object
// items.forEach((item) => {
//   item.style.backgroundColor = "lightblue";
// });

//* image
// let img = document.getElementById("img1");
// img.setAttribute(
//   "src",
//   "https://th.bing.com/th/id/OIP.3FA1GleKvkg2kT8b8xmBjwHaHa?w=200&h=200&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
// );
// img.removeAttribute("alt");
// const value = img.getAttribute("src");
// console.log(value);

// img.classList.add("invert");
// // img.classList.remove("invert");
// img.classList.toggle("invert");
// if (img.classList.contains("invert")) {
//   console.log("Present");
// } else {
//   console.log("Absent");
// }

//* document.createElement()
// const h1 = document.createElement("h1"); // create a html element
// h1.innerHTML = " <h1>This heading is created using JS</h1>";
// document.body.append(h1); // add the element in the html file

// const div = document.createElement("div");
// document.body.append(div);

// const para = document.createElement("p");
// para.innerText =
//   "This paragraph is created using JS. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nisi vero reprehenderit fugit ipsum officia vel ratione dolore, cupiditate voluptas!";
// // document.body.append(para);

// const para2 = document.createElement("p");
// para2.innerText = "This is the replacement paragraph";

// div.appendChild(para); // add the child element inside a parent element
// // div.appendChild(para2);
// div.replaceChild(para2, para1); // replace the element replaceChild(newNode, oldNode)
// h1.remove(); // remove the element

//* firstChild , parentElement
// console.log(document.body.parentElement);
// console.log(document.body.children);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

//* Events
const btn = document.querySelector("#displayBtn");
const textBox = document.querySelector("#nameInp");
const h1 = document.querySelector("#head");

// btn.addEventListener("click", () => {
//   h1.innerText = textBox.value;
// });

// btn.addEventListener("dblclick", () => {
//   h1.innerText = textBox.value;
// });

btn.addEventListener("click", () => {
  h1.innerText = textBox.value;
});

// click , dblclick, mousedown, mousemove, mouseleave, mouseover, contextmenu, wheel, keydown, keyup

// document.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

// document.addEventListener("keyup", (e) => {
//   console.log(e.key);
// });

