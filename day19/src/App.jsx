import "./App.css";
import C1 from "./Components/C1.jsx";
import Card from "./Components/Card.jsx";
import Navbar from "./Components/Navbar.jsx";
import { useState } from "react";

function App() {
  //? State - is an object that stores current information about the said component
  const [num, setNum] = useState(0);

  return (
    //? XML - is used to store, organize, and transport data in a structured, human-readable, and machine readable format.
    //? JSX fragment
    <>
      <Navbar name="Priyanshu" />
      <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <C1 name="Priyanshu" num={num} />
      <button className="addBtn" onClick={()=>{setNum(num+1)}}>+</button>
      <button className="resetBtn" onClick={()=>{setNum(0)}}>Reset</button>
      <button className="subsBtn" onClick={()=>{setNum(num-1)}}>-</button>
    </>
  );
}

export default App;






//? XML Code
// <? xml version = "1.0" encoding = "UTF-8" ?>
//   <student>
//     <name>John Doe</name>
//     <registrationNo>12345678</registrationNo>
//     <course>MERN STACK</course>
//     <age>28</age>
//   </student>


