import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Modal from "react-modal";
import { App } from "./application/components/App";

Modal.setAppElement("#modal");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
