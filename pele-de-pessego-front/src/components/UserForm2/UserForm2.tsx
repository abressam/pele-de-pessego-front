import React, { FC } from 'react';
import { UserForm2Wrapper } from './UserForm2.styled';
import UserFormButton from '../UserFormButton/UserFormButton';
import { Form, FormGroup } from 'react-bootstrap';

interface UserForm2Props {}

const UserForm2: FC<UserForm2Props> = () => (
 <UserForm2Wrapper data-testid="UserForm2">
   <Form className='formCadastro2'>
   <Form.Group controlId="endereco">
          <Form.Label className='label'>Endereço:</Form.Label><br/>
          <Form.Control type="text" required/>
    </Form.Group>&emsp;
    <Form.Group controlId="numero">
          <Form.Label className='label'>Numero:</Form.Label><br/>
          <Form.Control type="text" required/>
    </Form.Group><br/>
    <Form.Group controlId="complemento">
          <Form.Label className='label'>Complemento:</Form.Label><br/>
          <Form.Control type="text"/>
    </Form.Group>&emsp;
    <Form.Group controlId="cep">
          <Form.Label className='label'>CEP:</Form.Label><br/>
          <Form.Control type="text" required/>
    </Form.Group><br/>
    <Form.Group controlId="cidade">
          <Form.Label className='label'>Cidade:</Form.Label><br/>
          <Form.Control type="text" required/>
    </Form.Group>&emsp;
    <Form.Group controlId="estado">
          <Form.Label className='label'>Estado:</Form.Label><br/>
          <Form.Control type="text" required/>
    </Form.Group><br/>
    <Form.Group controlId="bairro">
          <Form.Label className='label'>Bairro:</Form.Label><br/>
          <Form.Control type="text" required/>
    </Form.Group>&emsp;
    <Form.Group controlId="telefone">
          <Form.Label className='label'>Telefone:</Form.Label><br/>
          <Form.Control type="text" required/>
    </Form.Group><br/><br/>
    <div className='divbutton'>
    <UserFormButton 
      buttonText='Cadastrar'
    />
    </div>
    
   </Form>
 </UserForm2Wrapper>
);

export default UserForm2;
