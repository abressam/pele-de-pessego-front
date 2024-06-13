import { FC } from 'react';
import { ProductHeaderWrapper } from './ProductHeader.styled';

interface ProductHeaderProps {
   brand: string,
   pt_name: string,
   en_name: string,
   pt_type: string,
   en_type: string,
}

const ProductHeader: FC<ProductHeaderProps> = ({brand, pt_name, en_name, pt_type, en_type}) => {
   const userLanguage = localStorage.getItem('language')

   const name = userLanguage === 'pt-BR' ? pt_name : en_name;
   const type = userLanguage === 'pt-BR' ? pt_type : en_type;

   return(
      <ProductHeaderWrapper data-testid="ProductHeader">
        <div className="header">
           <div className="type">
              <span>{type}</span>
           </div>
     
           <div className="name">
              <p>{name}</p>
           </div>
     
           <div className="brand">
              <span>{brand}</span>
           </div>
        </div>
      </ProductHeaderWrapper>
     );
} 

export default ProductHeader;
