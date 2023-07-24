import React from "react";
import useIdle from "./hooks/useIdle";

function IdleComponent() {
  const idle = useIdle();
  return <div>{idle ? "Please start working" : "Great work!"}</div>;
}

export default IdleComponent;
