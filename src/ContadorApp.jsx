import { useState } from "react";
import "./ContadorApp.css";
import PropTypes from "prop-types";

function ContadorApp({ value }) {
  const imprimirValor = (e) => {
    e.preventDefault();
    console.log("el valor es: ", value);
  };

  return (
    <div className="container-counter-app">
      <h1 className="counter-app">CounterApp</h1>
      <h2>{value}</h2>
      <button onClick={imprimirValor} className="boton-counter-app">
        Imprimir
      </button>
    </div>
  );
}

//tipando la props.name que va a ser un numero
ContadorApp.propTypes = {
  value: PropTypes.number,
};

export default ContadorApp;
