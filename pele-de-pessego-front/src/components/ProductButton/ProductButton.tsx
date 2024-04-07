import React, { FC } from 'react';
import { ProductButtonWrapper } from './ProductButton.styled';

interface ProductButtonProps {}

const ProductButton: FC<ProductButtonProps> = () => (
 <ProductButtonWrapper data-testid="ProductButton">
    ProductButton Component
 </ProductButtonWrapper>
);

export default ProductButton;
