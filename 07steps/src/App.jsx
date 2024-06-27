import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);

  // const step = 1;
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  function stepmin() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function steppls() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : null}>1</div>
          <div className={step >= 2 ? "active" : null}>2</div>
          <div className={step >= 3 ? "active" : null}>3</div>
        </div>

        <div className="message">Step : {messages[step - 1]}</div>

        <div className="buttons">
          <button onClick={stepmin}>Previous</button>
          <button onClick={steppls}>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
