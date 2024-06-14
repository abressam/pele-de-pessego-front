import React, { FC, useEffect, useState } from 'react';
import { CategoryBarWrapper, CategoryLink, ImageBody } from './CategoryBar.styled';
import headerImage from './../../assets/headerImage.svg';
import ProductCard from '../ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { checkAdmin } from '../../utils/checkAdmin';

const CategoryBar: FC = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  useEffect(() => {
    checkAdmin(navigate)
 }, [navigate]);

  const handleCategoryClick = (type: string) => {
    setSelectedType(type);
  };

  return(
    <div>
      <CategoryBarWrapper>
        <CategoryLink onClick={() => handleCategoryClick('')}>
          <FormattedMessage id="CategoryBar.all" />
        </CategoryLink>
        <CategoryLink onClick={() => handleCategoryClick('Perfumaria')}>
          <FormattedMessage id="CategoryBar.perfumary" />
        </CategoryLink>
        <CategoryLink onClick={() => handleCategoryClick('Maquiagem')}>
          <FormattedMessage id="CategoryBar.makeup" />
        </CategoryLink>
        <CategoryLink onClick={() => handleCategoryClick('Corpo e Banho')}>
          <FormattedMessage id="CategoryBar.bodyandbath" />
        </CategoryLink>
        <CategoryLink onClick={() => handleCategoryClick('Cabelo')}>
          <FormattedMessage id="CategoryBar.hair" />
        </CategoryLink>
        <CategoryLink onClick={() => handleCategoryClick('Cuidados com a pele')}>
          <FormattedMessage id="CategoryBar.skincare" />
        </CategoryLink>
      </CategoryBarWrapper>
      <ImageBody>
       <img src={headerImage} />
      </ImageBody>
     <ProductCard selectedType={selectedType} />
    </div>
  );
} 
 
export default CategoryBar;