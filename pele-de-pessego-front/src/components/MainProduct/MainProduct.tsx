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

const MainProduct: FC = () => {

   const { id } = useParams(); // Obtém o ID do produto da URL
   const [product, setProduct] = useState<ProductData>();

   useEffect(() => {
      if (id) {
         ProductService.getProductById(Number(id))
            .then(response => {
               setProduct(response.data.product);
            })
            .catch(error => {
               console.error('Erro ao carregar produto:', error);
            });
      }
   }, [id]);

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
                  />
                  <ProductDescription 
                     pt_desc={product.pt_desc} 
                     en_desc={product.en_desc} 
                  />
                  <ProductButton />
               </div>
            </div>
         )}
      </MainProductWrapper>
     );
} 

export default MainProduct;
