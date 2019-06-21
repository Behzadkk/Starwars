import React from "react";
import TestCard from "../TestCard/TestCard";
import StarshipCard from "../ShipCard/StarshipCard";

const GroupCard = props => {
  return (
    <div className="justify-content-around">
      {props.gammerType === "people" ? (
        <div className="card-group">
          <TestCard
            data={props.firstPlayer}
            isWinner={props.winner === "firstPlayer"}
            isDraw={props.winner === ""}
          />
          <TestCard
            data={props.secondPlayer}
            isWinner={props.winner === "secondPlayer"}
            isDraw={props.winner === ""}
          />
        </div>
      ) : (
        <div className="card-group">
          <StarshipCard
            data={props.firstPlayer}
            isWinner={props.winner === "firstPlayer"}
            isDraw={props.winner === ""}
          />
          <StarshipCard
            data={props.secondPlayer}
            isWinner={props.winner === "secondPlayer"}
            isDraw={props.winner === ""}
          />
        </div>
      )}
    </div>
  );
};

export default GroupCard;
