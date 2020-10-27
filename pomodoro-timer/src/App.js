import React, { useState } from "react";
import Break from "./Components/Break.js";
import Session from "./Components/Session.js";
import TimeLeft from "./Components/TimeLeft";
import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(60 * 25);

  const IncrementbreakLength = () => {
    let newLength = breakLength + 60;
    if (newLength <= 3600) {
      setBreakLength(newLength);
    }
  };
  const DecrementbreakLength = () => {
    if (breakLength > 60) {
      setBreakLength(breakLength - 60);
    }
  };

  const IncrementsessionLength = () => {
    let newLength = sessionLength + 60;
    if (newLength <= 3600) {
      setSessionLength(newLength);
    }
  };
  const DecrementsessionLength = () => {
    if (sessionLength > 60) {
      setSessionLength(sessionLength - 60);
    }
  };

  return (
    <div className="text-center">
      <h1 className="title text-white ">
        Pomodoro-Clock<i className="fas fa-stopwatch"></i>
      </h1>
      <h3 className="text-white">(Maximum Session/Break Time is 60M)</h3>
      <div className="contianer">
        <div className="row">
          <div className="col-md-4">
            <Break
              breakLength={breakLength}
              IncrementbreakLength={IncrementbreakLength}
              DecrementbreakLength={DecrementbreakLength}
            />
          </div>
          <div className="col-md-4">
            <TimeLeft
              sessionLength={sessionLength}
              breakLength={breakLength}
              setSessionLength={setSessionLength}
              setBreakLength={setBreakLength}
            />
          </div>
          <div className="col-md-4">
            <Session
              sessionLength={sessionLength}
              IncrementsessionLength={IncrementsessionLength}
              DecrementsessionLength={DecrementsessionLength}
            />
          </div>
        </div>
      </div>
      <footer class="text-center text-white" id="credit">
        Created By Abdulaziz Suria
      </footer>
    </div>
  );
}
export default App;
