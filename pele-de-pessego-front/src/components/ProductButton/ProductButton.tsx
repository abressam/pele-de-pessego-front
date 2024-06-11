import React, { FC, useEffect } from 'react';
import { IoBagHandleSharp } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';
import { ProductButtonWrapper } from './ProductButton.styled';
import { useNavigate } from 'react-router-dom';
import { checkJwt } from '../../utils/checkJwt';

interface ProductButtonProps {}

const ProductButton: FC<ProductButtonProps> = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    checkJwt(navigate);
    // Aqui você pode adicionar o restante da lógica para adicionar ao carrinho, se necessário
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
