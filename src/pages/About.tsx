import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc } from "../lib/features/counterSlice";
import type { RootState } from "../lib";

const About = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const greeting = useSelector((state: RootState) => state.greeting.value);
  return (
    <div className="About">
      <h2>About {count}</h2>
      <button onClick={() => dispatch(inc(1))}>increment 1</button>
      <button onClick={() => dispatch(inc(10))}>increment 10</button>
      <button onClick={() => dispatch(inc(100))}>increment 100</button>
      <button>decrement</button>
      <button>reset</button>

      <h1>{greeting}</h1>
    </div>
  );
};

export default memo(About);
