import React from "react";

const ScoreKeeper = props => {
  return (
    <h4>
      Right Player: <span>{props.score[0]}</span> - Left Player:{" "}
      <span>{props.score[1]}</span>
    </h4>
  );
};

export default ScoreKeeper;
