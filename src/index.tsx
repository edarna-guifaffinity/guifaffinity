import "./index.css";
import "./styles/reset.css";
import "./styles/variables/color_variables.css";
import "./styles/variables/font_variables.css";
import "./styles/variables/spacing_variables.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Router } from "./components/router/Router";

/* if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");

  worker.start();
} */

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div className="app-container">
    <React.StrictMode>
      <Router></Router>
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
