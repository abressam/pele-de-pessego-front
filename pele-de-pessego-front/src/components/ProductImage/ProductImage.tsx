import React, { FC } from 'react';
import product01Image from './../../assets/product01.png';
import { ProductImageWrapper } from './ProductImage.styled';

interface ProductImageProps {}

const ProductImage: FC<ProductImageProps> = () => (
 <ProductImageWrapper data-testid="ProductImage">
   <img src={product01Image} alt="" />
 </ProductImageWrapper>
);

export default ProductImage;
