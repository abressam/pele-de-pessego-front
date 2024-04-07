import { FC } from 'react';
import ProductHeader from '../ProductHeader/ProductHeader';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductCounter from '../ProductCounter/ProductCounter';
import ProductButton from '../ProductButton/ProductButton';
import ProductImage from '../ProductImage/ProductImage';
import { MainProductWrapper } from './MainProduct.styled';

interface MainProductProps {}

const MainProduct: FC<MainProductProps> = () => (
 <MainProductWrapper data-testid="MainProduct">
   <div className="items">
      <div className="image">
         <ProductImage />
      </div>

      <div className="product">
         <ProductHeader />
         <ProductCounter />
         <ProductDescription />
         <ProductButton />
      </div>
   </div>
 </MainProductWrapper>
);

export default MainProduct;
