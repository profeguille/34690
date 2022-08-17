import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../HOCContext';

export default function Item({ producto }) {
  return (
    <Link to={'/item/' + producto.id}>
      <div>
        ITEM
        <br />
        {JSON.stringify(producto)}
        <br />
      </div>
    </Link>
  );
}
