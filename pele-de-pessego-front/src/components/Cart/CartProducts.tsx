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

   const userLanguage = localStorage.getItem('language');
   const navigate = useNavigate();

   const [products, setProducts] = useState<ProductData[]>([]);
   const [isCartEmpty, setIsCartEmpty] = useState(false);
   const [totalPrice, setTotalPrice] = useState(0);

   useEffect(() => {
      checkJwt(navigate);
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

         if (cartItems.length === 0) {
            setIsCartEmpty(true);
            return;
         }
    
         // Fetch product details for each item in the cart
         const productDetailsPromises = cartItems.map(item =>
            ProductService.getProductById(item.productId)
              .then(productResponse => ({
                ...productResponse.data.product,
                quantity: item.quantity
              }))
         );
    
         // Update state with product details
         Promise.all(productDetailsPromises)
            .then(products => {
               setProducts(products);
               const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
               setTotalPrice(total);
            })
            .catch(error => console.error('Erro ao carregar detalhes dos produtos:', error));
        })
        .catch(error => {
         if (error.response && error.response.status === 404) {
            setIsCartEmpty(true);
         } else {
            console.error('Erro ao carregar produtos:', error);
         }
      });    
   }, []);

    const handleDeleteClick = (id: number) => {
      if (typeof id === 'number') {
         const confirmDelete = window.confirm('Tem certeza que deseja excluir este produto?');
         if (confirmDelete) {
           console.log(id);
           CartService.deleteCartProduct(id)
             .then(response => {
               console.log("Produto excluído com sucesso!");
               setProducts(prevProducts => {
                  const updatedProducts = prevProducts.filter(product => product.id !== id);
                  const total = updatedProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);
                  setTotalPrice(total);
                  return updatedProducts;
               });
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

    const handleSearchProductClick = () => {
      navigate(`/`);
    };

   return (
      <CartProductsWrapper data-testid="CartProducts">
         {isCartEmpty ? (
            <div className="empty-cart-message">
               <FormattedMessage id="Cart.empty" defaultMessage="Seu carrinho está vazio" />
               <div className="button-position">
                  <button onClick={handleSearchProductClick} className='custom-button'>
                     <div className="button-size">
                        <FormattedMessage id="CartButton.empty" defaultMessage="Adicionar ao carrinho" />
                     </div>
                  </button>
               </div>
            </div>
         ) : (
            <>
               {products.map((product, index) => {
                  const type = userLanguage === 'pt-BR' ? product.pt_type : product.en_type;
                  const name = userLanguage === 'pt-BR' ? product.pt_name : product.en_name;
                  const totalProductPrice = product.price * product.quantity;

                  return (
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
                                 <FormattedMessage id="ProductForm.price" />
                              </div>
                              <div className="product-price">
                                 R$ {product.price}
                              </div>
                           </div>

                           <div className="info second-info">
                              <div className="product-type">
                                 <FormattedMessage id="ProductForm.quantity" />
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
               <div className="product-price">
                  <FormattedMessage id="Cart.total" /> R$ {totalPrice}
               </div>
               <div className="button-position">
                  <button onClick={handleSearchProductClick} className='custom-button'>
                     <div className="buttoncart-size">
                        <FormattedMessage id="CartButton.empty" defaultMessage="Adicionar ao carrinho" />
                     </div>
                  </button>
               </div>
               <div className="button-position">
                  <button onClick={handleButtonClick} className='custom-button'>
                     <div className="button-size">
                        <div className="icon-wrapper">
                           <IoBagHandleSharp />
                        </div>
                        <FormattedMessage id="ProductButton.name" defaultMessage="Adicionar ao carrinho" />
                     </div>
                  </button>
               </div>
            </>
         )}
      </CartProductsWrapper>
   );
}

export default CartProducts;
