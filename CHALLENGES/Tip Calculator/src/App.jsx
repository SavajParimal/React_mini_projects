import { useState } from "react";
import "./App.css";
import Bill from "./components/Bill";
import Reset from "./components/Reset";
import Srevice from "./components/Srevice";
import Total from "./components/Total";
import { useEffect } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [discount1, setDiscount1] = useState(0);
  const [discount2, setDiscount2] = useState(0);

  function handleAll() {
    setBill(0);
    setDiscount1(0);
    setDiscount2(0);
  }

  return (
    <>
      <div className="myClass">
        <Bill price={bill} setBill={setBill} />
        <Srevice discount={discount1} setDiscount={setDiscount1}>
          How did you like the service?
        </Srevice>
        <Srevice discount={discount2} setDiscount={setDiscount2}>
          How did your friend like the service?
        </Srevice>
        <Total price={bill} dis1={discount1} dis2={discount2} />
        <Reset onHandleFun={handleAll} />
      </div>
    </>
  );
}

export default App;
