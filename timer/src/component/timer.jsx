import { useEffect, useState } from "react";
let finalValue = null;
function StopWatch({ initial, final }) {
  // console.log(final);
  const [value, setValue] = useState(initial);
  console.log(final, initial);
  const [finalValue, setFinalValue] = useState(final);
  useEffect(() => {
    const id = setInterval(() => {
      console.log(Date.now(), value);
      setValue((prev) => {
        if (prev + 1 >= finalValue) clearInterval(id);
        return prev + 1;
      });
      // console.log(Date.now(), value);
    }, 1000);
    return () => {
      console.log("cleaninng");
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <div>
        <h2>Countdown</h2>
        <h2>{value}</h2>
      </div>
    </>
  );
}
export default function Timer() {
  const [hide, setHide] = useState(false);
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(0);
  return (
    <>
      {hide && <StopWatch initial={startValue} final={endValue} />}
      <div>
        <input
          type="number"
          placeholder="Starting Time"
          onChange={(e) => setStartValue(Number(e.target.value))}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Ending Time"
          onChange={(e) => setEndValue(Number(e.target.value))}
        />
      </div>
      <button onClick={() => setHide(!hide)}>
        {hide == false ? "Start" : "Stop"}
      </button>
    </>
  );
}
