import React, { FC } from 'react';
import { UserFormWrapper } from './UserForm.styled';
import Form from 'react-bootstrap/Form';
import { FormattedMessage } from 'react-intl';
import UserFormButton from '../UserFormButton/UserFormButton';
import UserFormEmail from '../UserFormEmail/UserFormEmail';
import UserFormPassword from '../UserFormPassword/UserFormPassword';
import {Link} from 'react-router-dom';

interface UserFormProps {}

const UserForm: FC<UserFormProps> = () => (
 <UserFormWrapper data-testid="UserForm">
  <Form className='formCadastro'>
    <Form.Group controlId="name">
          <Form.Label className='label'>
           <FormattedMessage id="UserForm.name"/>
          </Form.Label><br/>
          <Form.Control type="text" required/>
    </Form.Group>

    <Form.Group controlId="cpf">
          <Form.Label className='label'>
            <FormattedMessage id="UserForm.cpf"/>
          </Form.Label><br/>
          <Form.Control type="text" required/>
    </Form.Group>

    <UserFormEmail></UserFormEmail>

    <UserFormPassword></UserFormPassword>

    <Form.Group controlId="confirmpassword">
          <Form.Label className='label'>
            <FormattedMessage id="UserForm.confirmpassword"/>
          </Form.Label><br/>
          <Form.Control type="password" required/>
    </Form.Group>

    <p className='p'>Já tem conta?<Link to="/login">Faça seu login aqui!</Link></p>
    {/* Mudei a tag a para Link e href para to assim a pagina não vai dar refresh toda vex que mudar a página */}

    <div className='divbutton'>
    <UserFormButton buttonText="UserFormButton.next" />
    </div>
    
  </Form>
  
 </UserFormWrapper>
);

export default UserForm;
