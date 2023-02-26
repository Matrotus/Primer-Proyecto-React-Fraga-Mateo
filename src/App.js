
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart.js';
import { CartProvider } from './context/CartContext';
import Login from './components/Login/Login'
import { AuthProvider } from './context/AuthContext';
import Checkout from './components/Checkout/Checkout';

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
              <Route path='/cart'       element =    {<Cart  />} />
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