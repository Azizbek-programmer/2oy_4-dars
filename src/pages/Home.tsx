import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../lib';
import { change } from '../lib/features/greetingSlice';

// useSelector - get
const Home = () => {
  const count = useSelector((state:RootState)=> state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="Home">
      <h2>Home {count}</h2>
      <button onClick={() => dispatch(change("Salom dunyo"))}>change</button>
      <button onClick={() => dispatch(change("Nameste"))}>change</button>
    </div>
  );
};

export default memo(Home);