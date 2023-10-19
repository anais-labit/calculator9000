import React from "react";
import "../css/CalculationHistory.css";


const CalculationHistory = ({ calcHistory }) => {
  return (
    <div className="history">
      <h4>Calculation History</h4>
      <ul>
        {calcHistory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CalculationHistory;
