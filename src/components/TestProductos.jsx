import React, { useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
export default function TestProductos() {
  useEffect(() => {
    const db = getFirestore();

    const refCollectionProductos = collection(db, 'productos');

    getDocs(refCollectionProductos).then((res) => {
      let limpios = res.docs;

      limpios = limpios.map((producto) => {
        const productoBienFormado = { id: producto.id, ...producto.data() };

        return productoBienFormado;
      });

      console.log(limpios);
    });
  }, []);

  return <>TestProductos</>;
}
