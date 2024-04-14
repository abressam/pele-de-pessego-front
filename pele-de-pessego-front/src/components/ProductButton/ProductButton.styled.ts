import styled from 'styled-components';

export const ProductButtonWrapper = styled.div`
    display: flex;
    justify-content: center;

    Button {
        background-color: #B54E4A;
        border-radius: 8px;
        border: inherit;
        cursor: pointer;
    }

    .items {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 164px;
        height: 64px;
        font-weight: 700;
        font-size: 16px;
        color: #F7E9DE;
        font-family: "DM Sans", sans-serif;
        gap: 5px;
    }

    .icon-wrapper {
        font-size: 24px;
    }
`;
