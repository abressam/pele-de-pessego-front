import styled from 'styled-components';

export const UserFormButtonWrapper = styled.div`

    button{
        width: 150px;
        height: 35px;
        border-radius: 4px ;
        background-color: #B54E4A;
        color:#F7E9DE;
    }

    button:hover {
        background-color: #A52A2A;
        color: white;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
      }

      button:active {
        background-color: #A52A2A;
        transform: translateY(4px);
      }
   
`;
