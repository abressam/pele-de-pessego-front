import React, { FC } from 'react';
import { LoginWrapper } from './Login.styled';
import UserFormEmail from '../UserFormEmail/UserFormEmail';
import UserFormPassword from '../UserFormPassword/UserFormPassword';
import UserFormButton from '../UserFormButton/UserFormButton';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

interface LoginProps {}

const Login: FC<LoginProps> = () => (
 <LoginWrapper data-testid="Login">
 <Form className='formLogin'>
      <UserFormEmail></UserFormEmail>

      <UserFormPassword></UserFormPassword>

      <p className='p'>Ainda não tem conta?<Link to="/">Cadastre-se aqui!</Link></p>
      {/* Mudei a tag a para Link e href para to assim a pagina não vai dar refresh toda vex que mudar a página */}

      <div className='divbutton'>
      <UserFormButton buttonText="UserFormButton.send" />
      </div>
      
      
    </Form>
 </LoginWrapper>
);

export default Login;
