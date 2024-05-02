import { FC } from 'react';
import { useForm } from "react-hook-form";
import { UserFormWrapper } from './UserForm.styled';
import Form from 'react-bootstrap/Form';
import { FormattedMessage } from 'react-intl';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserData from '../../types/UserData';
import UserFormService from '../../services/UserFormService';

const UserForm: FC = () => {

  const initialUserState: UserData = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    is_admin: false
  };

  const { register, handleSubmit, reset } = useForm<UserData>();

  const onSubmit = (data: UserData) => {
    const is_admin = data.email.endsWith('@pdpsofty.com');
    data.is_admin = is_admin;

    console.log(data);

    UserFormService.createUser(data)
    .then(response => {
      console.log('Usuário criado com sucesso:', response.data);
      reset(initialUserState);
    })
    .catch(error => {
      console.error('Erro ao criar usuário:', error);
    });

  };

  return (
    <UserFormWrapper data-testid="UserForm">
      <Form className='formCadastro' id="userForm" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="name">
          <Form.Label className='label'>
          <FormattedMessage id="UserForm.name"/>
            </Form.Label><br/>
          <Form.Control 
            type="text"
            {...register("name", { required: true })}
          />
        </Form.Group>

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

        <Form.Group controlId="confirmpassword">
          <Form.Label className='label'>
            <FormattedMessage id="UserForm.confirmpassword"/>
          </Form.Label><br/>
          <Form.Control 
            type="password" 
            {...register("confirmpassword", { required: true })}
          />
        </Form.Group>

        <p className='p'>Já tem conta?<Link to="/login">Faça seu login aqui!</Link></p>

        <div className='divbutton'>
          <Button variant="primary" type="submit" form="userForm">
            <FormattedMessage id="UserFormButton.register" defaultMessage="Cadastrar" />
          </Button>
        </div>

      </Form>
    </UserFormWrapper>
  );
};

export default UserForm;