import React, { FC } from 'react';
import { LoginWrapper } from './Login.styled';
import UserFormEmail from '../UserFormEmail/UserFormEmail';
import UserFormSenha from '../UserFormSenha/UserFormSenha';
import UserFormButton from '../UserFormButton/UserFormButton';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface LoginProps {}

const Login: FC<LoginProps> = () => (
 <LoginWrapper data-testid="Login">
 <Form className='formLogin'>
      <UserFormEmail></UserFormEmail>
      <UserFormSenha></UserFormSenha>
      <p className='p'>Ainda não tem conta?<a href="">Cadastre-se aqui!</a></p>
      <div className='divbutton'>
      <UserFormButton
        buttonText="Enviar"
      />
      </div>
      
      
    </Form>
 </LoginWrapper>
);

export default Login;
