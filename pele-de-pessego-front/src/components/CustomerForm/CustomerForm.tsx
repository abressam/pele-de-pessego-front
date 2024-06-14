import React, { FC, useEffect, useState } from 'react';
import { CustomerFormWrapper } from './CustomerForm.styled';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import CustomerData from '../../types/CustomerData';
import CustomerService from '../../services/CustomerService';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkAdmin } from '../../utils/checkAdmin';

const CustomerForm: FC = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const [isUpdate, setIsUpdate] = useState(false);
   const { register, handleSubmit, setValue, setFocus, reset, watch } = useForm<CustomerData>();

   useEffect(() => {
      checkAdmin(navigate)
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

   const checkCEP = async (e: React.FocusEvent<HTMLInputElement>) => {
      const cep = e.target.value.replace(/\D/g, '');
      const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;

      if (cep.length !== 8 || !cepRegex.test(cep)) {
         // Se o CEP não tiver 8 dígitos, limpa todos os campos e exibe alerta
         setValue('street', '');
         setValue('city', '');
         setValue('state', '');
         setValue('neighbourhood', '');
         setValue('zipcode', '');
         window.alert('CEP inválido. Por favor, verifique o CEP digitado.');
         return; // Sai da função
      }

      try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      console.log(response)
      const data = await response.json();

      if (response.ok) {
         setValue('street', data.logradouro);
         setValue('city', data.localidade);
         setValue('state', data.uf);
         setValue('neighbourhood', data.bairro);

         if (data.logradouro === '') {
            // Se o logradouro não for encontrado, foca no campo street
            setFocus('street');
            window.alert('CEP não encontrado. Por favor, verifique o CEP digitado.');
         } else {
            // Caso contrário, foca no próximo campo (por exemplo, number)
            setFocus('number');
         }
      } else {
         // Caso o CEP não seja encontrado, exibe um alerta e limpa os campos
         window.alert('CEP não encontrado. Por favor, verifique o CEP digitado.');
         setValue('street', '');
         setValue('city', '');
         setValue('state', '');
         setValue('neighbourhood', '');
      }
      } catch (error) {
         console.error('Erro ao buscar informações do CEP:', error);
         window.alert('Ocorreu um erro ao buscar informações do CEP.');
      }
   };

   const checkPhone = async (e: React.FocusEvent<HTMLInputElement>) => {
      const phone = e.target.value;
      const phoneRegex = /^[1-9]{2}9[0-9]{8}$/;

      if (phone.length !== 11 || !phoneRegex.test(phone)) {
         setValue('phone', '');
         window.alert('Número de telefone inválido. Por favor, verifique o telefone digitado.');
         return;
      }
   };

   const checkState = async (e: React.FocusEvent<HTMLInputElement>) => {
      const state = e.target.value.toUpperCase();
      const stateRegex = /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/;
   
      if (!stateRegex.test(state)) {
         setValue('state', '');
         window.alert('Sigla do estado inválida. Por favor, verifique a sigla digitada.');
      }
   };

   const handleCancel = () => {
      navigate('/customerprofile');
    };  

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
     <Form.Control 
     className='input'
     maxLength={11}
     type="text" {...register("cpf", { required: true })}/>
  </Form.Group>&emsp;

  <Form.Group controlId="zipcode">
        <Form.Label className='label'>
           <FormattedMessage id="CustomerForm.zipcode"/>
        </Form.Label><br/>
        <Form.Control 
        className='input' 
        type="text"
        placeholder='59280010'
        maxLength={8}
           {...register("zipcode", { required: true })} onBlur={checkCEP} />
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
        <Form.Control 
        className='input' 
        type="text" {...register("state", { required: true })}
        onBlur={checkState}
        />
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
        <Form.Control
            className='input'
            placeholder='21985678423'
            type="text"
            maxLength={11}
            {...register("phone", { required: true })}
            onBlur={checkPhone}
          />
        </Form.Group><br/><br/>

  <div className='divButton'>

      {isUpdate && (
            <Button variant="secondary" onClick={handleCancel}>
              <FormattedMessage id="Button.cancel" defaultMessage="Cancelar" />
            </Button>
      )}

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
