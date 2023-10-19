import React from "react";
import "../css/Button.css";

const Button = ({ value, onClick }) => {
  let className = "";

  if (value === "=") {
    className = "equals";
  } else if (
    value === "+-" ||
    value === "%" ||
    value === "X" ||
    value === "-" ||
    value === "+" ||
    value === "/"
  ) {
    className = "operator";
  } else if (value === "C") {
    className = "reset";
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
