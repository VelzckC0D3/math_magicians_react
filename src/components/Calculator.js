import './Calculator.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => (
  <div className="calculatorCont">
    <h2 className="calculatorTitle">Calculator</h2>
    <ChildElement />
  </div>
);

function ChildElement() {
  const btnValues = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  const [result, setResult] = useState({
    total: 0,
    operation: null,
    next: null,
  });

  const handleButtonClick = (buttonName) => {
    setResult((prevState) => {
      const newResult = calculate(prevState, buttonName.target.textContent);
      return { ...prevState, ...newResult };
    });
  };

  return (
    <div className="calculator">
      <div className="calc-wrapper">
        <div className="inputCont">
          {result.total}
          {result.operation}
          {result.next}
        </div>
        <div className="rows">
          {btnValues.map((value) => (
            <button
              type="button"
              className="calculatorButton"
              onClick={handleButtonClick}
              key={value}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
