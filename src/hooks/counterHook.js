import { useState } from "react";

export function useHello(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return { counter, increment };
}
