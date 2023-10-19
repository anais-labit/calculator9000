import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faFloppyDisk} />;
import "../css/Button.css";


const Button = ({ value, onClick }) => {
  let className = "";

  if (value === "=") {
    className = "equals";
  } else if (
    value === "%" ||
    value === "X" ||
    value === "-" ||
    value === "+" ||
    value === "/"
  ) {
    className = "operator";
  } else if (value === "C") {
    className = "reset";
  } else if (value === "save") {
    className = "save";
    value = element;
    
    } else {
    className = "";
  }

  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
