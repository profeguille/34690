import React from 'react';
import { myContext } from '../HOCContext';
import { useContext } from 'react';

export default function ItemDetail({ producto }) {
  const { addItem } = useContext(myContext);

  return (
    <div>
      {JSON.stringify(producto)}
      <img src={producto.img} alt={producto.name} />
      <button onClick={() => addItem(producto, 1)}>AGREGAR UNO!</button>
    </div>
  );
}
