import React from "react";
import useLocalStorageWithExpiry from "./hooks/useLocalStorageWithExpiry";

function ExpiryComponent() {
  const [value, setValue] = useLocalStorageWithExpiry(
    "username",
    "initial",
    30
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        onChange={(e) => setValue(e.target.value)}
      />
      <div>Value in localStorage: {value}</div>
    </div>
  );
}

export default ExpiryComponent;
