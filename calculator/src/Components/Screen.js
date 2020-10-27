import React from "react";

const Screen = ({ value }) => {
  return (
    <div>
      <input
        className="result text-white"
        id="display"
        value={value}
        disabled
      />
    </div>
  );
};
export default Screen;
