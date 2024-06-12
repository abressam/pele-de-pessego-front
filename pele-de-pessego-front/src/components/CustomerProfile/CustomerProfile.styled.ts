import styled from 'styled-components';

export const CustomerProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    .custom-card-style {
        display: flex;
        flex-direction: row;
        background-color: white;
        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        padding: 8px;
    }

    .custom-card-img {
        height: 100px;
    }

    .product-type, .product-brand, .product-price {
        margin: 5px 20px 0px 20px;
        text-align: left;
        padding: 3px;
        color: #34513A;
        font-family: "DM Sans", sans-serif;
    }

    .product-type {
        font-size: 18px;
        font-weight: 700;
    }

    .product-brand {
        font-size: 14px;
        font-weight: 700;
        justify-content: space-around;
    }

    span {
        margin-left: 10px;
    }

    .product-price {
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;
    }
    
    .info, .first-info, .price-info {
        display: flex;
        flex-direction: column;
    }

    .first-info {
        width: 300px;
    }
        
    .second-info {
        width: 150px;
        align-items: center;
    }

    .icons {
        justify-content: center;
        gap: 1rem;
    }

    .custom-button {
        background: none;
        border: none;
        padding: 10;
        cursor: pointer;
    }

    .trash-button svg {
        color: currentColor;
    }

    .trash-button:hover svg {
        color: red;
    }

    .pencil-button svg {
        color: currentColor;
    }

    .pencil-button:hover svg {
        color: green;
    }
    
    .button-position {
        display: flex;
        flex-direction: row-reverse;
    }

    .button-size {
        background-color: #B54E4A;
        border-radius: 8px;
        width: 164px;
        height: 64px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 16px;
        color: #F7E9DE;
        font-family: "DM Sans", sans-serif;
        gap: 8px;
    }

    .icon-wrapper {
        font-size: 24px;
    }
`;
