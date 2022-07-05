import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);

  console.log(value);

  const increment = () => {
    dispatch({ type: "ADD" });
  };
  const decrement = () => {
    dispatch({ type: "REDUCE" });
  };

  return (
    <div className={"app"}>
      <div style={{ display: "flex" }}>
        <button onClick={() => decrement()}>REDUCE</button>
        <h3>{value}</h3>
        <button onClick={() => increment()}>ADD</button>
      </div>
    </div>
  );
}

export default App;
