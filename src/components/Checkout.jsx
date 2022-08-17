import { collectionGroup } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default function Checkout() {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');

  const [idOrder, setIdOrder] = useState('');

  function terminarCompra() {
    const order = {
      buyer: { name, tel, email },
      items: [
        { id: 'ILnRJf6OpQo5EkTrrPVC', name: 'zapato nike', precio: 100, cant: 10 },
        { id: 'ILnRsdfsdfJf6OpQo5EkTrrPVC', name: 'zapato adidas', precio: 200, cant: 1 },
      ],
      total: 1200,
    };

    const db = getFirestore();
    const refCollection = collection(db, 'orders');

    addDoc(refCollection, order).then((res) => {
      setIdOrder(res.id);
    });
  }

  return (
    <div style={{ backgroundColor: 'lightgray' }}>
      <input type={'text'} placeholder="nombre" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <input type={'tel'} placeholder="celular" value={tel} onChange={(e) => setTel(e.target.value)} />
      <br />
      <input type={'email'} placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <br />
      <button onClick={terminarCompra}>Terminar Compra</button>
      <br />
      <br />
      <p>Id de tu compra: {idOrder}</p>
    </div>
  );
}
