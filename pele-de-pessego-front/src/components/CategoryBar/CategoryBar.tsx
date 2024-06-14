import React, { FC, useEffect } from 'react';
import { CategoryBarWrapper, CategoryLink, ImageBody } from './CategoryBar.styled';
import headerImage from './../../assets/headerImage.svg';
import ProductCard from '../ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';
import { checkAdmin } from '../../utils/checkAdmin';

const CategoryBar: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    checkAdmin(navigate)
 }, [navigate]);

  return(
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
} 
 
export default CategoryBar;