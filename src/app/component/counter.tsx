"use client";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex flex-row gap-0 text-lg border-2 border-black w-32">
      <button onClick={decrement} className="w-10 px-3 py-1">-</button>
      <span className="w-10 flex items-center justify-center border-l-2 border-r-2 border-black">
        {count}
      </span>
      <button onClick={increment} className="w-10 px-3 py-1">+</button>
    </div>
  );
}

export default Counter;
