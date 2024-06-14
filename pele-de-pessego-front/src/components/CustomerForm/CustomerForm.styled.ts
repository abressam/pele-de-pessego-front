import styled from 'styled-components';

export const CustomerFormWrapper = styled.div`
    .label{
        color: #B54E4A;
        font-size: 14px;
        font-family:DM Sans;
        top:24px;
        left:24px;
        
    }
    .input{
        border: 1px solid #B54E4A;
        border-radius: 6px;
        min-width: 230px;
        height: 20px;
        background-color:#F7E9DE;
        font-size:14px;
    }

    .inputStreet{
        border: 1px solid #B54E4A;
        border-radius: 6px;
        min-width: 490px;
        height: 20px;
        background-color:#F7E9DE;
        font-size:14px;
    }
    .customerForm{
        border-radius: 5px;
        background-color:#F7E9DE;
        padding: 20px;
        gap:16px;
        text-align: left;
    }
    .p{
        color: #34513A;
        font-size: 14px;
    }
    a{
        color:#B54E4A;
    }
    a:hover {
        color: #34513A;
    }

    div{
        display: inline-block;
    }

    .divButton{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
    }

    button{
        width: 150px;
        height: 35px;
        border-radius: 4px ;
        background-color: #B54E4A;
        color:#F7E9DE;
        border-color:transparent;
        
    }

    button:hover {
        background-color: #A52A2A;
        color: white;
        
    }

    button:active {
        background-color: #A52A2A;
        transform: translateY(1px);
    }


    .disabled-button {
        background-color: gray; /* Cor do botão desativado */
        cursor: not-allowed; /* Remove o ponteiro do cursor */
    }

    .disabled-button:hover {
        background-color: gray; /* Mantém a cor do botão desativado */
        color: white; /* Mantém a cor do texto do botão */
        box-shadow: none; /* Remove a sombra do botão */
    }
    `;
