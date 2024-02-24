import React from "react";

const PrimaryCTAButton = (props) => {
  return (
    <button className="bg-yellow-800" onClick={props.handleClick}>
      {props.icon && props.icon}
      {props.label}
    </button>
  );
};

export default PrimaryCTAButton;
