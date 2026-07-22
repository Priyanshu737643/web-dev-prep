import "./App.css";
// import { useState } from 'react'
// import {useRef} from 'react';
import { useOutletContext } from "react-router-dom";

function App() {
  const { name, age } = useOutletContext();
  //uncontrolled components
  // const inputRef = useRef();
  // const handleSubmit = ()=>{
  //   console.log(inputRef.current.value);
  // }

  // controlled component
  // const [username, setUsername] = useState('');

  // const inputSubmit = ()=>{
  //   console.log(username);
  //   setUsername('');
  // }
  // const handleUsername = (e)=>{
  //   setUsername(e.target.value);
  //   console.log(username);
  // }
  return (
    <>
      <h1>This is Index Page</h1>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>

      {/* controlled components */}
      {/* <input id='textbox1' type="text" value={username} onChange={(e)=>handleUsername(e)} />
    <button onClick={()=>inputSubmit()} id='btn1'>Submit</button> */}

      {/* Uncontrolled Components */}
      {/* {console.log("Page Re-rendered")
    } */}
      {/* <input id='textbox1' ref={inputRef} type="text" />
    <button id='btn1' onClick={handleSubmit}>Submit</button> */}
    </>
  );
}

export default App;
