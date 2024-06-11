import { FC } from 'react';
import { ProductHeaderWrapper } from './ProductHeader.styled';

interface ProductHeaderProps {
   brand: string,
   pt_name: string,
   en_name: string,
   pt_type: string,
   en_type: string,
}

const ProductHeader: FC<ProductHeaderProps> = ({brand, pt_name, en_name, pt_type, en_type}) => (
 <ProductHeaderWrapper data-testid="ProductHeader">
   <div className="header">
      <div className="type">
         <span>{pt_type}</span>
      </div>

      <div className="name">
         <p>{pt_name}</p>
      </div>

      <div className="brand">
         <span>{brand}</span>
      </div>
   </div>
 </ProductHeaderWrapper>
);

export default ProductHeader;
