import { useAppSelector, useAppDispatch } from "../app/Hooks";
import {
  increment,
  decrement,
  reset,
  addByAmount,
  setStep,
} from "../Features/counter/counterSlice";

const Counter = () => {
  const dispatch = useAppDispatch();
  const { value, step } = useAppSelector((state) => state.counter);
  return (
    <div>
      <h1 className="title">Counter: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <input
        type="text"
        id="step"
        value={step}
        onChange={(e) => dispatch(setStep(Number(e.target.value)))}
      />
      <button onClick={() => dispatch(addByAmount(step))}>Add Step</button>
    </div>
  );
};

export default Counter;
