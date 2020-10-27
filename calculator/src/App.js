import "./App.css";
import Screen from "./Components/Screen.js";
import Keys from "./Components/Keys.js";
import React, { useState, useEffect } from "react";
//npm install safe-eval for warning of harmful eval

function App() {
  //A simpler appraoch to verify each component seperately using regex can be done
  const operator = /[*+/-]{1,2}/;
  const [minusEmbed, setExp] = useState("");
  const [clr, setClr] = useState(false);
  const [result, setResult] = useState("0");
  const [decFlag, setFlag] = useState(false);
  let lastInput = result[result.length - 1];

  const handleDecimal = (e) => {
    if (e.target.value === ".") {
      setResult(result);
    } else if (e.target.value.match(operator)) {
      setFlag(false);
      setResult(result + e.target.value);
    } else {
      setResult(result + e.target.value);
    }
  };
  useEffect(() => {
    if (result.length > 20) {
      setResult("Max Limit");
      const btns = [].slice.call(document.getElementsByClassName("btn"));
      for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = true;
      }
      setTimeout(() => {
        for (let i = 0; i < btns.length; i++) {
          btns[i].disabled = false;
        }
        setResult("0");
      }, 800);
    }
  }, [result]);
  const handleClick = (e) => {
    //after pressing calculate to set the display screen
    if (clr) {
      setClr(false);
      document.getElementById("display").classList.remove("text-success");
      if (!e.target.value.match(operator)) {
        if (e.target.value === ".") {
          setFlag(true);
        }
        setResult(e.target.value);
        return;
      }
    }
    if (e.target.value === ".") {
      setFlag(true);
    }
    //To replace operator  to avoid multiple ooperator in sequence
    if (lastInput.match(operator) && e.target.value.match(operator)) {
      //To avoid *-+ sequence
      if (e.target.value === "-" && lastInput !== "-") {
        setResult(result + e.target.value);
        setExp(lastInput + e.target.value);
      } else {
        if (minusEmbed !== "") {
          setResult(result.replace(minusEmbed, e.target.value));
          setExp("");
        } else {
          setResult(result.replace(lastInput, e.target.value));
        }
      }
    } else if (result === "0") {
      setResult(e.target.value);
    } else {
      if (decFlag) {
        handleDecimal(e);
      } else {
        setResult(result + e.target.value);
      }
    }
  };
  const Clear = () => {
    setFlag(false);
    document.getElementById("display").classList.remove("text-success");
    setResult("0");
  };
  const Calculate = (e) => {
    setClr(true);
    if (result === "0") {
      setResult("0");
    } else {
      try {
        setResult(eval(result).toString());
        document.getElementById("display").classList.add("text-success");
      } catch (e) {
        setResult("Invalid");
        setTimeout(() => {
          setResult("0");
        }, 500);
      }
    }
  };
  return (
    <div>
      <h1 className="text-center">Calculator</h1>
      <div className="calc-box">
        <Screen value={result} />
        <Keys handleClick={handleClick} Clear={Clear} Calculate={Calculate} />
      </div>

      <footer className="text-center">Created by Abdulaziz Suria</footer>
    </div>
  );
}

export default App;
