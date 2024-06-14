import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductHeader from '../ProductHeader/ProductHeader';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductCounter from '../ProductCounter/ProductCounter';
import ProductButton from '../ProductButton/ProductButton';
import ProductImage from '../ProductImage/ProductImage';
import { MainProductWrapper } from './MainProduct.styled';
import ProductService from '../../services/ProductService';
import ProductData from '../../types/ProductData';
import { checkAdmin } from '../../utils/checkAdmin';
import { useNavigate } from 'react-router-dom';
import { handleApiResponse } from '../../utils/checkInvalidSession';

const MainProduct: FC = () => {
   const navigate = useNavigate();

   const { id, quantity } = useParams<{ id: string, quantity?: string }>(); // Obtém o ID e a quantidade do produto da URL
   const [count, setCount] = useState(1);
   const [product, setProduct] = useState<ProductData>();
   const [finalPrice, setFinalPrice] = useState(0);

   useEffect(() => {
      checkAdmin(navigate)
   }, [navigate]);

   useEffect(() => {
      if (id) {
         ProductService.getProductById(Number(id))
            .then(response => {
               setProduct(response.data.product);
            })
            .catch(error => {
               handleApiResponse(error, navigate);
               console.error('Erro ao carregar produto:', error);
            });
      }
   }, [id]);

   const handleCountChange = (newCount: number, newFinalPrice: number) => {
      setCount(newCount);
      setFinalPrice(newFinalPrice);
    };

   return(
      <MainProductWrapper data-testid="MainProduct">
         {product && (
            <div className="items">
               <div className="image">
                  <ProductImage src={`data:image/jpeg;base64,${product.image}`} />
               </div>

               <div className="product">
                  <ProductHeader 
                     brand={product.brand} 
                     pt_name={product.pt_name}
                     en_name={product.en_name}
                     pt_type={product.pt_type}
                     en_type={product.en_type}
                  />
                  <ProductCounter 
                     price={product.price}
                     quantity={quantity ? parseInt(quantity) : 1} 
                     onCountChange={handleCountChange} 
                  />
                  <ProductDescription 
                     pt_desc={product.pt_desc} 
                     en_desc={product.en_desc} 
                  />
                  {product.id && (
                  <ProductButton 
                     productId={product.id} 
                     count={count}
                     finalPrice={finalPrice}
                  />
                  )}
               </div>
            </div>
         )}
      </MainProductWrapper>
     );
} 

export default MainProduct;
