// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./common/redux/store";
import { Provider } from "react-redux";
import "./styles.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
