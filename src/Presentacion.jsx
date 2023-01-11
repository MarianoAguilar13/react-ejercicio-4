import { useState } from "react";
import "./Presentacion.css";

function Presentacion(props) {
  return (
    <h1 className="App">
      {" "}
      {props.name} {props.apellido}
    </h1>
  );
}

export default Presentacion;
