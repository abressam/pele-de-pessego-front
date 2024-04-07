import './App.css';

import ProductCard from './components/ProductCard/ProductCard';
import ProductDescription from './components/ProductDescription/ProductDescription';
import ProductCounter from './components/ProductCounter/ProductCounter';
import ProductHeader from './components/ProductHeader/ProductHeader';
import ProductButton from './components/ProductButton/ProductButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductButton />
      </header>
    </div>
  );
}

export default App;

