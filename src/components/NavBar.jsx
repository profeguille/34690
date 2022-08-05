import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { myContext } from './HOCContext';
export default function NavBar() {
  const { logueado, setLogueado } = useContext(myContext);
  return (
    <div>
      <Link to={'/'}>Ir a Home</Link>
      <br />
      <Link to="/category/gala">Gala</Link>
      <br />
      <Link to="/category/deportivo">Deportivo</Link>
      <br />
      {logueado ? 'LOGUEADO!' : ':( no estas logueado'}
      <button onClick={() => setLogueado(!logueado)}>SALIR</button>
    </div>
  );
}
