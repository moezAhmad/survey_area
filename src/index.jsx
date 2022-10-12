import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MarkersProvider } from "./services/markers/markers_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MarkersProvider>
      <App />
    </MarkersProvider>
  </React.StrictMode>
);
