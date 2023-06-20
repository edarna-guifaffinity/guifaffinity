import "./index.css";
import "./styles/reset.css";
import "./styles/variables/color_variables.css";
import "./styles/variables/font_variables.css";
import "./styles/variables/spacing_variables.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeList } from "./components/home-list";
import { Detail } from "./components/detail/Detail";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");

  worker.start();
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/gif/:gifId",
    element: <Detail />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
