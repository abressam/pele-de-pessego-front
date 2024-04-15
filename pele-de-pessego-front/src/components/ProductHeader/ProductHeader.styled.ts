import styled from 'styled-components';

export const ProductHeaderWrapper = styled.div`
    background-color: white;

    .header {
        width: 550px;
        display: flex;
        flex-direction: column;
        text-align: justify;
        padding: 15px;
    }

    .type, .name, .brand {
        display: flex;
        flex-direction: row;
    }

    .type, .brand {
        color: #34513A;
        font-size: 16px;
        font-family: "DM Sans", sans-serif;       
    }

    .type {
        font-weight: 400;
    }

    .name {
        color: #B54E4A;
        font-size: 18px;
        font-weight: 400;
        font-family: "Quando", sans-serif;
    }

    .brand {
        font-weight: 700;
    }
`;
