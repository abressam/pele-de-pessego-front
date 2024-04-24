import { FC, useState } from 'react';
import { ProductCounterWrapper } from './ProductCounter.styled';

interface ProductCounterProps {}

const ProductCounter: FC<ProductCounterProps> = () => {
  const [count, setCount] = useState(1);
  const priceIncrement = 50; // obter preço do produto a partir do backend
  const [price, setPrice] = useState(50.00); // adicionar esse mesmo valor aqui para ser o inicial

  const increment = () => {
    setCount(count + 1);
    setPrice(price + priceIncrement);
  };

  const decrement = () => {
   if (count > 1) {
      setCount(count - 1);
      setPrice(price - priceIncrement);
    }  
   };

  return (
    <ProductCounterWrapper data-testid="ProductCounter">
      <div className="product-price">
         <span id="price">R$ {price.toFixed(2)}</span>

         <div className="counter">
            <button id="operator" onClick={decrement}> - </button>
            <span id="number"> {count} </span>
            <button id="operator" onClick={increment}> + </button>
         </div>
      </div>
    </ProductCounterWrapper>
  );
};

export default ProductCounter;
