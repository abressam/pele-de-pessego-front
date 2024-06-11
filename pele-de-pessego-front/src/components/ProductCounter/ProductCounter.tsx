import { FC, useState } from 'react';
import { ProductCounterWrapper } from './ProductCounter.styled';

interface ProductCounterProps {
    price: number;
}

const ProductCounter: FC<ProductCounterProps> = ({price}) => {
  const [count, setCount] = useState(1);
  const priceIncrement = price; // obter preço do produto a partir do backend
  const [finalPrice, setPrice] = useState(price); // adicionar esse mesmo valor aqui para ser o inicial

  const increment = () => {
    setCount(count + 1);
    setPrice(finalPrice + priceIncrement);
  };

  const decrement = () => {
   if (count > 1) {
      setCount(count - 1);
      setPrice(finalPrice - priceIncrement);
    }  
   };

  return (
    <ProductCounterWrapper data-testid="ProductCounter">
      <div className="product-price">
         <span id="price">R$ {finalPrice.toFixed(2)}</span>

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
