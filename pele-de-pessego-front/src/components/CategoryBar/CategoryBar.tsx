import React, { FC } from 'react';
import { CategoryBarWrapper, CategoryLink, ImageBody } from './CategoryBar.styled';
import headerImage from './../../assets/headerImage.svg';
import ProductCard from '../ProductCard/ProductCard';

const CategoryBar: FC = () => (
   <div>
     <CategoryBarWrapper>
       <CategoryLink href="#">PERFUMARIA</CategoryLink>
       <CategoryLink href="#">MAQUIAGEM</CategoryLink>
       <CategoryLink href="#">CORPO E BANHO</CategoryLink>
       <CategoryLink href="#">CABELOS</CategoryLink>
       <CategoryLink href="#">SKINCARE</CategoryLink>
     </CategoryBarWrapper>
     <ImageBody>
      <img src={headerImage} />
     </ImageBody>
    <ProductCard />
   </div>
 );
 
export default CategoryBar;