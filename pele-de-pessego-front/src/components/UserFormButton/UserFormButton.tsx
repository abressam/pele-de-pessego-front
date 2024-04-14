import React, { FC } from 'react';
import { UserFormButtonWrapper } from './UserFormButton.styled';
import { Button } from 'react-bootstrap';

interface UserFormButtonProps {}

const UserFormButton: FC<UserFormButtonProps> = () => (
 <UserFormButtonWrapper data-testid="UserFormButton">
    <button type="submit">Próximo</button>
 </UserFormButtonWrapper>
);

export default UserFormButton;
