import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // milliseconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2,"0")}:
            ${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(2,"0")}`;
  };

  return (
  <div className="container">
    <h1>{formatTime()}</h1>

    <button onClick={() => setIsRunning(true)}>
      Start
    </button>

    <button onClick={() => setIsRunning(false)}>
      Stop
    </button>

    <button
      onClick={() => {
        setIsRunning(false);
        setTime(0);
      }}
    >
      Reset
    </button>
  </div>
  );
}

export default Stopwatch;