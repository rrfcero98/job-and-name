import React from "react";

function Row({ name, job }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{job}</td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
}

export default Row;
