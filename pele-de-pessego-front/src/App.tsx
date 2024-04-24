import './App.css';
import Login from './components/Login/Login';
import MainProduct from './components/MainProduct/MainProduct';

import MainProduct from './components/MainProduct/MainProduct';
import ProductCard from './components/ProductCard/ProductCard';
import UserForm from './components/UserForm/UserForm';
import CustomerForm from './components/CustomerForm/CustomerForm.lazy';
import Router from './routes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router/>
      </header>
    </div>
  );
}

export default App;

