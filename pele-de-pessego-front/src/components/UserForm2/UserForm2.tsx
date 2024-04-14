import React, { FC } from 'react';
import { UserForm2Wrapper } from './UserForm2.styled';
import UserFormButton from '../UserFormButton/UserFormButton';


interface UserForm2Props {}

const UserForm2: FC<UserForm2Props> = () => (
 <UserForm2Wrapper data-testid="UserForm2">
   <div className='formulario'>
      <form>
      <div>
         <label>
            Endereço:<br></br>
         </label>
         <input
            type="text"
            name="endereco"
            id="endereco"
            required
         />
         </div>&nbsp;
         <div>
         <label>
            Numero:<br></br>
         </label>
         <input
            type="text"
            name="numero"
            id="numero"
            required
         />
         </div><br />
         <div>
         <label>
            Complemento:<br></br>
         </label>
         <input
            type="text"
            name="complemento"
            id="complemento"
         />
         </div>&nbsp;
         <div>
         <label>
         CEP:<br></br>
         </label>
         <input
            type="text"
            name="cep"
            id="cep"
            required
         />
         </div><br/>
         <div>
         <label>
         Cidade:<br></br>
         </label>
         <input
            type="text"
            name="cidade"
            id="cidade"
            required
         />
         </div>&nbsp;
         <div>
         <label>
         Estado:<br></br>
         </label>
         <input
            type="text"
            name="estado"
            id="estado"
            required
         />
         </div><br/>
         <div>
         <label>
         Bairro:<br></br>
         </label>
         <input
            type="text"
            name="bairro"
            id="bairro"
            required
         />
         </div>&nbsp;
         <div>
         <label>
         Telefone:<br></br>
         </label>
         <input
            type="text"
            name="telefone"
            id="telefone"
            required
         />
         </div><br /><br/>
         <div className='div'>
         <UserFormButton 
            buttonText="Cadastrar"
         />
         </div>
      </form> 
   </div>
 </UserForm2Wrapper>
);

export default UserForm2;
