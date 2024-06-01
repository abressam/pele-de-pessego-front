import styled from 'styled-components';

export const ProductFormWrapper = styled.div`

    margin-top: 100px;
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
        width: 300px;
        height: 20px;
        background-color:#F7E9DE;
        font-size:14px;
    }

    .inputBrand{
        border: 1px solid #B54E4A;
        border-radius: 6px;
        width: 300px;
        height: 20px;
        background-color:#F7E9DE;
        font-size:14px;
        
    }

    .inputPrice{
        border: 1px solid #B54E4A;
        border-radius: 6px;
        width: 300px;
        height: 20px;
        background-color:#F7E9DE;
        font-size:14px;
    }

    .inputQuantity{
        border: 1px solid #B54E4A;
        border-radius: 6px;
        width: 300px;
        height: 20px;
        background-color:#F7E9DE;
        font-size:14px;
    }

    .inputDescription{
        border: 1px solid #B54E4A;
        border-radius: 6px;
        width: 300px;
        height: 50px;
        background-color:#F7E9DE;
        font-size:14px;
    }

    .inputImage{
        border: 1px solid #B54E4A;
        border-radius: 6px;
        width: 300px;
        height: 20px;
        background-color:#F7E9DE;
        font-size:14px;
    }

    input::placeholder {
        color: #B54E4A; /* Cor desejada para o placeholder */
    }

    .inputStreet{
        border: 1px solid #B54E4A;
        border-radius: 6px;
        min-width: 490px;
        height: 20px;
        background-color:#F7E9DE;
        font-size:14px;
    }
    .productForm{
        border-radius: 5px;
        background-color:#F7E9DE;
        padding: 20px;
        gap:16px;
        text-align: left;
        color: #B54E4A;
        
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
        text-align: center;
        display: block; /* Para que a propriedade text-align funcione */
        margin: 0 auto; /* Para centralizar horizontalmente */
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
    `;