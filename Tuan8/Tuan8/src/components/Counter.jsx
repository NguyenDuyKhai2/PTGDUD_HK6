import React, { useReducer } from 'react';

// Initial state
const initialState = { count: 0 };

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-4">Counter: {state.count}</h2>
      <button
        onClick={() => dispatch({ type: 'increment' })}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Tăng
      </button>
      <button
        onClick={() => dispatch({ type: 'decrement' })}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 ml-4"
      >
        Giảm
      </button>
    </div>
  );
}

export default Counter;
