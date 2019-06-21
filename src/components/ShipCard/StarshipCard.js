import React from "react";

const StarshipCard = props => {
  return (
    <div className="card text-center">
      <h5 className="card-header">
        {props.data.name}
        {"   "}
        {props.isWinner && <span className="badge badge-success">Winner</span>}
        {props.isDraw && <span className="badge badge-secondary">Draw</span>}
      </h5>
      <div className="list-group list-group-flush">
        <p className="card-text">Length : {props.data.length}</p>
        <p className="card-text">Crew : {props.data.crew}</p>
        <p className="card-text">
          Starship Class : {props.data.starship_class}
        </p>
        <p className="card-text">Manufacturer : {props.data.manufacturer}</p>
        <p className="card-text">
          Hyperdrive Rating : {props.data.hyperdrive_rating}
        </p>
      </div>
    </div>
  );
};

export default StarshipCard;
