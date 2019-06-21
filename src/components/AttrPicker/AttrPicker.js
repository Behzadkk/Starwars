import React from "react";
import AttrButton from "./AttrButton/AttrButton";

const AttrPicker = props => {
  return (
    <div>
      <p>Select an attribute to play against</p>

      {props.api === "people" ? (
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <AttrButton
              attribute="height"
              active={props.active}
              onSelection={props.attributeSelector}
            />
          </li>
          <li className="nav-item">
            <AttrButton
              attribute="mass"
              active={props.active}
              onSelection={props.attributeSelector}
            />
          </li>
        </ul>
      ) : (
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <AttrButton
              attribute="crew"
              active={props.active}
              onSelection={props.attributeSelector}
            />
          </li>
          <li className="nav-item">
            <AttrButton
              attribute="length"
              active={props.active}
              onSelection={props.attributeSelector}
            />
          </li>
        </ul>
      )}
    </div>
  );
};

export default AttrPicker;
