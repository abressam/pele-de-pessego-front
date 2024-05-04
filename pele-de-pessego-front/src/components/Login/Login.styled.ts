import styled from 'styled-components';

export const LoginWrapper = styled.div`

    .formLogin{
        min-height:150px;
        border-radius: 8px ;
        background-color: #34513A;
        padding: 40px;
        gap:16px;
        text-align:left;
    }
    .label{
        color: white;
        font-size: 14px;
        font-family:DM Sans;
        top:24px;
        left:24px;
    }
    input{
        border: 1px solid white;
        border-radius: 6px;
        width: 330px;
        height: 20px;
        background-color:white;
        font-size:14px;
    }
    .p{
        color: white;
        font-size: 14px;
    }
    a{
        color:#FFBE98;
    }
    a:hover {
        color: white;
      }
      .divbutton{
        text-align: center;
    }
    button{
        width: 150px;
        height: 35px;
        border-radius: 4px ;
        background-color: white;
        color:#34513A;
        text-align: center;
        border-color: transparent;
    }
    
    button:hover {
        background-color: #34513A;
        color: white;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
      }
    
      button:active {
        background-color: #34513A;
        transform: translateY(1px);
      }
`;
