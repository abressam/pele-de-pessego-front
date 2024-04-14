import styled from 'styled-components';

export const ProductDescriptionWrapper = styled.div`
    background-color: white;
    width: 500px;
    max-height: 350px;
    padding: 15px;

    .description-title, .description-text {
        font-family: "DM Sans", sans-serif;
        color: #616161;
    }

    .description-title {
        display: flex;
        justify-content: flex-start;
        font-size: 18px;
        font-weight: 500;
    }

    .description-text {
        font-size: 18px;
        font-weight: 400;
        text-align: justify;
    }

    .card {
        display: flex;
        flex-direction: column;
    }
`;
