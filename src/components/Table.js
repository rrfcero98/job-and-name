import React, { useState } from "react";
import "../style/Table.css";
import Formulary from "./Formulary";
import Row from "./Row";

function Table() {
  const [filas, setFilas] = useState([]);

  const agregarFila = fila => {
    if (fila.nombre.trim() && fila.empleo.trim()) {
      fila.nombre = fila.nombre.trim();
      fila.empleo = fila.empleo.trim();

      const filasActualizadas = [...filas, fila];
      setFilas(filasActualizadas);
      console.log(filasActualizadas);
    }else{
      alert('Llene los dos campos');
    }
  };

  const eliminarFila = id => {
    const filasActualizadas = filas.filter(lista => lista.id !== id);
    console.log(filasActualizadas);
    setFilas(filasActualizadas); 
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
              key={fila.id}
              id={fila.id}
              name={fila.nombre}
              job={fila.empleo}
              eliminarFila={eliminarFila}
            />
            )
          }
        </tbody>
      </table>
      <h2>Add New</h2>
      <Formulary onSubmit={agregarFila} />
    </>
  );
}

export default Table;
