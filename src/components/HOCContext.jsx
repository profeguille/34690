import { createContext, useState } from 'react';
import NavBar from './NavBar';
export const myContext = createContext();

export default function HOCContext({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [logueado, setLogueado] = useState(true);

  // const [cart, setCart] = useState(true);
  /* 
  addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
  {
    if no lo tiene
    setCart cart.push item con su cantidad
    sino
    setCart cambia la cantidad
  }
removeItem(itemId) // Remover un item del cart por usando su id
//{filter}
clear() // Remover todos los items
//setcart([])
isInCart:(id) => i | -1 
{
    find / findOne
}
*/

  return (
    <>
      <myContext.Provider value={{ darkMode, setDarkMode, logueado, setLogueado /* cart, removeItem,  clear, isInCart */ }}>{children}</myContext.Provider>
    </>
  );
}
