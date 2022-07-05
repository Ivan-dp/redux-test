import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const defaultState = {
  value: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, value: state.value + 1 };
    case "REDUCE":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
