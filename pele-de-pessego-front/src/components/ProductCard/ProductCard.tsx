import React, { FC, useState, useEffect } from 'react';
import { ProductCardWrapper } from './ProductCard.styled';
import Card from 'react-bootstrap/Card';
import ProductService from '../../services/ProductService';
import arrowProductCard from './../../assets/arrowProductCard.svg';
import { Link } from 'react-router-dom';

const ProductCard: FC = () => {

   const userLanguage = localStorage.getItem('language')

   const [products, setProducts] = useState<any[]>([]);

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
         {products.map((product, index) => {
            const type = userLanguage === 'pt-BR' ? product.pt_type : product.en_type;
            
            return(
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
               <Card className="custom-card" key={index}>
                  <Card.Body className="custom-card-style">
                     <Card.Img className="custom-card-img" src={`data:image/jpeg;base64,${product.image}`} />
                     <div className="product-type">
                        {type}
                     </div>
                     <div className="product-brand">
                        {product.brand}
                     </div>
                     <div className="product-price">
                        R$ {product.price}
                        <img src={arrowProductCard} alt="" />
                     </div>
                  </Card.Body>
               </Card>
            </Link>
         );
      })}
      </ProductCardWrapper>
      
   );
} 

export default ProductCard;
