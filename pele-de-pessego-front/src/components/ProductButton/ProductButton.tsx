import React, { FC, useEffect } from 'react';
import { IoBagHandleSharp } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';
import { ProductButtonWrapper } from './ProductButton.styled';
import { useNavigate } from 'react-router-dom';
import { checkJwt } from '../../utils/checkJwt';
import CartService from '../../services/CartService';
import CartData from '../../types/CartData';

interface ProductButtonProps {
  productId: number;
  count: number;
  finalPrice?: number;
}
const ProductButton: FC<ProductButtonProps> = ({ productId, count, finalPrice }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    checkJwt(navigate);
    
    const data: CartData = {
      productId,
      quantity: count,
      finalPrice: finalPrice
    };

    CartService.createOrUpdateCart(data)
    .then(response => {
      console.log('Produto adicionado ao carrinho com sucesso:', response.data);
      navigate("/cart");
    })
    .catch(error => {
      console.error('Erro ao adicionar o produto no carrinho:', error);
    });

  };

  return(
    <ProductButtonWrapper data-testid="ProductButton">
      <Button onClick={handleButtonClick}>
         <div className="items">
           <div className="icon-wrapper">
             <IoBagHandleSharp />
           </div>
         <FormattedMessage id="ProductButton.name" defaultMessage="Adicionar ao carrinho" />
         </div>
      </Button>
    </ProductButtonWrapper>
   );
} 

export default ProductButton;
