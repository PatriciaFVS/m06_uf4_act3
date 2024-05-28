
import React, { useState } from 'react';

const FormulariTasques = ({ funcAfegirTasca }) => {
  const [textTasca, setTextTasca] = useState('');

  const canviTextTasca = e => {
    setTextTasca(e.target.value);
    console.log('value is:', e.target.value);
  };

  const enviarForm = e => {
    e.preventDefault();
    const tascaNova = {
      titol: textTasca,
      completada: false
    };
    funcAfegirTasca(tascaNova);
    setTextTasca('');
  };

  return (
    <form onSubmit={enviarForm}>
      <input
        value={textTasca}
        onChange={canviTextTasca}
        placeholder="Afegir tasca"
      />
      <button type="submit">Afegir</button>
    </form>
  );
};

export default FormulariTasques;
