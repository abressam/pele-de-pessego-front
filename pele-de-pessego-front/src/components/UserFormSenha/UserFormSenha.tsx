import React, { FC } from 'react';
import { UserFormSenhaWrapper } from './UserFormSenha.styled';
import { Form } from 'react-bootstrap';

interface UserFormSenhaProps {}

const UserFormSenha: FC<UserFormSenhaProps> = () => (
 <UserFormSenhaWrapper data-testid="UserFormSenha">
    <Form.Group controlId="senha">
        <Form.Label className='label'>Senha:</Form.Label><br/>
        <Form.Control type="password" required/>
      </Form.Group>
 </UserFormSenhaWrapper>
);

export default UserFormSenha;
