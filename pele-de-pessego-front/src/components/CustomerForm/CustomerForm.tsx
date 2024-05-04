import React, { FC } from 'react';
import { CustomerFormWrapper } from './CustomerForm.styled';
import UserFormButton from '../UserFormButton/UserFormButton';
import { Form, FormGroup } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

interface CustomerFormProps {}

const CustomerForm: FC<CustomerFormProps> = () => (
 <CustomerFormWrapper data-testid="CustomerForm"> 
 
   <Form className='customerForm'>

   <Form.Group controlId="cpf">
        <Form.Label className='label'>
          <FormattedMessage id="UserForm.cpf"/>
        </Form.Label><br/>
        <Form.Control className='input' type="text" required/>
    </Form.Group>&emsp;

    <Form.Group controlId="zipcode">
          <Form.Label className='label'>
            <FormattedMessage id="CustomerForm.zipcode"/>
          </Form.Label><br/>
          <Form.Control className='input' type="text" required/>
    </Form.Group><br/>

   <Form.Group controlId="address">
          <Form.Label className='label'>
            <FormattedMessage id="CustomerForm.address"/>
          </Form.Label><br/>
          <Form.Control className='inputAddress' type="text" required/>
    </Form.Group><br/>

    <Form.Group controlId="number">
          <Form.Label className='label'>
            <FormattedMessage id="CustomerForm.number"/>
          </Form.Label><br/>
          <Form.Control className='input' type="text" required/>
    </Form.Group>&emsp;

    <Form.Group controlId="complement">
          <Form.Label className='label'>
            <FormattedMessage id="CustomerForm.complement"/>
          </Form.Label><br/>
          <Form.Control className='input' type="text"/>
    </Form.Group><br/>

    <Form.Group controlId="city">
          <Form.Label className='label'>
            <FormattedMessage id="CustomerForm.city"/>
          </Form.Label><br/>
          <Form.Control className='input' type="text" required/>
    </Form.Group>&emsp;

    <Form.Group controlId="state">
          <Form.Label className='label'>
            <FormattedMessage id="CustomerForm.state"/>
          </Form.Label><br/>
          <Form.Control className='input' type="text" required/>
    </Form.Group><br/>

    <Form.Group controlId="neighborhood">
          <Form.Label className='label'>
            <FormattedMessage id="CustomerForm.neighborhood"/>
          </Form.Label><br/>
          <Form.Control className='input' type="text" required/>
    </Form.Group>&emsp;

    <Form.Group controlId="phonenumber">
          <Form.Label className='label'>
            <FormattedMessage id="CustomerForm.phonenumber"/>
          </Form.Label><br/>
          <Form.Control className='input' type="text" required/>
    </Form.Group><br/><br/>

    <div className='divButton'>
    <UserFormButton buttonText="UserFormButton.register" />
    </div>
    
   </Form>
 </CustomerFormWrapper>
);

export default CustomerForm;
