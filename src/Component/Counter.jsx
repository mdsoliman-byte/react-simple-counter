import React, { useState } from "react";

const Counter = ({ data }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((previous) => previous + data);
  };
  const decrement = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((previous) => previous - 1);
    }
  };

  return (
    <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold" id="setData">
        {count}
      </div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          id="increment"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
