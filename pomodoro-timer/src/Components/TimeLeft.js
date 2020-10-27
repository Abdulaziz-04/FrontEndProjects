import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

const TimeLeft = ({
  sessionLength,
  breakLength,
  setSessionLength,
  setBreakLength,
}) => {
  const audioElement = useRef(null);
  const [currentSession, setcurrentSession] = useState("Session");
  const [intervalId, setintervalId] = useState(null);
  const [timeLeft, settimeLeft] = useState(sessionLength);
  useEffect(() => {
    settimeLeft(sessionLength);
  }, [sessionLength]);
  useEffect(() => {
    if (timeLeft === 0) {
      audioElement.current.play();
      if (currentSession === "Session") {
        setcurrentSession("Break");
        settimeLeft(breakLength);
      } else if (currentSession === "Break") {
        setcurrentSession("Session");
        settimeLeft(sessionLength);
      }
    }
  }, [timeLeft, breakLength, currentSession, sessionLength]);

  const hasStarted = intervalId !== null;
  const handleStartStop = () => {
    if (hasStarted) {
      clearInterval(intervalId);
      setintervalId(null);
    } else {
      const newId = setInterval(() => {
        settimeLeft((prevTime) => {
          let curTime = prevTime - 1;
          if (curTime >= 0) {
            return curTime;
          }
        });
      }, 100); //1000ms gives 1s
      setintervalId(newId);
    }
  };
  const handleReset = () => {
    //reset audio
    audioElement.current.load();
    //clear session
    clearInterval(intervalId);
    //set new session
    setintervalId(null);
    setcurrentSession("Session");
    setSessionLength(25 * 60);
    settimeLeft(sessionLength);
    //reset breaklength
    setBreakLength(300);
  };
  const timeLeftformat = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
  return (
    <div className="circle">
      <p id="time-left" className="text-white">
        {timeLeftformat}
      </p>
      <h1 id="timer-label" className="text-white">
        {currentSession}
      </h1>
      <button
        className="btn btn-default btn-primary btn-lg"
        id="start_stop"
        onClick={handleStartStop}
      >
        {hasStarted ? "Stop" : "Start"}
      </button>
      <button
        className="btn btn-default btn-danger btn-lg"
        id="reset"
        onClick={handleReset}
      >
        Reset
      </button>
      <audio id="beep" ref={audioElement}>
        <source
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
};

export default TimeLeft;
