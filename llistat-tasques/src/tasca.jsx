
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Tasca = ({ tasca, eliminarTasca, completarTasca }) => {
  return (
    <div className={`tasca ${tasca.completada ? 'tascaCompletada' : ''}`}>
      <div onClick={() => completarTasca(tasca.id)}>
        {tasca.titol}
      </div>
      <button onClick={() => eliminarTasca(tasca.id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default Tasca;
