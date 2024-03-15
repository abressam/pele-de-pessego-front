import React, { FC } from 'react';
import { ProductCardWrapper } from './ProductCard.styled';
import Card from 'react-bootstrap/Card';
import product01Image from './../../assets/product01.png'
import "bootstrap-icons/font/bootstrap-icons.css";

interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = () => (
 <ProductCardWrapper data-testid="ProductCard">
   <Card className="custom-card">
      <Card.Body className="custom-card-style">
         <Card.Img className="custom-card-img" src={product01Image} />
         <div className="product-type">
            <span>Tipo do produto</span>
         </div>
         <div className="product-brand">
            <span>Marca</span>
         </div>
         <div className="product-price">
            <span>R$ 29,99</span>
            <i className="bi bi-arrow-up-right-circle" style={{ fontSize: '32px' }}></i>
         </div>
      </Card.Body>
   </Card>
 </ProductCardWrapper>
);

export default ProductCard;
