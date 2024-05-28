
import React, { useState } from 'react';
import Tasca from './tasca';
import FormulariTasques from './formulariTasques';

const LlistatTasques = () => {
  const [tasques, setTasques] = useState([]);

  const afegirTasca = (tasca) => {
    setTasques([...tasques, { ...tasca, id: tasques.length }]);
  };

  const eliminarTasca = (id) => {
    const tasquesRestants = tasques.filter(tasca => tasca.id !== id);
    setTasques(tasquesRestants);
  };

  const completarTasca = (id) => {
    const tasquesActualitzades = tasques.map(tasca =>
      tasca.id === id ? { ...tasca, completada: !tasca.completada } : tasca
    );
    setTasques(tasquesActualitzades);
  };

  return (
    <div>
      <h1>Llistat de Tasques</h1>
      <FormulariTasques funcAfegirTasca={afegirTasca} />
      <div>
        {tasques.map((tasca) => (
          <Tasca
            key={tasca.id}
            tasca={tasca}
            eliminarTasca={eliminarTasca}
            completarTasca={completarTasca}
          />
        ))}
      </div>
    </div>
  );
};

export default LlistatTasques;