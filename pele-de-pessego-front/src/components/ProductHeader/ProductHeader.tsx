import { FC } from 'react';
import { ProductHeaderWrapper } from './ProductHeader.styled';

interface ProductHeaderProps {}

const ProductHeader: FC<ProductHeaderProps> = () => (
 <ProductHeaderWrapper data-testid="ProductHeader">
   <div className="header">
      <div className="type">
         <span>Protetor Solar</span>
      </div>

      <div className="name">
         <p>Protetor Solar Facial Tripla Proteção Loção Pele Radiante FPS50</p>
      </div>

      <div className="brand">
         <span>Nivea</span>
      </div>
   </div>
 </ProductHeaderWrapper>
);

export default ProductHeader;
