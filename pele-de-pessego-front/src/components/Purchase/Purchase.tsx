import React, { FC, useState, useEffect } from 'react';
import { PurchaseWrapper } from './Purchase.styled';
import { Card } from 'react-bootstrap';
import CartService from '../../services/CartService';
import ProductService from '../../services/ProductService';
import CustomerService from '../../services/CustomerService';
import ProductData from '../../types/ProductData';
import CustomerData from '../../types/CustomerData';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { CartProductsWrapper } from './../Cart/CartProducts.styled';
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import { IoBagHandleSharp } from "react-icons/io5";
import { StyledForm, StyledFormGroup, StyledLabel, StyledSelect, StyledInput } from './Purchase.styled';
import qrCodeImage from './../../assets/pix.png';
import httpPurchase from '../../common/http-purchase';
import { checkJwt } from '../../utils/checkJwt';
import PurchaseData from '../../types/PurchaseData';
import PurchaseService from '../../services/PurchaseService';

interface PurchaseProps { }

const Purchase: FC<PurchaseProps> = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<ProductData[]>([]);
  const [customer, setCustomer] = useState<CustomerData | null>(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: ''
  });

  const [customerId, setCustomerId] = useState<number | null>(null);
  const [parcelas, setParcelas] = useState('1');

  const userLanguage = localStorage.getItem('language');

  useEffect(() => {
    checkJwt(navigate);
  }, [navigate]);

  useEffect(() => {
    CartService.getOpenCart().then(response => {
      const cartItems = response.data.cart;
      const productDetailsPromises = cartItems.map((item: { productId: number; quantity: any; }) =>
        ProductService.getProductById(item.productId).then(productResponse => ({
          ...productResponse.data.product,
          quantity: item.quantity
        }))
      );

      Promise.all(productDetailsPromises).then(products => {
        setProducts(products);
        const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
        setTotalPrice(total);
      });
    });

    CustomerService.getCustomer().then(response => {
      setCustomer(response.data.customer);
    });
  }, []);

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handleParcelasChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setParcelas(event.target.value);
  };

  const handleCardDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({
      ...cardDetails,
      [event.target.name]: event.target.value
    });
  };

  const handlePayment = () => {
    const data: PurchaseData = {
      type: paymentMethod,
      parcel: parseInt(parcelas) > 1 ? true : false,
      qt_parcel: parseInt(parcelas),
      date: new Date(),
      price: totalPrice
    }

    PurchaseService.executePurchase(data).then(response => {
      console.log('Payment successful:', response.data);
      navigate('/success');
    })
    .catch(error => {
      console.error('Error while processing payment:', error);
    });
  };

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
    console.log('Editar produto');
    navigate(`/product/${id}/edit/${quantity}`);
  };

  return (
    <PurchaseWrapper data-testid="Purchase">
      <div className="payment-form">
        <h2><FormattedMessage id="Payment.title" defaultMessage="Payment Details" /></h2>
        <StyledForm>
          <StyledFormGroup>
            <StyledLabel htmlFor="paymentMethod"><FormattedMessage id="Payment.method" defaultMessage="Payment Method" /></StyledLabel>
            <StyledSelect id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
              <option value="creditCard">
                <FormattedMessage id="Payment.creditCard" defaultMessage="Credit Card" />
              </option>
              <option value="pix">
                <FormattedMessage id="Payment.pix" defaultMessage="PIX" />
              </option>
            </StyledSelect>
          </StyledFormGroup>

          {paymentMethod === 'creditCard' && (
            <>
              <StyledFormGroup>
                <StyledLabel htmlFor="cardNumber"><FormattedMessage id="Payment.cardNumber" defaultMessage="Card Number" /></StyledLabel>
                <StyledInput
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardDetailsChange}
                />
              </StyledFormGroup>

              <StyledFormGroup>
                <StyledLabel htmlFor="expiryDate"><FormattedMessage id="Payment.expiryDate" defaultMessage="Expiry Date" /></StyledLabel>
                <StyledInput
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={handleCardDetailsChange}
                  placeholder="MM/YY"
                />
              </StyledFormGroup>

              <StyledFormGroup>
                <StyledLabel htmlFor="cvv"><FormattedMessage id="Payment.cvv" defaultMessage="CVV" /></StyledLabel>
                <StyledInput
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardDetailsChange}
                />
              </StyledFormGroup>

              <StyledFormGroup>
                <StyledLabel htmlFor="cardHolder"><FormattedMessage id="Payment.cardHolder" defaultMessage="Card Holder" /></StyledLabel>
                <StyledInput
                  type="text"
                  id="cardHolder"
                  name="cardHolder"
                  value={cardDetails.cardHolder}
                  onChange={handleCardDetailsChange}
                />
              </StyledFormGroup>

              <StyledFormGroup>
                <StyledLabel htmlFor="parcelas"><FormattedMessage id="Payment.parcelas" defaultMessage="Installments" /></StyledLabel>
                <StyledSelect id="parcelas" value={parcelas} onChange={handleParcelasChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </StyledSelect>
              </StyledFormGroup>
            </>
          )}

          {paymentMethod === 'pix' && (
            <div>
              <p><FormattedMessage id="Payment.pixInstructions" defaultMessage="Scan the QR code below with your Pix app to complete the payment:" /></p>
              <img src={qrCodeImage} alt="Pix QR Code" style={{ width: '200px', height: '200px' }} />
            </div>
          )}
        </StyledForm>
      </div>

      <div className="purchase-summary">
        <h2><FormattedMessage id="Purchase.summary" defaultMessage="Purchase Summary" /></h2>
        {customer && (
          <Card className="customer-card">
            <Card.Body>
              <h4><FormattedMessage id="Customer.address" defaultMessage="Shipping Address" /></h4>
              <p>{customer.street}, {customer.number}</p>
              <p>{customer.neighbourhood}, {customer.city} - {customer.state}</p>
              <p>{customer.zipcode}</p>
              <p><FormattedMessage id="Customer.phone" defaultMessage="Phone" />: {customer.phone}</p>
              <h4 className='shipment'>Entrega em até 5 dias úteis - Sem frete</h4>
            </Card.Body>
          </Card>
        )}
        <h3><FormattedMessage id="Purchase.items" defaultMessage="Items" /></h3>
        <CartProductsWrapper>
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
            <button onClick={() => navigate(`/`)} className='custom-button'>
              <div className="buttoncart-size">
                <FormattedMessage id="CartButton.empty" />
              </div>
            </button>
          </div>
          <div className="button-position">
            <button onClick={handlePayment} className='custom-button'>
              <div className="button-size">
                <div className="icon-wrapper">
                  <IoBagHandleSharp />
                </div>
                <FormattedMessage id="Payment.pay" defaultMessage="Pay" />
              </div>
            </button>
          </div>
        </CartProductsWrapper>
      </div>
    </PurchaseWrapper>
  );
};

export default Purchase;
