import { FC } from 'react';
import { ProductCardWrapper } from './ProductCard.styled';
import { FormattedMessage } from 'react-intl';
import Card from 'react-bootstrap/Card';
import product01Image from './../../assets/product01.png';
import "bootstrap-icons/font/bootstrap-icons.css";

interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = () => (
 <ProductCardWrapper data-testid="ProductCard">
   <Card className="custom-card">
      <Card.Body className="custom-card-style">
         <Card.Img className="custom-card-img" src={product01Image} />
         <div className="product-type">
            <FormattedMessage id="ProductCard.type" defaultMessage="Protetor solar" />
         </div>
         <div className="product-brand">
            <FormattedMessage id="ProductCard.brand" defaultMessage="Fashion" />
         </div>
         <div className="product-price">
            <FormattedMessage id="ProductCard.price" defaultMessage="R$ 29,99" />
            <i className="bi bi-arrow-up-right-circle" style={{ fontSize: '32px' }}></i>
         </div>
      </Card.Body>
   </Card>
 </ProductCardWrapper>
);

export default ProductCard;
