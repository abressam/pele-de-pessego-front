import styled from 'styled-components';

export const ProductHeaderWrapper = styled.div`
    font-family: "Montserrat", sans-serif;

    .header {
        width: 500px;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: 15px;
    }

    .type, .name, .brand {
        display: flex;
        flex-direction: row;
    }

    .type, .name {
        color: black;
    }

    .type {
        font-size: 16px;
        font-weight: 500;
    }

    .name {
        font-size: 20px;
        font-weight: 700;
    }

    .brand {
        color: #343a40;
        font-size: 14px;
        font-weight: 400;
    }
`;
