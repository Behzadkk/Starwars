import React from "react";

const PeopleCard = props => {
  return (
    <div className="card text-center">
      <h5 className="card-header">
        {props.data.name} {"   "}
        {props.isWinner && <span className="badge badge-success">Winner</span>}
        {props.isDraw && <span className="badge badge-secondary">Draw</span>}
      </h5>
      <div className="list-group list-group-flush">
        <p className="card-text">Height : {props.data.height}</p>
        <p className="card-text">Mass : {props.data.mass}</p>
        <p className="card-text">Hair Color : {props.data.hair_color}</p>
        <p className="card-text">Eye Color : {props.data.eye_color}</p>
        <p className="card-text">Birth Year : {props.data.birth_year}</p>
      </div>
    </div>
  );
};

export default PeopleCard;
