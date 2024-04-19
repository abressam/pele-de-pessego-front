import React, { FC } from 'react';
import { UserFormWrapper } from './UserForm.styled';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import UserFormButton from '../UserFormButton/UserFormButton';
import UserFormEmail from '../UserFormEmail/UserFormEmail';
import UserFormSenha from '../UserFormSenha/UserFormSenha';

interface UserFormProps {}

const UserForm: FC<UserFormProps> = () => (
 <UserFormWrapper data-testid="UserForm">
  <Form className='formCadastro'>
    <Form.Group controlId="nome">
          <Form.Label className='label'>Nome Completo:</Form.Label><br/>
          <Form.Control type="text" required/>
    </Form.Group>
    <Form.Group controlId="cpf">
          <Form.Label className='label'>CPF:</Form.Label><br/>
          <Form.Control type="text" required/>
    </Form.Group>
    <UserFormEmail></UserFormEmail>
    <UserFormSenha></UserFormSenha>
    <Form.Group controlId="confirmarsenha">
          <Form.Label className='label'>Confirmar Senha:</Form.Label><br/>
          <Form.Control type="password" required/>
    </Form.Group>
    <p className='p'>Já tem conta?<a href="">Faça seu login aqui!</a></p>
    <div className='divbutton'>
    <UserFormButton
      buttonText='Próximo'
    />
    </div>
    
  </Form>
  
 </UserFormWrapper>
);

export default UserForm;
