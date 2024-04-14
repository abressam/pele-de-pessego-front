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
  <div className='formulario'>
    <form>
      <div>
        <label>
          Nome Completo:<br></br>
        </label>
        <input
          type="text"
          name="nome"
          id="nome"
          required
        />
      </div>
      <div>
        <label>
          CPF:<br></br>
        </label>
        <input
          type="text"
          name="cpf"
          id="cpf"
          required
        />
      </div>
      <UserFormEmail></UserFormEmail>
      <UserFormSenha></UserFormSenha>
      <div>
        <label>
        Confirmar Senha:<br></br>
        </label>
        <input
          type="password"
          name="confirmarsenha"
          id="confirmarsenha"
          required
        />
      </div><br></br>
      <div>
        <p className='p'>Já tem conta?<a href="">Faça seu login aqui!</a></p>
      </div>
      <div className='div'>
        <UserFormButton></UserFormButton>
      </div>
      </form>  
      </div>
 </UserFormWrapper>
);

export default UserForm;
