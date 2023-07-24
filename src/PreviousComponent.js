import React, { useState } from "react";
import usePrevious from "./hooks/usePrevious";

function PreviousComponent() {
  const [value, setValue] = useState(0);
  const prev = usePrevious(value);

  const handleScore = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <div>
      <div>Score: {value}</div>
      <div>Prev: {prev}</div>
      <button onClick={handleScore}>Chnage score</button>
    </div>
  );
}

export default PreviousComponent;
