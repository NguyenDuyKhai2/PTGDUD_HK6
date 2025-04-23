import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';

function CounterToolkit() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-4">Counter: {count}</h2>
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Tăng
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 ml-4"
      >
        Giảm
      </button>
    </div>
  );
}

export default CounterToolkit;
