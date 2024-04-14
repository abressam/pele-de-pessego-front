import styled from 'styled-components';

export const ProductHeaderWrapper = styled.div`
    font-family: "DM Sans", sans-serif;

    .header {
        width: 500px;
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
    }

    .type {
        font-weight: 400;
    }

    .name {
        color: #B54E4A;
        font-size: 18px;
        font-weight: 400;
    }

    .brand {
        font-weight: 700;
    }
`;
