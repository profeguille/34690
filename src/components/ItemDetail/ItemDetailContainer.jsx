import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState({});

  const { idProduto } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refADoc = doc(db, 'productos', idProduto);

    getDoc(refADoc).then((res) => {
      const objetoBienFormado = { id: res.id, ...res.data() };
      setProducto(objetoBienFormado);
    });
  }, [idProduto]);

  return <ItemDetail producto={producto} />;
}
