import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import HOCContext from './components/HOCContext';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar';
import TestProducto from './components/TestProducto';
import TestProductos from './components/TestProductos';
import TestRender from './components/TestRender';

function App() {
  return (
    <>
      <HOCContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idProduto" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<p>404</p>} />
          </Routes>
          <h6>ACA VA EL FOOTER</h6>
        </BrowserRouter>
      </HOCContext>
    </>
  );
}

export default App;
