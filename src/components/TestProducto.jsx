import React, { useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
export default function TestProducto() {
  useEffect(() => {
    const db = getFirestore();

    const refADoc = doc(db, 'productos', 'YpxPLL7wxq2pl2p5TZxf');
    getDoc(refADoc).then((res) => {
      const objetoBienFormado = { id: res.id, ...res.data() };
      console.log(objetoBienFormado);
    });
  }, []);

  return <>TestProducto</>;
}
