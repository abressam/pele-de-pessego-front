import React, { FC } from 'react';
import { ProductGridWrapper } from './ProductGrid.styled';
import ProductCard from '../ProductCard/ProductCard';

// Supondo que você tenha uma lista de produtos
// const products = any[
//   /* Array de objetos de produtos */
// ];

const ProductGrid: FC = () => (
  <ProductGridWrapper>
    {/* {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))} */}
  </ProductGridWrapper>
);

export default ProductGrid;
