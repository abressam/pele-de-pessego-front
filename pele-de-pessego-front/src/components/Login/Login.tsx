import React, { FC } from 'react';
import { LoginWrapper } from './Login.styled';
import UserFormEmail from '../UserFormEmail/UserFormEmail';
import UserFormSenha from '../UserFormSenha/UserFormSenha';
import UserFormButton from '../UserFormButton/UserFormButton';

interface LoginProps {}

const Login: FC<LoginProps> = () => (
 <LoginWrapper data-testid="Login">
   <form className='formulario'>
      <UserFormEmail></UserFormEmail>
      <UserFormSenha></UserFormSenha>
      <br/>
      <div>
        <p className='p'>Ainda não tem conta?<a href="">Faça seu login aqui!</a></p>
      </div><br/>
      <div className='div'>
        <UserFormButton 
          buttonText="Entrar"
        />
      </div>
   </form>
 </LoginWrapper>
);

export default Login;
