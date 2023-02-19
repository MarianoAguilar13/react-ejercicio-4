import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Presentacion from "./Presentacion";
import ContadorApp from "./ContadorApp";

const nombreCompleto = { name: "Mariano", apellido: "Aguilar" };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContadorApp value={13} />
  </React.StrictMode>
);
