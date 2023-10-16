import "../css/Calculator.css";
import React from "react";
import BeautifulScreen from "./BeautifulScreen";
import ButtonsContainer from "./ButtonsContainer";
import NumberButton from "./NumberButton";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = () => {
  return (
    <>
      <BeautifulScreen value="0" />
      <ButtonsContainer>
        {btnValues.flat().map((btn, i) => {
          return (
            <NumberButton
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked!`);
              }}
            />
          );
        })}
      </ButtonsContainer>
    </>
  );
};

export default Calculator;
