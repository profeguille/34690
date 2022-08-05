import React from 'react';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  /* //{}
  const [productos, setProductos] = useState([]);

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
        //entregar un solo producto no un array
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
  }, [idCategoria]); */

  return <ItemDetail producto={{}} />;
}
