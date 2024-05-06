import { FC } from 'react';
import { CustomerFormWrapper } from './CustomerForm.styled';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import CustomerData from '../../types/CustomerData';
import CustomerService from '../../services/CustomerService';
import { useForm } from 'react-hook-form';

const CustomerForm: FC = () => {

  const initialUserState: CustomerData = {
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
      reset(initialUserState);
    })
    .catch(error => {
      console.error('Erro ao criar usuário cliente:', error);
    });

  };

  const { register, handleSubmit, setValue, setFocus, reset } = useForm<CustomerData>();

  const checkCEP = (e: { target: { value: string; }; }) => {
     const cep = e.target.value.replace(/\D/g, '');
    //  console.log(cep);
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
    <Button variant="primary" type="submit" form="customerForm">
      <FormattedMessage id="UserFormButton.register" />
    </Button>
  </div>
  
  </Form>
  </CustomerFormWrapper>
  
);
}

export default CustomerForm;
