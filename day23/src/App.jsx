//* Redux is a state management library for JS apps, especially for react apps.
//* It helps us to keep track of the app data in a single predictable place and updates it in a controllerd way.

//! Baic Flow of Redux :
//?           UI
//?           |
//?      Dispatch action
//?           |
//?   Reducer updates store
//?           |
//?   UI reads updated data

//! Core Ideas in Redux
//? 1. Store: It is a single place where our app state lives.
//? 2. Action: An action is a plain object that says what happened.
//? 3. Reducer: A reducer is a function that takes the current state and action, and return the new state.
//? 4. Dispatch: It is used to send action to the store.
//? 5. Selector: It is a function that reads data from the store.

//! Real Life Example
//? Store: Bank Account
//? Action: Request like deposit or withdraw
//? Reducer: bank rule that decides the new balance
//? Dispatch: Sending the request
//? Selector: Checking the balance

import "./App.css";
import Counter from "./Components/Counter";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Redux Counter App</h1>
        <ThemeToggle />
      </header>
      <Counter />
    </div>
  )
}

export default App;
