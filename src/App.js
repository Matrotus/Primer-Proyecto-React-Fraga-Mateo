
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Bienvenido/a!'/>
    </div>
  );
}

export default App;
