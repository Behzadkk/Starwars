import React from "react";

const AttrButton = props => {
  return (
    <button
      onClick={() => props.onSelection(props.attribute)}
      className={
        props.active === props.attribute ? "nav-link active" : "nav-link"
      }
    >
      {props.attribute}
    </button>
  );
};

export default AttrButton;
