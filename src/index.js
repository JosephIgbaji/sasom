import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FormspreeProvider } from "@formspree/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FormspreeProvider project="sasom-it">
        <App />
      </FormspreeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
