import React, { FC, useEffect, useState } from 'react';
import { CustomerFormWrapper } from './CustomerForm.styled';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import CustomerData from '../../types/CustomerData';
import CustomerService from '../../services/CustomerService';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';

const CustomerForm: FC = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const [isUpdate, setIsUpdate] = useState(false);
   const { register, handleSubmit, setValue, setFocus, reset, watch } = useForm<CustomerData>();

   useEffect(() => {
      const isAdmin = localStorage.getItem('isAdmin');
      if (isAdmin === 'true') {
        navigate('/productstock');
      }
    }, [navigate]);

    
  useEffect(() => {
      if (location.state) {
      const customerData = location.state as CustomerData;
      setValue('cpf', customerData.cpf);
      setValue('phone', customerData.phone);
      setValue('zipcode', customerData.zipcode);
      setValue('city', customerData.city);
      setValue('complement', customerData.complement);
      setValue('street', customerData.street);
      setValue('number', customerData.number);
      setValue('neighbourhood', customerData.neighbourhood);
      setValue('state', customerData.state);
      setIsUpdate(true);
      }
   }, [location.state, setValue]);

  const initialCustomerState: CustomerData = {
    cpf: "",
    phone: "",
    zipcode: "",
    city: "",
    complement: "",
    street: "",
    number: 0,
    neighbourhood: "",
    state: ""
  };

  const onSubmit = (data: CustomerData) => {
    console.log(data);

    data.number = Number(data.number);

    CustomerService.createCustomer(data)
    .then((response: any) => {
      console.log('Usuário cliente criado com sucesso:', response.data);
      reset(initialCustomerState);
      navigate(`/customerprofile`);
    })
    .catch(error => {
      console.error('Erro ao criar usuário cliente:', error);
    });

  };

  const checkCEP = (e: { target: { value: string; }; }) => {
     const cep = e.target.value.replace(/\D/g, '');
     if (cep === '') {
      // Se estiver vazio, limpa os valores dos campos
      setValue('street', '');
      setValue('city', '');
      setValue('state', '');
      setValue('neighbourhood', '');
      return; // Sai da função
    } else{
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res=> res.json()).then(data=> {
      // console.log(data);
      setValue('street', data.logradouro);
      setValue('city', data.localidade);
      setValue('state', data.uf);
      setValue('neighbourhood', data.bairro);
      if(data.logradouro === ''){
        setFocus('street');
      }else{
        setFocus('number');
      }
      });
    }  
   }

   const cpf = watch("cpf");
   const zipcode = watch("zipcode");
   const street = watch("street");
   const number = watch("number");
   const city = watch("city");
   const state = watch("state");
   const neighbourhood = watch("neighbourhood");
   const phone = watch("phone");
 
   const isFormValid = () => {
      return cpf && zipcode && street && number && city && state && neighbourhood && phone;
   };

return(
  <CustomerFormWrapper data-testid="CustomerForm">
  <Form className='customerForm' id="customerForm" onSubmit={handleSubmit(onSubmit)}>

  <Form.Group controlId="cpf">
     <Form.Label className='label'>
        <FormattedMessage id="UserForm.cpf"/>
     </Form.Label><br/>
     <Form.Control className='input' type="text" {...register("cpf", { required: true })}/>
  </Form.Group>&emsp;

  <Form.Group controlId="zipcode">
        <Form.Label className='label'>
           <FormattedMessage id="CustomerForm.zipcode"/>
        </Form.Label><br/>
        <Form.Control className='input' type="text"
           {...register("zipcode", { required: true })} onBlur={checkCEP}/>
        </Form.Group><br/>

  <Form.Group controlId="street">
        <Form.Label className='label'>
           <FormattedMessage id="CustomerForm.street"/>
        </Form.Label><br/>
        <Form.Control className='inputStreet' type="text" {...register("street", { required: true })}/>
  </Form.Group><br/>

  <Form.Group controlId="number">
        <Form.Label className='label'>
           <FormattedMessage id="CustomerForm.number"/>
        </Form.Label><br/>
        <Form.Control className='input' type="text" {...register("number", { required: true })}/>
  </Form.Group>&emsp;

  <Form.Group controlId="complement">
        <Form.Label className='label'>
           <FormattedMessage id="CustomerForm.complement"/>
        </Form.Label><br/>
        <Form.Control className='input' type="text" {...register("complement", { required: false })}/>
  </Form.Group><br/>

  <Form.Group controlId="city">
        <Form.Label className='label'>
           <FormattedMessage id="CustomerForm.city"/>
        </Form.Label><br/>
        <Form.Control className='input' type="text" {...register("city", { required: true })}/>
  </Form.Group>&emsp;

  <Form.Group controlId="state">
        <Form.Label className='label'>
           <FormattedMessage id="CustomerForm.state"/>
        </Form.Label><br/>
        <Form.Control className='input' type="text" {...register("state", { required: true })}/>
  </Form.Group><br/>

  <Form.Group controlId="neighbourhood">
        <Form.Label className='label'>
           <FormattedMessage id="CustomerForm.neighbourhood"/>
        </Form.Label><br/>
        <Form.Control className='input' type="text" {...register("neighbourhood", { required: true })}/>
  </Form.Group>&emsp;

  <Form.Group controlId="phone">
        <Form.Label className='label'>
           <FormattedMessage id="CustomerForm.phonenumber"/>
        </Form.Label><br/>
        <Form.Control className='input' type="text" {...register("phone", { required: true })}/>
  </Form.Group><br/><br/>

  <div className='divButton'>
    <Button 
      variant="primary" 
      type="submit" 
      form="customerForm"
      disabled={!isFormValid()} 
      className={isFormValid() ? '' : 'disabled-button'}
    >
      {isUpdate ? (
         <FormattedMessage id="Buttom.update" defaultMessage="Atualizar" />
      ) : (
         <FormattedMessage id="Buttom.address" />
      )}  
    </Button>
  </div>
  
  </Form>
  </CustomerFormWrapper>
  
);
}

export default CustomerForm;
