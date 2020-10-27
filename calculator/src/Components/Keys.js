import React from "react";

const Keys = ({ handleClick, Clear, Calculate }) => {
  return (
    <div>
      <div className="mini-grid">
        <button
          id="clear"
          className="btn btn-defult btn-danger"
          onClick={Clear}
          value="all clear"
        >
          AC
        </button>
        <button
          id="divide operator"
          className="btn btn-defult btn-secondary"
          onClick={handleClick}
          value="/"
        >
          /
        </button>
        <button
          id="multiply operator"
          className="btn btn-defult btn-secondary"
          onClick={handleClick}
          value="*"
        >
          x
        </button>
      </div>
      <div className="grid">
        <button
          id="seven"
          className="btn btn-defult btn-secondary"
          onClick={handleClick}
          value="7"
        >
          7
        </button>
        <button
          id="eight"
          className="btn btn-defult btn-secondary"
          onClick={handleClick}
          value="8"
        >
          8
        </button>
        <button
          id="nine"
          className="btn btn-defult btn-secondary"
          onClick={handleClick}
          value="9"
        >
          9
        </button>
        <button
          id="subtract operator"
          className="btn btn-defult btn-secondary"
          onClick={handleClick}
          value="-"
        >
          -
        </button>
        <button
          id="four"
          className="btn btn-defult btn-secondary"
          onClick={handleClick}
          value="4"
        >
          4
        </button>
        <button
          id="five"
          className="btn btn-defult btn-secondary"
          onClick={handleClick}
          value="5"
        >
          5
        </button>
        <button
          id="six"
          className="btn btn-defult btn-secondary"
          onClick={handleClick}
          value="6"
        >
          6
        </button>
        <button
          id="add operator"
          className="btn btn-defult btn-secondary"
          onClick={handleClick}
          value="+"
        >
          +
        </button>
        <button
          id="one"
          className="btn btn-defult btn-secondary"
          onClick={handleClick}
          value="1"
        >
          1
        </button>
        <button
          id="two"
          className="btn btn-defult btn-secondary"
          onClick={handleClick}
          value="2"
        >
          2
        </button>
        <button
          id="three"
          className="btn btn-defult btn-secondary"
          onClick={handleClick}
          value="3"
        >
          3
        </button>
        <button
          id="zero"
          className="btn btn-defult btn-secondary zero"
          onClick={handleClick}
          value="0"
        >
          0
        </button>
        <button
          id="decimal"
          className="btn btn-defult btn-secondary "
          onClick={handleClick}
          value="."
        >
          .
        </button>
        <button
          id="equals"
          className="btn btn-defult btn-primary equal"
          onClick={Calculate}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
};
export default Keys;
