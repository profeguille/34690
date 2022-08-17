import React from 'react';
import { useContext } from 'react';
import { myContext } from './HOCContext';

export default function Cart() {
  const { cart, totalEnCarro } = useContext(myContext);
  return (
    <div>
      Cart
      <br />
      {cart.map((item) => {
        return <h3>{item.cant + item.name}</h3>;
      })}
      <br />
      <br />
      <h1>{totalEnCarro}</h1>
    </div>
  );
}
