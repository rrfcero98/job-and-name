import React, { useState } from "react";
import "../style/Table.css";
import Formulary from "./Form";
import Row from "./Row";

function Table() {
  const [filas, setFilas] = useState([]);

  const agregarFila = fila => {
    if (fila.nombre.trim() && fila.empleo.trim()) {
      fila.nombre = fila.nombre.trim();
      fila.empleo = fila.empleo.trim();

      const filasActualizadas = [fila, ...filas];
      setFilas(filasActualizadas);
      console.log(filasActualizadas);
    }else{
      alert('Llene los dos campos');
    }
  };

  return (
    <>
      <table className="table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {
            filas.map((fila) =>
            <Row 
              name={fila.nombre}
              job={fila.empleo}
            />
            )
          }
        </tbody>
      </table>
      <h1>Add New</h1>
      <Formulary onSubmit={agregarFila} />
    </>
  );
}

export default Table;
