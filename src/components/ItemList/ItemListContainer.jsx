import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { myContext } from '../HOCContext';
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let refCollectionProductos;
    if (!idCategoria) {
      refCollectionProductos = collection(db, 'productos');
    } else {
      refCollectionProductos = query(collection(db, 'productos'), where('categoria', '==', idCategoria));
    }

    getDocs(refCollectionProductos).then((res) => {
      let limpios = res.docs.map((producto) => {
        const productoBienFormado = { id: producto.id, ...producto.data() };
        return productoBienFormado;
      });

      setProductos(limpios);
    });
  }, [idCategoria]);

  return (
    <div>
      ITEM LIST CONTAINER
      <br />
      <ItemList productos={productos} />
    </div>
  );
}
