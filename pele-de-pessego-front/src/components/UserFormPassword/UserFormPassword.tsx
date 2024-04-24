import React, { FC } from 'react';
import { UserFormPasswordWrapper } from './UserFormPassword.styled';
import { Form } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

interface UserFormPasswordProps {}

const UserFormSenha: FC<UserFormPasswordProps> = () => (
 <UserFormPasswordWrapper data-testid="UserFormSenha">
    <Form.Group controlId="password">
        <Form.Label className='label'>
          <FormattedMessage id="UserForm.password"/>
        </Form.Label><br/>
        <Form.Control type="password" required/>
      </Form.Group>
 </UserFormPasswordWrapper>
);

export default UserFormSenha;
