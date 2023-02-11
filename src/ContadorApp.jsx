import { useState } from "react";
import "./ContadorApp.css";
import PropTypes from "prop-types";

function ContadorApp({ value }) {
  const [valorContador, setValorContador] = useState(value);

  const sumar = () => {
    setValorContador(valorContador + 1);
  };
  const restar = () => {
    setValorContador(valorContador - 1);
  };
  const reset = () => {
    setValorContador(value);
  };

  return (
    <div className="container-counter-app">
      <h1 className="counter-app">CounterApp</h1>
      <h3 className="counter-app-value">{valorContador}</h3>
      <div className="container-buttons">
        <button onClick={sumar} className="boton-sumar">
          Sumar 1
        </button>
        <button onClick={restar} className="boton-restar">
          Restar 1
        </button>
        <button onClick={reset} className="boton-reset">
          Reset
        </button>
      </div>
    </div>
  );
}

//tipando la props.name que va a ser un numero
ContadorApp.propTypes = {
  value: PropTypes.number,
};

export default ContadorApp;
