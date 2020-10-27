import React from "react";
import moment from "moment";
//Everything will be handled in seconds
const Break = ({ breakLength, IncrementbreakLength, DecrementbreakLength }) => {
  //destructuring props in args

  const breakLengthMins = moment
    .duration(breakLength, "s")
    .format("mm", { trim: false });
  return (
    <div>
      <p id="break-label" className="text-white">
        Break:
      </p>
      <p id="break-length" className="text-white">
        {breakLengthMins} M
      </p>
      <button
        onClick={IncrementbreakLength}
        className="btn btn-default btn-success"
        id="break-increment"
      >
        +
      </button>
      <button
        onClick={DecrementbreakLength}
        className="btn btn-default btn-danger"
        id="break-decrement"
      >
        -
      </button>
    </div>
  );
};
export default Break;
