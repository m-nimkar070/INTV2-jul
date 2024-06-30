import React, { useEffect, useState } from "react";
import "./stopwatch.css";

const Stopwatch = () => {
  const [timer, setTimer] = useState({
    m: 0,
    s: 0,
  });

  const [running , setRunning] = useState(false);

  const startTimer = () => {
    console.log(timer);
    setTimer((prev) => {
      let { m, s } = prev;

      s += 1;
      if (s === 60) {
        s = 0;
        m += 1;
      }
      if (m === 60) {
        m = 0;
      }

      return {m, s};
    });
  };

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        startTimer();
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running , timer.s]);

  const handleStart = () =>{
    setRunning(!running);
  }

  const handleReset = () =>{
    setTimer({m:0,s:0});
    setRunning(false);
  }

  return (
    <>
      <div className="container">
        <h1>Stopwatch</h1>
        <div className="timer">
          <p>Time:</p>
          <div>{String(timer.m)}</div>:
          <div>{String(timer.s).padStart(2, "0")}</div>
        </div>
        <div className="buttons">
          <button
            className="btn"
            onClick={handleStart}
          >
            {running ? "Stop" : "Start"}
          </button>
          <button
            className="btn"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
