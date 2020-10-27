import React, { useState } from "react";

const Power = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
    const buttons = [].slice.call(document.querySelectorAll("button"));
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = toggle;
      buttons[i].style.border = !toggle ? "4px solid aqua" : "4px solid gray";
    }
  };
  return (
    <div>
      <div className="text-white " id="power-btn">
        Power
      </div>
      <input
        checked={toggle}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: toggle ? "#06D6A0" : "#EF476F" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default Power;
