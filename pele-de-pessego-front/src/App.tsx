import './App.css';
import Login from './components/Login/Login';

import ProductCard from './components/ProductCard/ProductCard';
import UserForm from './components/UserForm/UserForm';
import UserForm2 from './components/UserForm2/UserForm2.lazy';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserForm/>
      </header>
    </div>
  );
}

export default App;

