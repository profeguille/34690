import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { myContext } from './HOCContext';
export default function NavBar() {
  const { cart, totalEnCarro } = useContext(myContext);
  return (
    <div>
      <Link to={'/'}>Ir a Home</Link>
      <br />
      <Link to="/category/indumentaria">indumentaria</Link>
      <br />
      <Link to="/category/fiesta">Fiesta</Link>
      <br />
      <Link to="/cart">Ver carrito</Link>
      <br />
      CARRITO: {totalEnCarro}
    </div>
  );
}
