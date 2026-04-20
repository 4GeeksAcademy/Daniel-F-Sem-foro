import React, { useState } from 'react';

function Semaforo() {
  const [colores, setColores] = useState(['red', 'yellow', 'green']);
  const [activo, setActivo] = useState('red');

  const alternar = () => {
    // Busca el índice actual y pasa al siguiente
    const proximoIndice = (colores.indexOf(activo) + 1) % colores.length;
    setActivo(colores[proximoIndice]);
  };

  const agregarPurpura = () => {
    if (!colores.includes('purple')) {
      setColores([...colores, 'purple']);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Lights */}
      <div style={{ background: '#333', padding: '10px', width: '60px', margin: 'auto' }}>
        {/*map: dibuja automáticamente un círculo por cada color que haya en la lista. */}
        {colores.map(color => ( 
          <div 
            key={color}
            style={{
              width: '50px', 
              height: '50px', 
              borderRadius: '50%',
              background: color,
              opacity: activo === color ? 1 : 0.2, // Si es el activo brilla, si no se opaca
              marginBottom: '10px'
            }}
          />
        ))}
      </div>

      {/* Botones */}
      <br />
      <button onClick={alternar}>Alternar Color</button>
      <button onClick={agregarPurpura}>Añadir Púrpura</button>
    </div>
  );
}

export default Semaforo;