import React from "react";
import moment from "moment";

const Session = ({
  sessionLength,
  IncrementsessionLength,
  DecrementsessionLength,
}) => {
  const sessionLengthMins = moment
    .duration(sessionLength, "s")
    .format("mm", { trim: false });
  return (
    <div>
      <p id="session-label" className="text-white">
        Session:
      </p>
      <p id="session-length" className="text-white">
        {sessionLengthMins} M
      </p>
      <button
        onClick={IncrementsessionLength}
        className="btn btn-default btn-success"
        id="session-increment"
      >
        +
      </button>
      <button
        onClick={DecrementsessionLength}
        className="btn btn-default btn-danger"
        id="session-decrement"
      >
        -
      </button>
    </div>
  );
};

export default Session;
