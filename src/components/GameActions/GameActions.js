import React from "react";
const GameActions = props => {
  return (
    <div className="nav nav-pills justify-content-center">
      <button className="nav-link btn-success" onClick={props.nextRound}>
        Play
      </button>
      <button className="nav-link btn-outline-danger" onClick={props.onReset}>
        Reset
      </button>
    </div>
  );
};

export default GameActions;
