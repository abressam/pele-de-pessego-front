import React, { FC } from 'react';
import { ProductImageWrapper } from './ProductImage.styled';

interface ProductImageProps {
  src: string; 
}
const ProductImage: FC<ProductImageProps> = ({ src }) => (
 <ProductImageWrapper data-testid="ProductImage">
   <img src={src} alt="" />
 </ProductImageWrapper>
);

export default ProductImage;
