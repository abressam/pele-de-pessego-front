import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { ProductDescriptionWrapper } from './ProductDescription.styled';

interface ProductDescriptionProps {}

const ProductDescription: FC<ProductDescriptionProps> = () => (
 <ProductDescriptionWrapper data-testid="ProductDescription">
   <div className="card">
      <div className="description-title">
         <FormattedMessage id="ProductDescription.title" defaultMessage="Sobre" />
      </div>

      <div className="description-text">
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quo, necessitatibus laudantium eum error natus architecto porro nulla quaerat quos dolorem praesentium laboriosam earum amet, mollitia, laborum qui sit eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quibusdam accusantium corporis id quae atque magnam. Provident, consequatur. Animi dicta asperiores voluptatibus alias accusantium ab voluptates architecto tempore repellendus excepturi?aaaaaaaaaaaaaaaaaaaa
         </p>
      </div>
   </div>
 </ProductDescriptionWrapper>
);

export default ProductDescription;
