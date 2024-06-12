import React, { FC, useState, useEffect } from 'react';
import { CartProductsWrapper } from './CartProducts.styled';
import Card from 'react-bootstrap/Card';
import ProductService from '../../services/ProductService';
import { FormattedMessage } from 'react-intl';
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import CartService from '../../services/CartService';
import CartData from '../../types/CartData';
import ProductData from '../../types/ProductData';
import { checkJwt } from '../../utils/checkJwt';
import { IoBagHandleSharp } from "react-icons/io5";

const CartProducts: FC = () => {

   const userLanguage = localStorage.getItem('language')
   const navigate = useNavigate();

   const [products, setProducts] = useState<ProductData[]>([]);

   useEffect(() => {
      checkJwt(navigate)
  }, [navigate]);

   useEffect(() => {
      const isAdmin = localStorage.getItem('isAdmin');
      if (isAdmin === 'true') {
          navigate('/productstock');
      }
  }, [navigate]);

   useEffect(() => {
      CartService.getOpenCart()
        .then(response => {
         const cartItems: CartData[] = response.data.cart;
    
          // Busca os detalhes de cada produto no carrinho
          const productDetailsPromises = cartItems.map(item =>
            ProductService.getProductById(item.productId)
              .then(productResponse => ({
                ...productResponse.data.product,
                quantity: item.quantity
              }))
          );
    
          // Atualiza o estado com os detalhes dos produtos
          Promise.all(productDetailsPromises)
            .then(products => setProducts(products))
            .catch(error => console.error('Erro ao carregar detalhes dos produtos:', error));
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
    }, []);

    const handleDeleteClick = (id: number) => {
      if (typeof id === 'number') {
         const confirmDelete = window.confirm('Tem certeza que deseja excluir este produto?');
         if (confirmDelete) {
           console.log(id);
           CartService.deleteCartProduct(id)
             .then(response => {
               console.log("Produto excluído com sucesso!");
               setProducts(prevProducts => prevProducts.filter(product => product.id !== id))
             })
             .catch(error => {
               console.error("Erro ao excluir o produto:", error);
             });
         }
       } else {
         console.error("ID do produto inválido:", id);
       }
    };
  
    const handleEditClick = (id: number, quantity: number) => {
      // Lógica para editar o produto
      console.log('Editar produto');
      navigate(`/product/${id}/edit/${quantity}`);
  
    };

    const handleButtonClick = () => {
      checkJwt(navigate);
    };

   return(
      <CartProductsWrapper data-testid="CartProducts">
         {products.map((product, index) => {
            const type = userLanguage === 'pt-BR' ? product.pt_type : product.en_type;
            const name = userLanguage === 'pt-BR' ? product.pt_name : product.en_name;
            const totalProductPrice = product.price * product.quantity;
            
            return(
               <Card className="custom-card" key={index}>
                  <Card.Body className="custom-card-style">
                     <Card.Img className="custom-card-img" src={`data:image/jpeg;base64,${product.image}`} />
                     <div className="first-info">
                        <div className="product-type">
                           {name}
                        </div>
                        <div className="product-brand">
                           {type}
                        </div>
                        <div className="product-brand">
                           {product.brand}
                        </div>
                     </div>


                     <div className="info second-info">
                        <div className="product-type">
                           <FormattedMessage id="ProductForm.price"/>
                        </div>

                        <div className="product-price">
                           R$ {product.price}
                        </div>
                     </div>

                     <div className="info second-info">
                        <div className="product-type">
                           <FormattedMessage id="ProductForm.quantity"/>
                        </div>

                        <div className="product-price">
                           {product.quantity}
                        </div>
                     </div>

                     <div className="info second-info">
                        <div className="product-type">
                           Total
                        </div>

                        <div className="product-price">
                           R$ {totalProductPrice}
                        </div>
                     </div>

                     <div className="info icons">
                        <button onClick={() => product.id && handleDeleteClick(product.id)} className="custom-button trash-button">
                           <Trash className='icons' size={20} />
                        </button>
                        <button onClick={() => product.id && handleEditClick(product.id, product.quantity)} className="custom-button pencil-button">
                           <PencilSquare className='icons' size={20} />
                        </button>
                     </div>

                  </Card.Body>
               </Card>
         );
      })}

      <div className="button-position">
         <button onClick={handleButtonClick} className='custom-button'>
            <div className="button-size">
            <div className="icon-wrapper">
               <IoBagHandleSharp />
            </div>
               <FormattedMessage id="ProductButton.name" defaultMessage="Adicionar ao carrinho" />
            </div>
         </button >
      </div>
      </CartProductsWrapper>
      
   );
} 

export default CartProducts;
