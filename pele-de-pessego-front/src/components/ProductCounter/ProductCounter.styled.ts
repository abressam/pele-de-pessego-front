import styled from 'styled-components';

export const ProductCounterWrapper = styled.div`
    .counter, button, .product-price {
        display: flex;
        flex-direction: row;
        color: black;
        font-family: "Roboto", sans-serif;
        align-items: center;
    }

    .product-price {
        justify-content: space-between;
        padding: 15px;
    }

    .counter {
        width: 150px;
        justify-content: space-around;
    }

    button {
        background-color: #F6E3DC;
        font-weight: 500;
        font-size: 16px;
        border-radius: 10px;
        border: 1px solid #E5BFD6;
        padding: 10px;
        cursor: pointer;
    }

    #number {
        font-size: 20px;
    }
`;
