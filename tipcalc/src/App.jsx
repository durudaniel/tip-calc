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
  return (
    <>
      <div>
        <ul>
          {tipInfo.map((text, index) => (
            <TipList tip={text} key={index} />
          ))}
        </ul>
      </div>
      <form>
        <input type="number" />
        <select>
          <option value={"poor"}>it was poor</option>
          <option value={"good"}>it was good</option>
          <option value={"great"}>it was great</option>
        </select>

        <select>
          <option value={"poor"}>it was poor</option>
          <option value={"good"}>it was good</option>
          <option value={"great"}>it was great</option>
        </select>
      </form>
    </>
  );
}

function TipList({ tip }) {
  return <li>{tip}</li>;
}
