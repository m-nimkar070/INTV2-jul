import React, { useEffect, useState } from "react";
import "./stopwatch.css";

const Stopwatch = () => {
  const [minutes, setMinutes] = useState(0)
  const [seconds , setSeconds] = useState(0);
  const [name , setName] = useState("Start");

  const [running , setRunning] = useState(false);

  const startTimer = () => {
      setSeconds((prevSeconds) => {
        if(prevSeconds === 59){
          setMinutes((prevMinutes) => prevMinutes +1);
          return 0
        }else{
          return prevSeconds + 1; 
        }
      })
  };

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        startTimer();
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleStart = () =>{
    setRunning(!running);
    setName((prev)=> prev === "Start" ?"Stop" : "Start");
  }

  const handleReset = () =>{
    setMinutes(0);
    setSeconds(0);
    setName("Start");
    setRunning(false);
  }

  return (
    <>
      <div className="container">
        <h1>Stopwatch</h1>
        <div className="timer">
          <p>Time:</p>
          <div>{minutes}</div>:
          <div>{String(seconds).padStart(2, "0")}</div>
        </div>
        <div className="buttons">
          <button
            className="btn"
            onClick={handleStart}
          >
            {name}
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
