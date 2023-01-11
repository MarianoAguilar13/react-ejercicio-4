import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Presentacion from "./Presentacion";

const nombreCompleto = { name: "Mariano", apellido: "Aguilar" };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Presentacion
      name={nombreCompleto.name}
      apellido={nombreCompleto.apellido}
    />
  </React.StrictMode>
);
