import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { ProductDescriptionWrapper } from './ProductDescription.styled';

interface ProductDescriptionProps {
   en_desc: string;
   pt_desc: string;
}

const ProductDescription: FC<ProductDescriptionProps> = ({en_desc, pt_desc}) => (
 <ProductDescriptionWrapper data-testid="ProductDescription">
   <div className="card">
      <div className="description-title">
         <FormattedMessage id="ProductDescription.title" defaultMessage="Sobre" />
      </div>

      <div className="description-text">
         <p>
            {pt_desc}
         </p>
      </div>
   </div>
 </ProductDescriptionWrapper>
);

export default ProductDescription;
