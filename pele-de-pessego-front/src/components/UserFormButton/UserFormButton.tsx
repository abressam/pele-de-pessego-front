import React, { FC } from 'react';
import { UserFormButtonWrapper } from './UserFormButton.styled';
import { Button } from 'react-bootstrap';

interface UserFormButtonProps {
   buttonText: string;
}

const UserFormButton: FC<UserFormButtonProps> = ({buttonText}) => (
 <UserFormButtonWrapper data-testid="UserFormButton">
    <Button variant="primary" type="submit">
      {buttonText}
    </Button>
 </UserFormButtonWrapper>
);

export default UserFormButton;
