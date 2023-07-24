import React from "react";
import useOnlineStatus from "./hooks/useOnlineStatus";

function OnlineComponent() {
  const isOnline = useOnlineStatus();
  return (
    <div>
      {isOnline ? "You are connected to the internet" : "You are offline"}
    </div>
  );
}

export default OnlineComponent;
