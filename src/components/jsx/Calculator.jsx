import React, { useState } from "react";
import BeautifulScreen from "./BeautifulScreen";
import ButtonsContainer from "./ButtonsContainer";
import Button from "./Button";
import ItSOverNineThousand from "./ItSOverNineThousand";
import CalculationHistory from "./CalculationHistory";
import "../css/Calculator.css";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "=", "save"],
];

const math = (a, b, sign) => {
  if (sign === "+") {
    return a + b;
  } else if (sign === "-") {
    return a - b;
  } else if (sign === "X") {
    return a * b;
  } else {
    return a / b;
  }
};

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const Calculator = () => {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeSpaces(calc.num).length < 12) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  let [easter, setEaster] = useState(false);

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
        sign: "",
        num: 0,
      }) ;
      if (
        math(
          Number(removeSpaces(calc.res)),
          Number(removeSpaces(calc.num)),
          calc.sign
        ) > 9000
      ) {
        setEaster(true);
      }
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: "",
    });
  };

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
    setEaster(false);
  };

  let [calcHistory, setCalcHistory] = useState([]);
  const saveCalculation = () => {
    if (calc.sign && calc.num) {
      // Calculer le résultat
      const result = toLocaleString(
        math(
          Number(removeSpaces(calc.res)),
          Number(removeSpaces(calc.num)),
          calc.sign
        )
      );
      // Créer la chaîne de calcul
      const calculation = `${calc.res} ${calc.sign} ${calc.num}`;
      setCalcHistory([...calcHistory, calculation, result]);
    }
  };

  return (
    <>
      {easter && <ItSOverNineThousand />}
      <div className="calculator">
        <BeautifulScreen value={calc.num ? calc.num : calc.res} />
        <ButtonsContainer>
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={
                  btn === "C"
                    ? resetClickHandler
                    : btn === "+-"
                    ? invertClickHandler
                    : btn === "%"
                    ? percentClickHandler
                    : btn === "="
                    ? equalsClickHandler
                    : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                    ? signClickHandler
                    : btn === "."
                    ? commaClickHandler
                    : btn === "save"
                    ? saveCalculation
                    : numClickHandler
                }
              />
            );
          })}
        </ButtonsContainer>
      </div>
      <CalculationHistory calcHistory={calcHistory} />
    </>
  );
};

export default Calculator;
