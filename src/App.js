
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Products from './components/Cart/Cart.js';
import { CartProvider } from './context/CartContext';
import Login from './components/Login/Login'
import { AuthProvider } from './context/AuthContext';
import Checkout from './components/Checkout/Checkout';
import { createContext } from 'react';
import Counter from './components/ItemCount/ItemCount'; 
import { useState } from 'react';
function App() {
  
  return (   
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element ={ <ItemListContainer/>}  />
              <Route path='/category/:categoryId' element =    { <ItemListContainer />} />
              <Route path='/detail/:productId'    element =    {<ItemDetailContainer  />} />
              <Route path='/productsOnCart'       element =    {<Products  />} />
              <Route path='/login'       element =    {<Login  />} />
              <Route path='/checkout'       element =    {<Checkout  />} />            
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;