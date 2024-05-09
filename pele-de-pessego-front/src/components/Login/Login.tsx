import { FC } from 'react';
import { LoginWrapper } from './Login.styled';
import { FormattedMessage } from 'react-intl';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import SignInData from '../../types/SignInData';
import SignInService from '../../services/SignInService';
import UserFormService from '../../services/UserFormService';
import {Link} from 'react-router-dom';

interface LoginProps {}

const Login: FC = () => {

  const initialSignInState: SignInData = {
    email: "",
    password: ""
  };

  const { register, handleSubmit, reset } = useForm<SignInData>();

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

      localStorage.setItem('email', response.data.email);
      localStorage.setItem('isAdmin', response.data.is_admin);
    })
    .catch((error: any) => {
      console.error('Erro ao iniciar sessão do usuário:', error);
    });

    

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
        {/* Mudei a tag a para Link e href para to assim a pagina não vai dar refresh toda vex que mudar a página */}
  
        <div className='divbutton'>
          <Button variant="primary" type="submit" form="signInForm">
            <FormattedMessage id="UserFormButton.send" defaultMessage="Cadastrar" />
          </Button>
        </div>
      </Form>
   </LoginWrapper>
  );
};

export default Login;
