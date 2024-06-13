import React, { FC, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserFormWrapper } from './UserForm.styled';
import Form from 'react-bootstrap/Form';
import { FormattedMessage } from 'react-intl';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import UserData from '../../types/UserData';
import UserFormService from '../../services/UserFormService';

const UserForm: FC = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [isUpdate, setIsUpdate] = useState(false);

  const initialUserState: UserData = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    is_admin: false
  };

  const { register, handleSubmit, reset, setValue, watch } = useForm<UserData>();

  useEffect(() => {
    if (location.state) {
      const userData = location.state as UserData;
      setValue('name', userData.name);
      setValue('email', userData.email);
      setValue('is_admin', userData.is_admin);
      setIsUpdate(true);
    }
  }, [location.state, setValue]);

  const onSubmit = (data: UserData) => {
    const is_admin = data.email.endsWith('@pdpsoft.com');
    data.is_admin = is_admin;

    if (isUpdate) {
      const updateData: UserData = {
        name: data.name,
        email: data.email,
        password: data.password || "",
        confirmpassword: data.confirmpassword || "",
        is_admin: data.is_admin,
      };

      if (!data.password) {
        delete updateData.password;
        delete updateData.confirmpassword;
      }

      UserFormService.updateUser(updateData)
        .then(response => {
          console.log('Usuário atualizado com sucesso:', response.data);
          navigate('/customerprofile');
        })
        .catch(error => {
          console.error('Erro ao atualizar usuário:', error);
        });
    } else {
      UserFormService.createUser(data)
        .then(response => {
          console.log('Usuário criado com sucesso:', response.data);
          reset(initialUserState);
          navigate('/login');
        })
        .catch(error => {
          console.error('Erro ao criar usuário:', error);
        });
    }
  };

  const name = watch("name");
  const email = watch("email");
  const password = watch("password");
  const confirmpassword = watch("confirmpassword");

  const isFormValid = () => {
    if (isUpdate) {
      return name && email;
    } else {
      return name && email && password && confirmpassword;
    }
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
            disabled={isUpdate}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label className='label'>
            <FormattedMessage id="UserForm.password"/>
          </Form.Label><br/>
          <Form.Control 
            type="password" 
            {...register("password", { required: !isUpdate })}
          />
        </Form.Group>

        <Form.Group controlId="confirmpassword">
          <Form.Label className='label'>
            <FormattedMessage id="UserForm.confirmpassword"/>
          </Form.Label><br/>
          <Form.Control 
            type="password" 
            {...register("confirmpassword", { required: !isUpdate })}
          />
        </Form.Group>

        {isUpdate ? (
          <p></p>
        ) : (
          <p className='p'>Já tem conta?  <Link to="/login">Faça seu login aqui!</Link></p>
        )}

        <div className='divbutton'>
        <Button 
            variant="primary" 
            type="submit" 
            form="userForm" 
            disabled={!isFormValid()} 
            className={isFormValid() ? '' : 'disabled-button'}
          >          
          {isUpdate ? (
              <FormattedMessage id="Buttom.update" defaultMessage="Atualizar" />
            ) : (
              <FormattedMessage id="UserFormButton.register" defaultMessage="Cadastrar" />
            )}          
          </Button>
        </div>

      </Form>
    </UserFormWrapper>
  );
};

export default UserForm;