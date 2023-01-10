import React, { useState } from 'react';
import '../style/Form.css';
import { v4 as uuidv4 } from 'uuid';

function Formulary(props) {

  const [input1, setInput1] = useState([]);
  const [input2, setInput2] = useState([]);

  const manejarCambioNombre = e =>{
    console.log('Escribiendo nombre...');
    setInput1(e.target.value);
  };

  const manejarCambioEmpleo = e =>{
    console.log('Escribiendo nombre...');
    setInput2(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();
    console.log('Enviando formulario');
    console.log(e);

    const filaNueva = {
      id: uuidv4(),
      nombre: input1,
      empleo: input2
    }

    console.log(filaNueva.nombre, filaNueva.empleo);
    props.onSubmit(filaNueva)
  };

  return (
    <form className="form-container" onSubmit={manejarEnvio}>
      <p>
        <label>
        Name
        <input type="text" name="nombre" onChange={manejarCambioNombre} />
        </label>
      </p>
      <p>
        <label>
        Job
        <input type="text" name="empleo" onChange={manejarCambioEmpleo} />
        </label>
      </p>
      <p>
        <button className="add-button">Submit</button>
      </p>
    </form>
  );
}

export default Formulary;
