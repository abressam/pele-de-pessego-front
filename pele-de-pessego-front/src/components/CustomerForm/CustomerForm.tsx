import React, { FC } from 'react';
import { CustomerFormWrapper } from './CustomerForm.styled';
import UserFormButton from '../UserFormButton/UserFormButton';
import { Form, FormGroup } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';

const CustomerForm: FC = () => {

  const { register, handleSubmit, setValue, setFocus } = useForm();

  const checkCEP = (e: { target: { value: string; }; }) => {
     const cep = e.target.value.replace(/\D/g, '');
    //  console.log(cep);
     if (cep === '') {
      // Se estiver vazio, limpa os valores dos campos
      setValue('address', '');
      setValue('city', '');
      setValue('state', '');
      setValue('neighborhood', '');
      return; // Sai da função
    } else{
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res=> res.json()).then(data=> {
      // console.log(data);
      setValue('address', data.logradouro);
      setValue('city', data.localidade);
      setValue('state', data.uf);
      setValue('neighborhood', data.bairro);
      if(data.logradouro === ''){
        setFocus('address');
      }else{
        setFocus('number');
      }
      });
    }  
   }

return(
  <CustomerFormWrapper data-testid="CustomerForm">
     <Form className='customerForm'>

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

  <Form.Group controlId="address">
        <Form.Label className='label'>
           <FormattedMessage id="CustomerForm.address"/>
        </Form.Label><br/>
        <Form.Control className='inputAddress' type="text" {...register("address", { required: true })}/>
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

  <Form.Group controlId="neighborhood">
        <Form.Label className='label'>
           <FormattedMessage id="CustomerForm.neighborhood"/>
        </Form.Label><br/>
        <Form.Control className='input' type="text" {...register("neighborhood", { required: true })}/>
  </Form.Group>&emsp;

  <Form.Group controlId="phonenumber">
        <Form.Label className='label'>
           <FormattedMessage id="CustomerForm.phonenumber"/>
        </Form.Label><br/>
        <Form.Control className='input' type="text" {...register("phonenumber", { required: true })}/>
  </Form.Group><br/><br/>

  <div className='divButton'>
  <UserFormButton buttonText="UserFormButton.register" />
  </div>
  
  </Form>
  </CustomerFormWrapper>
  
);
}

export default CustomerForm;
