import { useState, useEffect } from "react";
import "./ContadorApp.css";
import PropTypes from "prop-types";

//por las props le paso en value el state de valorContador del componente
//contador asi va chequeando con el useEffect ese valor y si es mayor
//a 15 va a mostrar la alerta
function AlertComponent({ value }) {
  useEffect(() => {
    if (value > 15) {
      alert(
        `El valor es mayor que el número 15, su valor actual es: ${value} `
      );
    }
  }, [value]);

  return <div className="alert"></div>;
}

//tipando la props.name que va a ser un numero
AlertComponent.propTypes = {
  value: PropTypes.number,
};

export default AlertComponent;
