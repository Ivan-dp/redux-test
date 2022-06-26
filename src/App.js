import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  console.log(cash);

  return (
    <div className={"app"}>
      <div style={{ display: "flex" }}>
        <button>Пополнить счёт</button>
        <button>Снять со счёта</button>
      </div>
    </div>
  );
}

export default App;
