import { useState } from "react";
import "./App.css";

export default function () {
  return (
    <div>
      <TipCalc />
    </div>
  );
}
const tipInfo = [
  "How much was the bill?",
  "How did you like the service?",
  "How did your friend like the service?",
];

function TipCalc() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState("0");
  const [percentage2, setPercentage2] = useState("0");

  const tip = bill * ((+percentage1 + +percentage2) / 2 / 100);
  const roundTip = Math.round(tip);

  //const percentage = 12;
  function handleReset() {
    setBill("");
    setPercentage2(0);
    setPercentage1(0);
  }

  return (
    <>
      <div className="tip-content">
        <div>
          <ul>
            {tipInfo.map((text, index) => (
              <TipList tip={text} key={index} />
            ))}
          </ul>
        </div>
        <form>
          <input
            type="text"
            placeholder="Bill amount"
            onChange={(e) => setBill(e.target.value)}
          />
          <select
            value={percentage1}
            onChange={(e) => setPercentage1(e.target.value)}
          >
            <option value="0">Dissatisfied (0)%</option>
            <option value="5">it was okay (5)%</option>
            <option value="10">it was good (10)%</option>
            <option value="20">Absolutely amazing (20)%</option>
          </select>

          <select
            value={percentage2}
            onChange={(e) => setPercentage2(e.target.value)}
          >
            <option value="0">Dissatisfied (0)%</option>
            <option value="5">it was okay (5)%</option>
            <option value="10">it was good (10)%</option>
            <option value="20">Absolutely amazing (20)%</option>
          </select>
        </form>
      </div>
      {+bill === 0 ? null : (
        <h3>{`You pay $${+bill + roundTip} ($${+bill} + $${roundTip} tip)`}</h3>
      )}
      {+bill === 0 ? null : <button onClick={handleReset}>Reset</button>}
    </>
  );
}

function TipList({ tip }) {
  return <li>{tip}</li>;
}
