import './App.css';

import ProductCard from './components/ProductCard/ProductCard';
import ProductDescription from './components/ProductDescription/ProductDescription';
import ProductCounter from './components/ProductCounter/ProductCounter';
import ProductHeader from './components/ProductHeader/ProductHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductHeader />
      </header>
    </div>
  );
}

export default App;

