import React, { FC, useState, useEffect } from 'react';
import { ProductCardWrapper } from './ProductCard.styled';
import { FormattedMessage } from 'react-intl';
import Card from 'react-bootstrap/Card';
import ProductService from '../../services/ProductService';
import product01Image from './../../assets/product01.png';
import arrowProductCard from './../../assets/arrowProductCard.svg';
import { useNavigate } from 'react-router-dom';

const ProductCard: FC = () => {

   const [products, setProducts] = useState<any[]>([]);
   const navigate = useNavigate();

   useEffect(() => {
      ProductService.getAllProducts()
        .then(response => {
          setProducts(response.data.product);
        })
        .catch(error => {
          console.error('Erro ao carregar produtos:', error);
        });
    }, []);

   return(
      <ProductCardWrapper data-testid="ProductCard">
         {products.map((product, index) => (
            <Card className="custom-card" key={index}>
               <Card.Body className="custom-card-style">
                  <Card.Img className="custom-card-img" src={`data:image/jpeg;base64,${product.image}`} />
                  <div className="product-type">
                     {product.pt_type}
                  </div>
                  <div className="product-brand">
                     {product.brand}
                  </div>
                  <div className="product-price">
                     {product.price}
                     <img src={arrowProductCard} alt="" />
                  </div>
               </Card.Body>
            </Card>
         ))}
      </ProductCardWrapper>
   );
} 

export default ProductCard;
