import React, { FC } from 'react';
import { UserFormSenhaWrapper } from './UserFormSenha.styled';

interface UserFormSenhaProps {}

const UserFormSenha: FC<UserFormSenhaProps> = () => (
 <UserFormSenhaWrapper data-testid="UserFormSenha">
    <div>
        <label>
        Senha:<br></br>
        </label>
        <input
          type="password"
          name="senha"
          id="senha"
          required
        />
      </div>
 </UserFormSenhaWrapper>
);

export default UserFormSenha;
