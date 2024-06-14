import React, { FC } from 'react';
import { useForm } from "react-hook-form";
import { LoginWrapper } from './Login.styled';
import Form from 'react-bootstrap/Form';
import { FormattedMessage } from 'react-intl';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SignInData from '../../types/SignInData';
import SignInService from '../../services/SignInService';
import UserFormService from '../../services/UserFormService';

const Login: FC = () => {
  const { register, handleSubmit, reset, watch } = useForm<SignInData>();
  const navigate = useNavigate();

  const initialSignInState: SignInData = {
    email: "",
    password: ""
  };

  const onSubmit = async (data: SignInData) => {
    try {
      const response = await SignInService.login(data);
      const jwt = response.data.jwt;
      
      if (jwt) {
        localStorage.setItem('jwt', jwt);
      } else {
        throw new Error('JWT token não está presente na resposta.');
      }

      reset(initialSignInState);

      const userResponse = await UserFormService.getUser();
      const userData = userResponse.data.user;
      localStorage.setItem('isAdmin', userData.is_admin.toString());

      if (userData.is_admin) {
        sessionStorage.setItem('needsReload', 'true');
        navigate('/productstock');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Erro ao iniciar sessão do usuário:', error);
      window.confirm('Usuário/senha incorretos!');
    }
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
