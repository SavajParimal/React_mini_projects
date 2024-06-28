import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("28 june 2024");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="center">
        <button className="btn" onClick={() => setStep(() => step - 1)}>
          -
        </button>
        <span>Step : {step} </span>
        <button className="btn" onClick={() => setStep(() => step + 1)}>
          +
        </button>
      </div>
      <div className="center">
        <button className="btn" onClick={() => setCount(() => count - step)}>
          -
        </button>
        <span>Count : {count} </span>
        <button className="btn" onClick={() => setCount(() => count + step)}>
          +
        </button>
      </div>

      <div className="center">
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is`
          : `${Math.abs(count)} days ago was`}
          <span>" {date.toDateString()} "</span>
      </div>
    </>
  );
}

export default App;
