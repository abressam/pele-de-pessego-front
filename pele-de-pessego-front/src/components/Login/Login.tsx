import React, { FC, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { LoginWrapper } from './Login.styled';
import Form from 'react-bootstrap/Form';
import { FormattedMessage } from 'react-intl';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SignInData from '../../types/SignInData';
import SignInService from '../../services/SignInService';
import UserFormService from '../../services/UserFormService';
import { checkAdminAndRedirect } from '../../utils/checkAuth';

interface LoginProps {}

const Login: FC = () => {
  
  const initialSignInState: SignInData = {
    email: "",
    password: "",
    jwt: function (arg0: string, jwt: any): unknown {
      throw new Error('Function not implemented.');
    },
    user: undefined
  };


  const { register, handleSubmit, reset, watch } = useForm<SignInData>();
  const navigate = useNavigate();


  const onSubmit = async (data: SignInData) => {


    await SignInService.login(data)
    .then((response: any) => {
      console.log('Usuário fez login com sucesso:', response.data);
      // Salvando os dados no localStorage
      localStorage.setItem('jwt', response.data.jwt);
      reset(initialSignInState);
    })
    .catch((error: any) => {
      console.error('Erro ao iniciar sessão do usuário:', error);
    });


    await UserFormService.getUser()
    .then((response: any) => {
      console.log('Dados do usuário:', response.data);
      const userData = response.data.user
      localStorage.setItem('isAdmin', userData.is_admin);

      checkAdminAndRedirect(navigate)
    })

    .catch((error: any) => {
      console.error('Erro ao iniciar sessão do usuário:', error);
    });  

  };

  const email = watch("email");
  const password = watch("password");

  const isFormValid = () => {
      return email && password;
  };


  return (
    <LoginWrapper data-testid="Login">
    <Form className='formLogin' id="signInForm" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="email">
          <Form.Label className='label'>
            <FormattedMessage id="UserForm.email"/>
          </Form.Label><br/>
          <Form.Control
            type="email"
            {...register("email", { required: true })}
          />
        </Form.Group>
 
        <Form.Group controlId="password">
          <Form.Label className='label'>
            <FormattedMessage id="UserForm.password"/>
          </Form.Label><br/>
          <Form.Control
            type="password"
            {...register("password", { required: true })}
          />
        </Form.Group>
 
        <p className='p'>Ainda não tem conta?  <Link to="/signup">Cadastre-se aqui!</Link></p>
  
        <div className='divbutton'>
          <Button 
            variant="primary" 
            type="submit" 
            form="signInForm" 
            disabled={!isFormValid()} 
            className={isFormValid() ? '' : 'disabled-button'}
          >
            <FormattedMessage id="UserFormButton.send" defaultMessage="Cadastrar" />
          </Button>
        </div>
      </Form>
   </LoginWrapper>
  );
};


export default Login;
