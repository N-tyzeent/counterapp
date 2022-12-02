import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  let decement = () => {
    setNum1((preNum) => preNum - 1);
  };
  let Increment = () => {
    setNum1((preNum) => preNum + 1);
  };
  let reset = () => {
    setNum1((preNum) => (preNum = 0));
  };

  useEffect(() => {
    console.log(num1);
    if (num1 > 0) {
      document.body.style.backgroundColor = "red";
    } else if (num1 == 0) {
      document.body.style.backgroundColor = "blue";
    } else {
      document.body.style.backgroundColor = "green";
    }
  }, [num1]);

  return (
    <div className="App">
      <p>{num1}</p>
      <div className="button">
        <button
          onClick={() => {
            setNum1(num1 - 1);
          }}
        >
          Derement
        </button>
        <button
          onClick={() => {
            setNum1(0);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setNum1(num1 + 1);
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
