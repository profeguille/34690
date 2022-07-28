import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    let productosHarcode = [
      { id: 100, name: "zapato nike", price: 100 },
      { id: 101, name: "zapato adidas", price: 150 },
      { id: 102, name: "cartera puma", price: 10 },
      { id: 103, name: "campera puma", price: 200 },
    ];

    const miPromesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHarcode);
      }, 2000);
    });

    miPromesa.then((res) => {
      setProductos(res);
    });
  }, []);

  return <ItemList productos={productos} />;
}
