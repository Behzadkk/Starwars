import React from "react";

const GamePicker = props => {
  return (
    <div>
      <h1>Star Wars Game</h1>
      <p>Please select a category to start</p>
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
          <button
            onClick={props.onPeople}
            className={
              props.active === "people" ? "nav-link active" : "nav-link"
            }
          >
            People
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={props.onStarship}
            className={
              props.active === "starships" ? "nav-link active" : "nav-link"
            }
          >
            Starships
          </button>
        </li>
      </ul>
    </div>
  );
};

export default GamePicker;
