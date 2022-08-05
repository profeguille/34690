import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HOCContext from './components/HOCContext';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar';

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
            <Route path="*" element={<p>404</p>} />
          </Routes>
          <h6>ACA VA EL FOOTER</h6>
        </BrowserRouter>
      </HOCContext>
    </>
  );
}

export default App;
