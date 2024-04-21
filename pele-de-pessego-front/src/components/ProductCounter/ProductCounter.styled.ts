import styled from 'styled-components';

export const ProductCounterWrapper = styled.div`
    background-color: white;

    .counter, button, .product-price {
        display: flex;
        flex-direction: row;
        color: black;
        font-family: "DM Sans", sans-serif;
        align-items: center;
    }

    .product-price {
        justify-content: space-between;
        font-weight: 700;
        font-size: 24px;
        padding: 15px;
    }

    .counter {
        width: 150px;
        justify-content: space-around;
    }

    button {
        background-color: inherit;
        border: inherit;
        padding: 10px;
        cursor: pointer;
    }

    #number, #operator {
        font-size: 24px;
        font-weight: 400;
    }

`;
