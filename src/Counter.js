import React from "react";
import { useHello } from "./hooks/counterHook";

function Counter() {
  const { counter, increment } = useHello(0);
  return (
    <div>
      {counter}
      <button onClick={increment}>Add</button>
    </div>
  );
}

export default Counter;
