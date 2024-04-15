import styled from 'styled-components';

export const UserForm2Wrapper = styled.div`
label{
    color: #B54E4A;
    font-size: 14px;
    font-family:DM Sans;
    top:24px;
    left:24px;
}
input{
    border: 1px solid #B54E4A;
    border-radius: 6px;
    min-width: 230px;
    height: 20px;
    background-color:#F7E9DE;
    font-size:14px;
}
.formulario{
    border-radius: 5px;
    background-color:#F7E9DE;
    padding: 20px;
    gap:16px;
    text-align:left;
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

.div{
    text-align: center;
}

div{
    display: inline-block;
}

form{
    text-align:center;
}
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
    transform: translateY(1px);
  }
`;
