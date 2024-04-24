import React, { FC } from 'react';
import { UserFormEmailWrapper } from './UserFormEmail.styled';
import { Form } from 'react-bootstrap';

interface UserFormEmailProps {}

const UserFormEmail: FC<UserFormEmailProps> = () => (
 <UserFormEmailWrapper data-testid="UserFormEmail">
    <Form.Group controlId="email">
        <Form.Label className='label'>E-mail:</Form.Label><br/>
        <Form.Control type="email" required/>
      </Form.Group>
 </UserFormEmailWrapper>
);

export default UserFormEmail;
