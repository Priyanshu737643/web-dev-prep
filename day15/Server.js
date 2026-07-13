// const express = require('express');  //? Common js
import express from "express";  //? ES module

const PORT = 3000;
const app = express();

const obj = {
    fname: "John",
    lname: "Doe",
    age: 30,
    occupation: "SDE-1",
}

//? API chaining
app.get("/", (req, res) => {
    res.send("Hello World GET");
})
.post("/", (req, res) => {
    res.send("Hello World POST");
})
.put("/", (req, res) => {
    res.send("Hello World PUT");
})
.patch("/", (req, res) => {
  res.send("Hello World PATCH");
})
.delete("/", (req, res) => {
  res.send("Hello World DELETE");
})
.options("/", (req, res) => {
  res.send("Hello World Options");
});

app.get("/about", (req, res) => {
    res.send("About Page GET");
}).post("/about", (req, res) => {
    res.send("About Page POST");
}).put("/about", (req, res) => {
    res.send("About Page PUT");
});

//* REST API: Representational State Transfer Application Programming Interface is a way for different software applications to communicate over the internet using HTTP methods.

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Port is running on 127.0.0.1:${PORT}`);
})