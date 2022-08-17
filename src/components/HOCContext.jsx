import { useEffect, createContext, useState } from 'react';
import NavBar from './NavBar';
export const myContext = createContext();

export default function HOCContext({ children }) {
  const [cart, setCart] = useState([]);
  const [totalEnCarro, setTotalEnCarro] = useState(0);
  function addItem(item, cant) {
    let encontrado = false;
    let aux = cart.map((el) => {
      if (el.id == item.id) {
        encontrado = true;

        return { ...el, cant: el.cant + cant };
      } else {
        return el;
      }
    });
    if (!encontrado) {
      aux.push({ ...item, cant });
    }
    setCart(aux);
  }
  useEffect(() => {
    setTotalEnCarro(cart.reduce((total, item) => total + item.cant, 0));
  }, [cart]);

  return (
    <>
      <myContext.Provider value={{ cart, addItem, totalEnCarro }}>{children}</myContext.Provider>
    </>
  );
}
