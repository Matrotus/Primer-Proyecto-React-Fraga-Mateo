
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">

      
      <Navbar />
      <ItemListContainer greeting='Bienvenido/a!'/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={ <ItemListContainer/>}  />
        <Route path='/category/:categoryId' element =    { <ItemListContainer />} />
        <Route path='/detail/:productId'    element =    {<ItemDetailContainer  />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
