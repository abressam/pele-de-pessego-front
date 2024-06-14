import styled from 'styled-components';

export const SuccessWrapper = styled.div`

    font-family: "DM Sans", sans-serif;
    color: #34513A;
    font-size: 24px;

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .button-address {
        display: flex;
        flex-direction: row;
        justify-content: start;
        margin: 20px;
    }

    .button-size {
        cursor: pointer;
        background-color: #B54E4A;
        border-radius: 8px;
        width: 130px;
        height: 54px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 14px;
        color: #F7E9DE;
        border: none;
        font-family: "DM Sans", sans-serif;
        gap: 8px;
    }
`;
