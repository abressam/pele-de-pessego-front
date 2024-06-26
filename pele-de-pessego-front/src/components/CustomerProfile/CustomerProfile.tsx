import React, { FC, useEffect, useState } from 'react';
import { CustomerProfileWrapper } from './CustomerProfile.styled';
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import UserFormService from '../../services/UserFormService';
import CustomerService from '../../services/CustomerService';
import CustomerData from '../../types/CustomerData';
import PurchaseService from '../../services/PurchaseService';
import { checkAdmin } from '../../utils/checkAdmin';
import { handleApiResponse } from '../../utils/checkInvalidSession';

interface CustomerProfile { }

const CustomerProfile: FC = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<{ name: string, email: string, is_admin: boolean } | null>(null);
  const [customer, setCustomer] = useState<CustomerData | null>(null);
  const [showButton, setShowButton] = useState(true);
  const [purchases, setPurchases] = useState<any[]>([]);

  useEffect(() => {
    checkAdmin(navigate)
 }, [navigate]);

  useEffect(() => {
    checkAdmin(navigate)
 }, [navigate]);

  useEffect(() => {
    UserFormService.getUser()
      .then(response => {
        setUser(response.data.user);
      })
      .catch(error => {
        handleApiResponse(error, navigate);
        console.error('Erro ao carregar os dados do usuário:', error);
      });
  }, []);

  useEffect(() => {
    CustomerService.getCustomer()
      .then(response => {
        if (response.status === 404) {
          setCustomer(null);
        } else {
          setCustomer(response.data.customer);
          setShowButton(false);
        }
      })
      .catch(error => {
        handleApiResponse(error, navigate);
        console.error('Erro ao carregar os dados do cliente:', error);
      });
  }, []);

  useEffect(() => {
    PurchaseService.getPurchases()
      .then(response => {
        console.log("resposta compras:")
        console.log(response)
        setPurchases(response.data.purchases);
      })
      .catch(error => {
        console.error('Erro ao carregar compras:', error);
      });
  }, []);

  const handleEditClickUser = () => {
    navigate(`/signup/edit`, { state: user });
  };

  const handleDeleteClickUser = () => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir este perfil? A ação é permanente!');
    if (confirmDelete) {
      UserFormService.deleteUser()
        .then(response => {
          localStorage.removeItem('jwt')
          localStorage.removeItem('isAdmin')
          navigate(`/`);
        })
        .catch(error => {
          handleApiResponse(error, navigate);
          console.error("Erro ao excluir o usuário:", error);
        });
    }
  };

  const handleCreateCustumer = () => {
    navigate(`/customerform`);
  }

  const handleEditCustomerClick = () => {
    navigate(`/customerform`, { state: customer });
  }

  const handleCartClick = () => {
    navigate(`/cart`);
  }

  const handleHistoryClick = () => {
    navigate(`/history`);
  }

  const handleDeleteCustomerClick = () => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir este endereço e contato?');
    if (confirmDelete) {
      CustomerService.deleteCustomer()
        .then(response => {
          console.log("Usuário cliente excluído com sucesso!");
          setCustomer(response.data.customer)
        })
        .catch(error => {
          handleApiResponse(error, navigate);
          console.error("Erro ao excluir usuário cliente:", error);
        });
    }
  }

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const adjustedDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  
    return adjustedDate.toLocaleDateString(navigator.language, options);
  };

  return (
    <CustomerProfileWrapper data-testid="CustomerProfile">
      <div className='header'>
        <div className="info icons">
          <div className="button-address">
            <button className='custom-button button-size' onClick={() => handleCartClick()}>
              <FormattedMessage id="CustomerProfile.cartbutton" />
            </button>
          </div>
        </div>
        <div className="button-position">
          <button onClick={() => handleDeleteClickUser()}
            className='custom-button button-size delete-button'>
            <FormattedMessage id="CustomerProfile.delete" />
          </button>
        </div>
      </div>

      <div className='general-container'>
        <div className='infos-customer'>
          {user && (
            <Card className="custom-card">
              <Card.Body className="custom-card-style">
                <div className="first-info">
                  <div className="product-type">
                    {user.name}
                  </div>
                  <div className="product-brand">
                    {user.email}
                  </div>
                </div>
                <div className="info icons">
                  <button onClick={() => handleEditClickUser()} className="custom-button pencil-button">
                    <PencilSquare className='icons' size={20} />
                  </button>
                </div>
              </Card.Body>
            </Card>
          )}

          {showButton && !customer && (
            <Card className="custom-card">
              <Card.Body className="custom-card-style">
                <div className="first-info">
                  <div className="product-type">
                    <FormattedMessage id="CustomerProfile.title" />
                  </div>
                  <div className="info icons">
                    <div className="button-address">
                      <button className='custom-button button-size' onClick={() => handleCreateCustumer()}>
                        <FormattedMessage id="Buttom.address" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          )}


          {!showButton && customer && (
            <Card className="custom-card">
              <Card.Body className="custom-card-style">
                <div className="first-info">
                  <div className="product-type">
                    <FormattedMessage id="CustomerProfile.title" />
                  </div>
                  <div className="product-brand">
                    <FormattedMessage id="CustomerForm.zipcode" />
                    <span>{customer.zipcode}</span>
                  </div>
                  <div className="product-brand">
                    <FormattedMessage id="CustomerForm.city" />
                    <span>{customer.city}</span>
                  </div>
                  <div className="product-brand">
                    <FormattedMessage id="CustomerForm.state" />
                    <span>{customer.state}</span>
                  </div>
                  <div className="product-brand">
                    <FormattedMessage id="CustomerForm.neighbourhood" />
                    <span>{customer.neighbourhood}</span>
                  </div>
                  <div className="product-brand">
                    <FormattedMessage id="CustomerForm.street" />
                    <span>{customer.street}</span>
                  </div>
                  <div className="product-brand">
                    <FormattedMessage id="CustomerForm.number" />
                    <span>{customer.number}</span>
                  </div>
                  <div className="product-brand">
                    <FormattedMessage id="CustomerForm.complement" />
                    <span>{customer.complement}</span>
                  </div>
                  <div className="product-brand">
                    <FormattedMessage id="CustomerForm.phonenumber" />
                    <span>{customer.phone}</span>
                  </div>
                  <div className="product-brand">
                    <FormattedMessage id="UserForm.cpf" />
                    <span>{customer.cpf}</span>
                  </div>
                </div>
                <div className="info icons">
                  <button className="custom-button trash-button">
                    <Trash onClick={() => handleDeleteCustomerClick()} className='icons' size={20} />
                  </button>
                  <button className="custom-button pencil-button">
                    <PencilSquare onClick={() => handleEditCustomerClick()} className='icons' size={20} />
                  </button>
                </div>
              </Card.Body>
            </Card>
          )}
        </div>
        <Card className="custom-card">
          <Card.Body className="custom-card-style">
            <div className="first-info">
              <div className="product-type">
                <FormattedMessage id="CustomerProfile.cart" />
              </div>
              <div className="purchase-list" style={{ maxHeight: '370px', overflowY: 'auto' }}>
                {purchases.map((purchase, index) => {
                    const pricePurchase = purchase.price
                  return (
                    <Card className="purchase-card">
                      <Card.Body>
                        <div>
                          <FormattedMessage id="PurchaseDate.customer" />
                          {formatDate(purchase.date)}
                        </div>
                        <div>
                          <FormattedMessage id="PurchasePrice.customer" />
                          R$ {pricePurchase.toFixed(2)}
                        </div>

                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </div>
                        
          </Card.Body>

          <div className="button-position">
              <button onClick={handleHistoryClick} className='custom-button'>
                <div className="button-size">
                  <FormattedMessage id="Button.history" />
                </div>
              </button>
            </div>

        </Card>
      </div>

    </CustomerProfileWrapper>
  );
}

export default CustomerProfile;
