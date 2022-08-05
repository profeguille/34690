import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { myContext } from '../HOCContext';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  const { darkMode, setDarkMode } = useContext(myContext);

  const { idCategoria } = useParams();

  useEffect(() => {
    let productosHarcode = [
      { id: 100, name: 'zapato nike', price: 100, idCategoria: 'deportivo' },
      { id: 101, name: 'zapato adidas', price: 150, idCategoria: 'deportivo' },
      { id: 102, name: 'cartera channel', price: 10, idCategoria: 'gala' },
      { id: 103, name: 'campera puma', price: 200, idCategoria: 'deportivo' },
      { id: 104, name: 'campera DIOR', price: 200, idCategoria: 'gala' },
    ];

    const miPromesa = new Promise((res, rej) => {
      setTimeout(() => {
        if (!idCategoria) {
          res(productosHarcode);
        } else {
          res(productosHarcode.filter((producto) => producto.idCategoria === idCategoria));
        }
      }, 2000);
    });

    miPromesa.then((res) => {
      setProductos(res);
    });
  }, [idCategoria]);

  return (
    <div style={{ backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black', border: '1px solid red', padding: '10px', margin: '10px' }}>
      ITEM LIST CONTAINER
      <br />
      <ItemList productos={productos} />
    </div>
  );
}
