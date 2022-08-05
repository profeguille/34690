import React from 'react';
import Item from './Item';
import { useState } from 'react';

export default function ItemList({ productos }) {
  return (
    <>
      <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
        ITEM LIST
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
}
