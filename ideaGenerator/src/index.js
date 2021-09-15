import React from "react";
import ReactDOM from "react-dom";
import ThemeContextProvider from "./Contexts/ThemeContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import App from "./App.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  rootElement
);
