import React, { useEffect, useState } from 'react';
import CosasFijas from './CosasFijas';
import Item from './ItemList/Item';

export default function TestRender() {
  const [nombre, setnombre] = useState('');
  const [apellido, setapellido] = useState('');
  console.log('render nombre' + nombre);
  return (
    <>
      <p>HOla mundo</p>
      <br />
      <input type={'text'} value={nombre} onChange={(e) => setnombre(e.target.value)} />
      <br />
      <input type={'text'} value={apellido} onChange={(e) => setapellido(e.target.value)} />
      <br />
      <input type={'text'} />
      <br />
      <input type={'text'} />
      <br />
      <input type={'text'} />
      <br />
      <input type={'text'} />
      <br />
      <button>ENVIAR!</button>
      <CosasFijas />
    </>
  );
}
