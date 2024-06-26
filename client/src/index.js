import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import axios from "axios";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
axios.defaults.baseURL = "http://localhost:5001";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
