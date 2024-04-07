import './App.css';

import ProductCard from './components/ProductCard/ProductCard';
import ProductDescription from './components/ProductDescription/ProductDescription';
import ProductCounter from './components/ProductCounter/ProductCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductCounter />
      </header>
    </div>
  );
}

export default App;

