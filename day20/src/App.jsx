import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./App.css";

//* Virtual DOM Working:
//? 1. React creates a Virtual DOM tree
//? 2. When states or props change, React will make a new Virtual DOM
//? 3. It compares the old and new trees using a process called reconcillation
//? 4. It finds only the parts that changed
//? 5. Then it updates only those parts on the real DOM

//* useEffect :
//? It is a hook that is used to run side effects in our react app
//? It let's us run code after react renders a component
//? It is helpful when:
//? 1. Calling an API
//? 2. Setup a timer
//? 3. Adding event listeners
//? 4. Sync with browser features like localStorage, or document.title

//* useRef :
//? useRef gives us a mutable box that stays the same between renders
//? It is used for:
//? 1. Accessing DOM elements
//? 2. Storing values that should not cause re-renders
//? 4. Keeps track of something without updating UI

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // code runs after render
    document.title = `Count: ${count}`;
  }, [count]);

  /*
  let num = 0;
  useEffect(() => {
    let timer = setInterval(() => {
      console.log(`Count: ${num++}`)
    }, 2000);
    //? cleanup : if the effect creates something that should be removed later, return a cleanup function
    return () => {
      clearInterval(timer);
    }
  },[count])
  */

  //? [] : It will run only once after the first render.
  //? [dependencies] : It will run at first and after the first render and then only run whenever the dependency is changing.
  //? no dependency array : It will run at every render.

  const inputRef = useRef(null);
  const focusInput = () => {
    // inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  const imgRef = useRef();
  const imgChange = () => {
    if (imgRef.current.src === "http://localhost:5173/favicon.svg") {
      imgRef.current.src = "/react.svg";
    } else {
      imgRef.current.src = "http://localhost:5173/favicon.svg";
    }
  };

  return (
    <>
      {console.log("App is re-rendered")}
      <button
        className="counter"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Count is {count}
      </button>

      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus</button>

      <img ref={imgRef} src="/favicon.svg" alt="" />
      <button onClick={imgChange}>Change</button>
    </>
  );
}

export default App;
