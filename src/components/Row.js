import React from "react";
import '../style/Row.css';

function Row({ id, name, job, eliminarFila}) {
  return (
    <tr>
      <td>{name}</td>
      <td>{job}</td>
      <td>
        <button onClick={() => eliminarFila(id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Row;
