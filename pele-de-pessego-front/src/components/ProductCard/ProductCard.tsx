import React, { FC, useState, useEffect } from 'react';
import { ProductCardWrapper } from './ProductCard.styled';
import Card from 'react-bootstrap/Card';
import ProductService from '../../services/ProductService';
import arrowProductCard from './../../assets/arrowProductCard.svg';
import { Link } from 'react-router-dom';
import CartService from '../../services/CartService';
import CartData from '../../types/CartData';

interface ProductCardProps {
   selectedType: string | null;
 }

const ProductCard: FC<ProductCardProps> = ({ selectedType }) => {

   const userLanguage = localStorage.getItem('language')
   const [products, setProducts] = useState<any[]>([]);
   const [cartProducts, setCartProducts] = useState<CartData[]>([]);

   useEffect(() => {
      CartService.getOpenCart()
        .then(response => {
          const cartItems: CartData[] = response.data.cart;
          setCartProducts(cartItems);
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
   }, []);

   useEffect(() => {
      ProductService.getAllProducts(selectedType || undefined)
        .then(response => {
          setProducts(response.data.product);
        })
        .catch(error => {
          console.error('Erro ao carregar produtos:', error);
        });
    }, [selectedType]);

   const isInCart = (productId: number) => {
      return cartProducts.some(item => item.productId === productId);
   };
   

   const getProductLink = (productId: number) => {
      if (isInCart(productId)) {
         const cartItem = cartProducts.find(item => item.productId === productId);
         return `/product/${productId}/edit/${cartItem?.quantity}`;
      } else {
         return `/product/${productId}`;
      }
   };

   return(
      <ProductCardWrapper data-testid="ProductCard">
         {products.map((product, index) => {
            const type = userLanguage === 'pt-BR' ? product.pt_type : product.en_type;
            
            return(
               <Link to={getProductLink(product.id)} style={{ textDecoration: 'none', color: 'inherit' }} key={index}>
                  <Card className="custom-card">
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
