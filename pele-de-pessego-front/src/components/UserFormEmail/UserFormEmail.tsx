import React, { FC } from 'react';
import { UserFormEmailWrapper } from './UserFormEmail.styled';

interface UserFormEmailProps {}

const UserFormEmail: FC<UserFormEmailProps> = () => (
 <UserFormEmailWrapper data-testid="UserFormEmail">
    <div>
        <label>
          Email:<br></br>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          required
        />
      </div>
 </UserFormEmailWrapper>
);

export default UserFormEmail;
