import React, { FC, useEffect, useState } from 'react';
import { CustomerProfileWrapper } from './CustomerProfile.styled';
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import UserFormService from '../../services/UserFormService';
import CustomerService from '../../services/CustomerService';
import CustomerData from '../../types/CustomerData';

interface CustomerProfile {}

const initialCustomerData: CustomerData = {
  zipcode: "",
  city: "",
  state: "",
  neighbourhood: "",
  street: "",
  number: 0,
  complement: "",
  phone: "",
  cpf: "",
};

const CustomerProfile: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin === 'true') {
      navigate('/productstock');
    }
  }, [navigate]);

  const [user, setUser] = useState<{ name: string, email: string, is_admin: boolean } | null>(null);
  const [customer, setCustomer] = useState<CustomerData>(initialCustomerData);

  useEffect(() => {
    UserFormService.getUser()
      .then(response => {
        setUser(response.data.user);
      })
      .catch(error => {
        console.error('Erro ao carregar os dados do usuário:', error);
      });
  }, []);

  useEffect(() => {
    CustomerService.getCustomer()
      .then(response => {
        if (response.status === 404) {
          setCustomer(initialCustomerData);
        } else {
          setCustomer(response.data.customer);
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          setCustomer(initialCustomerData);
        } else {
          console.error('Erro ao carregar os dados do cliente:', error);
        }
      });
  }, []);

  const handleEditClickUser = () => {
    navigate(`/signup/edit`, { state: user });
  };

  return (
    <CustomerProfileWrapper data-testid="CustomerProfile">
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
              <Trash className='icons' size={20} />
            </button>
            <button className="custom-button pencil-button">
              <PencilSquare className='icons' size={20} />
            </button>
          </div>
        </Card.Body>
      </Card>

      <div className="button-position">
        <button className='custom-button button-size'>
          <FormattedMessage id="CustomerProfile.delete" defaultMessage="Adicionar ao carrinho" />
        </button>
      </div>
    </CustomerProfileWrapper>
  );
}

export default CustomerProfile;
