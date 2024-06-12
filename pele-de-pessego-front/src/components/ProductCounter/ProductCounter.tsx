import { FC, useState, useEffect } from 'react';
import { ProductCounterWrapper } from './ProductCounter.styled';

interface ProductCounterProps {
    price: number;
    quantity: number;
    onCountChange: (count: number, finalPrice: number) => void;
}

const ProductCounter: FC<ProductCounterProps> = ({price, quantity, onCountChange }) => {
  const [count, setCount] = useState(quantity);
  const priceIncrement = price; // obter preço do produto a partir do backend
  const [finalPrice, setPrice] = useState(price * quantity); // adicionar esse mesmo valor aqui para ser o inicial

  const increment = () => {
    const newCount = count + 1;
    const newPrice = finalPrice + priceIncrement;
    setCount(newCount);
    setPrice(newPrice);
    onCountChange(newCount, newPrice);
  };

  const decrement = () => {
   if (count > 1) {
      const newCount = count - 1;
      const newPrice = finalPrice - priceIncrement;
      setCount(newCount);
      setPrice(newPrice);
      onCountChange(newCount, newPrice);
    }  
   };

  useEffect(() => {
    onCountChange(count, finalPrice);
  }, []);

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
