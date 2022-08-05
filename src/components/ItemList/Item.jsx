import React, { useContext, useState } from 'react';
import { myContext } from '../HOCContext';

export default function Item({ producto }) {
  const { darkMode, setDarkMode } = useContext(myContext);

  return (
    <div style={{ backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black', border: '1px solid red', padding: '10px', margin: '10px' }}>
      ITEM
      <br />
      {JSON.stringify(producto)}
      <br />
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        CAMBIAR DARK MODE
      </button>
    </div>
  );
}
