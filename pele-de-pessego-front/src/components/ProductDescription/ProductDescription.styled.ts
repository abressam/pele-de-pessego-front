import styled from 'styled-components';

export const ProductDescriptionWrapper = styled.div`
    background-color: white;
    width: 500px;
    max-height: 250px;
    padding: 15px;

    .description-title, .description-text {
        font-family: "Montserrat", sans-serif;
        color: black;
    }

    .description-title {
        display: flex;
        justify-content: flex-start;
        font-size: 16px;
        font-weight: 700;
    }

    .description-text {
        font-size: 14px;
        font-weight: 400;
        text-align: justify;
    }

    .card {
        display: flex;
        flex-direction: column;
    }
`;
