import React, { FC } from 'react';
import { UserFormButtonWrapper } from './UserFormButton.styled';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

interface UserFormButtonProps {
   buttonText: string;
}

const UserFormButton: FC<UserFormButtonProps> = ({buttonText}) => (
 <UserFormButtonWrapper data-testid="UserFormButton">
    <Button variant="primary" type="submit">
    <FormattedMessage id={buttonText} />
    </Button>
 </UserFormButtonWrapper>
);

export default UserFormButton;
