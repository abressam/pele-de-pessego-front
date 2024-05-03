import React, { FC } from 'react';
import { CategoryBarWrapper, CategoryLink  } from './CategoryBar.styled';
import headerImage from './../../assets/headerImage.svg';

const CategoryBar: FC = () => (
   <div>
     <CategoryBarWrapper>
       <CategoryLink href="#">PERFUMARIA</CategoryLink>
       <CategoryLink href="#">MAQUIAGEM</CategoryLink>
       <CategoryLink href="#">CORPO E BANHO</CategoryLink>
       <CategoryLink href="#">CABELOS</CategoryLink>
       <CategoryLink href="#">SKINCARE</CategoryLink>
     </CategoryBarWrapper>
     <img src={headerImage} style={{ width: '100%', height: '100%', display: 'block', marginTop: '-100px' }}/>
   </div>
 );
 
export default CategoryBar;