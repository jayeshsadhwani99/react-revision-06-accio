import { useEffect, useRef, useState } from "react";

function useIdle(idleTime = 5000) {
  const [idle, setIdle] = useState(false);
  const timeoutId = useRef(null);

  const handleActivity = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    setIdle(false);
    timeoutId.current = setTimeout(() => setIdle(true), idleTime);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleActivity);
    document.addEventListener("keydown", handleActivity);

    return () => {
      document.addEventListener("mousemove", handleActivity);
      document.addEventListener("keydown", handleActivity);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idleTime]);

  return idle;
}

export default useIdle;
