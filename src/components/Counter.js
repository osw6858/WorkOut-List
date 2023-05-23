import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { increment, decrement } from '../action/action';

//컴포넌트
const Counter = () => {

      const dispatch = useDispatch();
      const count = useSelector((state) => state.count);

  return (
    <div>
    <h1>Counter: {count}</h1>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};


export default Counter;