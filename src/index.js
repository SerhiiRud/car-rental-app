import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>test1</div>
    <BrowserRouter basename="/car-rental-app">
      <div>test</div>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
